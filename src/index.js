const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Classroom = require('./resolvers/Classroom')
const User = require('./resolvers/User')
const Batch = require('./resolvers/Batch')
const Lecture = require('./resolvers/Lecture')
const bodyParser = require('body-parser')
var paypal = require('paypal-rest-sdk')
const resolvers = {
	Query,
	Mutation,
	Classroom,
	User,
	Batch,
	Lecture
}

paypal.configure({
	mode: 'sandbox', //sandbox or live
	client_id:
		'AfO7JbyRzhbfd6-_GUBH63uEE18y8L2R94adtsO4GCPd9HK-09A3MnefRULYVed4ZLt7qD2069UlO11y',
	client_secret:
		'EFsSCPWR4U4ECo3nD2fRlnjrRXm7U4ss0s39nC5YLAGdjTTMU3aRoY-qj31aedsdZTPublvHxm3Qak9E'
})

const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers,
	context: request => {
		return {
			...request,
			prisma
		}
	}
})

server.express.use(bodyParser.urlencoded({ extended: false }))
server.express.use(bodyParser.json())

server.express.use('/pay/:classroomId/:batchId/:userId', (req, res) => {
	var create_payment_json = {
		intent: 'sale',
		payer: {
			payment_method: 'paypal'
		},
		redirect_urls: {
			return_url: `https://fathomless-cove-25949.herokuapp.com/success/${req.params.classroomId}/${
				req.params.batchId
			}/${req.params.userId}/${req.body.fee}`,
			cancel_url: 'https://fathomless-cove-25949.herokuapp.com/cancel'
		},
		transactions: [
			{
				item_list: {
					items: [
						{
							name: req.body.name,
							sku: 'item',
							price: req.body.fee,
							currency: 'USD',
							quantity: 1
						}
					]
				},
				amount: {
					currency: 'USD',
					total: req.body.fee
				},
				description: 'This is the payment description.'
			}
		]
	}

	paypal.payment.create(create_payment_json, function(error, payment) {
		if (error) {
			throw error
		} else {
			// console.log('Create Payment Response')
			// console.log(payment)
			res.setHeader('Content-Type', 'application/json')
			res.end(JSON.stringify(payment))
		}
	})
	// res.status(200).send()
})

const asyncMiddleware = async (req, res, next) => {
	const count = await prisma
		.batch({ id: req.params.batchId })
		.$fragment(`{ students{name}  }`)
	if (count.students.length > 4) throw new Error('Batch is full')
	await prisma.updateClassroom({
		data: {
			students: { connect: { id: req.params.userId } }
		},
		where: {
			id: req.params.classroomId
		}
	})

	await prisma.updateBatch({
		data: {
			students: { connect: { id: req.params.userId } }
		},
		where: {
			id: req.params.batchId
		}
	})
	next()
}

server.express.use(
	`/success/:classroomId/:batchId/:userId/:fee`,
	asyncMiddleware,
	(req, res) => {
		const payerId = req.query.PayerID
		const paymentId = req.query.paymentId
		const execute_payment_json = {
			payer_id: payerId,
			transactions: [
				{
					amount: {
						currency: 'USD',
						total: req.params.fee
					}
				}
			]
		}

		paypal.payment.execute(
			paymentId,
			execute_payment_json,
			(error, payment) => {
				if (error) {
					// console.log(error.response)
					throw error
				} else {

					res
						.status(301)
						.redirect(
							`https://thebraintrain.netlify.com/Classrooms/${req.params.classroomId}`
						)
				}
			}
		)
	}
)

server.express.use('/cancel', (req, res) => {
	res.redirect('https://thebraintrain.netlify.com/paymentfailed')
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
