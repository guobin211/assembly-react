/* JSON */
export interface JsonObject {
  [key: string]: any
}

/* Array */
export interface ArrayObject<T> {
  [key: number]: T
}

export const GlobalMap: Map<string | number | JsonObject | symbol, any> = new Map()
