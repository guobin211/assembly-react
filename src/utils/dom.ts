/**
 * 创建dom元素
 * @param tag
 * @param attrs
 */
import { HtmlTags, SvgTags } from '../base/tags-type'

export function createElement(tag: HtmlTags | SvgTags, attrs?: {[key: string]: string}) {
  const element = document.createElement(tag)
  if (attrs) {
    for (const attrsKey in attrs) {
      element.setAttribute(attrsKey, attrs[attrsKey])
    }
  }
  return element
}
