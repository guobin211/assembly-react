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
export function isHTMLDivElement(tag: string | any) {
  let dom
  if (typeof tag === 'string') {
    dom = document.getElementById(tag)
  } else {
    dom = tag
  }
  return dom.__proto__.toString() === '[object HTMLDivElement]'
}
