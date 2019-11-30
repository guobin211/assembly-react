/**
 * 创建dom元素
 * @param tag
 * @param attrs
 */
export function createElement(tag: string, attrs?: {[key: string]: string}) {
  const element = document.createElement(tag)
  if (attrs) {
    for (const attrsKey in attrs) {
      element.setAttribute(attrsKey, attrs[attrsKey])
    }
  }
  return element
}
