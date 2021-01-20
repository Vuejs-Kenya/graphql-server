const { ApolloServer } = require('apollo-server')
const { resolvers, typeDefs } = require('./schema')
const logger = require('pino')()

const port = process.env.PORT || 8080

new ApolloServer({resolvers, typeDefs }).listen({ port }, () =>
    console.log(`Server ready at: http://localhost:${port}`),
    logger.info(`Server ready at: http://localhost:${port}`)
)