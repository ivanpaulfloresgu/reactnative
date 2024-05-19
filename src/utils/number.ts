export const isValidText = (value: string) =>
  new RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/).test(value)
