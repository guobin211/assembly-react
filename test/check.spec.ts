import { isSafeStepNumber } from '../src/utils/check'

describe('utils: check', () => {
  test('isSafeStepNumber: boolean', () => {
    expect(
      isSafeStepNumber(1)
    ).toBe(true)
    expect(
      isSafeStepNumber(-1)
    ).toBe(false)
    expect(
      isSafeStepNumber('-1')
    ).toBe(false)
    expect(
      isSafeStepNumber(1)
    ).toBe(true)
    expect(
      isSafeStepNumber(1.5)
    ).toBe(false)
  })
})
