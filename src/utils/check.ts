/**
 * 安全的正整数
 * @param val
 */
export function isSafeStepNumber(val: number | string): boolean {
  if (typeof val === 'number') {
    return Number.isSafeInteger(val) && val >= 0
  } else {
    val = Number(val)
    return Number.isSafeInteger(Number(val)) && Number(val) >= 0
  }
}
