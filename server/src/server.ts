import { ApolloServer } from 'apollo-server'
import graphql from '@graphql'

const server = new ApolloServer(graphql)
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
