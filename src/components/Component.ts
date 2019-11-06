abstract class VComponent<T> {
  abstract state: T
}

export class Component extends VComponent<any> {
  state: any

  constructor(state: any) {
    super()
    this.setState(state)
  }

  setState(data: any) {
    this.state = data
    this.render()
  }

  render() {
    console.log(this.state)
  }
}
