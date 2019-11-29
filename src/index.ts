import './index.css'

const data = new Array(200).fill('div')

function createList(data: string[]): HTMLDivElement[] {
  return data.map(value => createDiv(value))
}

function createDiv(text: string) {
  const div = document.createElement('div')
  div.setAttribute('class', 'item')
  div.innerText = text
  return div
}

const app = document.getElementById('app')
const warp = document.createElement('div')
const divElements = createList(data)
for (const divElement of divElements) {
  warp.appendChild(divElement)
}
app.appendChild(warp)

const itemHeight = (warp.childNodes[0] as HTMLDivElement).clientHeight
// 第一个元素的高度
console.log(itemHeight)
// 实际总高度
const allHeight = itemHeight * data.length
// 容器总高度
const warpHeight = itemHeight * 20
console.log(warpHeight)
// 滚动条高度
const scrollBarHeight = warpHeight * (20 / data.length)
console.log(scrollBarHeight);

