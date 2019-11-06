function Observer() {
  return function(target: any) {
    console.log('observer')
    console.log(target)
    if (target.state) {
      Object.freeze(target.state)
    }
  }
}

@Observer()
class Component {
  state: any

  constructor(state: any) {
    this.setState(state)
    let i = 10
    setInterval(() => {
      this.setState({
        name: 'jack',
        age: i++
      })
    }, 1000)
  }

  setState(data: any) {
    this.state = data
    this.render()
  }

  render() {
    console.log(this.state)
  }
}

const div: Component = new Component({ name: 'jack', age: 22 })
