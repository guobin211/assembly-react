export const isValid = (key: string, val: object): key is keyof typeof val => {
  return key in val
}
