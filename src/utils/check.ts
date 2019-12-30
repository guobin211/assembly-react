const toString = Object.prototype.toString

/**
 * 安全的正整数
 * @param val
 */
export function isSafeStepNumber(val: number | string): boolean {
  return Number.isSafeInteger(Number(val)) && Number(val) >= 0
}

/**
 * HTMLDivElement
 * @param tag
 */
export function isHTMLDivElement(tag: string |  HTMLElement) {
  let dom
  if (typeof tag === 'string') {
    dom = document.getElementById(tag)
  } else {
    dom = tag
  }
  return toString.call(dom) === '[object HTMLDivElement]'
}

export function isNull(obj: any) {
  return toString.call(obj) === '[object Null]'
}

export function isUndefined(obj: any) {
  return toString.call(obj) === '[object Undefined]'
}

export function isNumber(obj: any) {
  return toString.call(obj) === '[object Number]'
}

export function isString(obj: any) {
  return toString.call(obj) === '[object String]'
}

export function isBoolean(obj: any) {
  return toString.call(obj) === '[object Boolean]'
}

export function isFunction(obj: any) {
  return toString.call(obj) === '[object Function]'
}

export function isDate(obj: any) {
  return toString.call(obj) === '[object Date]'
}

export function isArray(obj: any) {
  return toString.call(obj) === '[object Array]'
}
