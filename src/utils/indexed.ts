/* JSON */
export interface JsonObject<T> {
  [key: string]: T
}

/* Array */
export interface ArrayObject<T> {
  [key: number]: T
}

export const GlobalMap: Map<string | number | JsonObject<any> | symbol, any> = new Map()
