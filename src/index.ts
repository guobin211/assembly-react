import './index.css'

function Button() {
  const button = document.createElement('button')
  button.setAttribute('style', 'width: 120px; height: 40px')
  button.type = 'button'
  button.innerText = '确定'
  return button
}

const app = document.getElementById('app')

app.appendChild(Button())
