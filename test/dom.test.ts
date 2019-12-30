import { createElement } from '../src/utils/dom'
import { isHTMLDivElement } from '../src/utils/check'

describe('utils: dom', () => {
  test('createElement() : boolean', () => {
    let dom = createElement('div')
    expect(isHTMLDivElement(dom)).toBe(true)
    dom = createElement('span')
    expect(isHTMLDivElement(dom)).toBe(false)
  })
})
