# Braintrain Backend

This application was built as my project submission for my final year in college. This is the backend of the braintrain application. The backend exposes a graphql endpoint to query for data and create mutation and also a paypal endpoint to make payments. The logic used for payment is a hack I devised myself there may be several security flaws but payment does go through.

**Todo**

 - [x] Design backend architecture
 - [x] Integrate graphql yoga
 - [x] Integrate prisma to generate queries and mutation based on a schema
 - [x] Tailor the mutations and queries based on our use case
 - [x] Setup authentication and authorization using brcypt and JWT
 - [x] Create roles for admin, teacher and student
 - [ ] Improve checkout security flow


## Getting Started

### Prerequisites
- Download node-v10.15.3 [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### Installing

Install dependencies and start on localhost:4000
 - Run `npm install`
 - Run `npm start`
 
 ### Testing
 You can fire an arbitrary **mutation** like

    mutation{signup(email:"zosh@gmail.com",fid:"23124241",name:"zosh",dpUrl:"https://via.placeholder.com/150"){
    user{
      name
    }
      }
      }

or a **query** like

    users{
    name}

  

## Built with

 - NPM - Dependency manager
 - GraphQL Yoga - Express based graphql framework
 - Paypal - Payments Gateway
 - Prisma - Graphql database proxy

## Authors

-   **Mehul Gawde** 

