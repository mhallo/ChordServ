const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.get('/chord/:name', async (request, reply) => {
    switch(request.params.name){
      case 'A':
        return {Chord: "X02220"}
      case 'A4':
        return {Chord: "X02240"}
      case 'A7':
        return {Chord: "X02020"}
      default:
        return {Error: "I'm not smart enough to know this chord :("}
    }
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
    console.log(fastify.printRoutes())
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()