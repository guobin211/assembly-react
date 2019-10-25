export class NativeButton extends HTMLElement {
  state: any
  parent: HTMLElement
  element: HTMLElement
  props: NativeButtonProps

  constructor(props: NativeButtonProps) {
    super()
    this.props = props
    this.parent = props.parent
    this.state = {
      text: props.text
    }
    this.element = document.createElement('button')
    this.element.setAttribute('type', props.type)
    this.element.addEventListener('click', props.onClcik.bind(this), false)
    this.render()
  }

  render(): void {
    this.parent.appendChild(this.element)
  }

  destory() {
    this.element.removeEventListener('click', this.props.onClcik)
  }
}

export interface NativeButtonProps {
  parent: HTMLElement
  text: string
  type: 'button' | 'submit' | 'reset'
  onClcik: ($event: any) => void
}
