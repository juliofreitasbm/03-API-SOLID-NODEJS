import { FastifyReply, FastifyRequest } from 'fastify'

export function verifyUserRole(roleToVeriy: 'ADMIN' | 'MEMBER') {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const { role } = request.user

    if (role !== roleToVeriy) {
      return reply.status(401).send({ message: 'Unauthorized.' })
    }
  }
}
