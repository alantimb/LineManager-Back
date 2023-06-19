import { ApplicationError } from 'protocols';

export function invalidExistingDataError(email: string, cpfCnpj: string, message: string): ApplicationEmailError {
  if (message === email) {
    return {
      name: 'invalidExistingDataError',
      email: email,
      message: `"${email}" is not a valid email!`,
    };
  }

  if (message === cpfCnpj && message.length === 11) {
    return {
      name: 'invalidExistingDataError',
      email: cpfCnpj,
      message: `"${cpfCnpj}" is not a valid cpf!`,
    };
  } else if (message === cpfCnpj && message.length === 14) {
    return {
      name: 'invalidExistingDataError',
      email: cpfCnpj,
      message: `"${cpfCnpj}" is not a valid cnpj!`,
    };
  }
  
}

export type ApplicationEmailError = ApplicationError & { email: string };
