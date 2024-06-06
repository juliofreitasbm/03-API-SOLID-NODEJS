export class InvalidCredentialsError extends Error {
  constructor() {
    super('E-mail already existis.')
  }
}
