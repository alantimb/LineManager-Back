import { ApplicationError } from 'protocols';

export function invalidExistingDataError(email: string, cpf: string, message: string): ApplicationEmailError {
  if (message === email) {
    return {
      name: 'invalidExistingDataError',
      email: email,
      message: `"${email}" is not a valid email!`,
    };
  }

  if (message === cpf) {
    return {
      name: 'invalidExistingDataError',
      email: cpf,
      message: `"${cpf}" is not a valid cpf!`,
    };
  }
  
}

export type ApplicationEmailError = ApplicationError & { email: string };
