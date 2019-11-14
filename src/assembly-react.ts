/* AssemblyReact */
import { NativeButton } from './components/NativeButton'

export class AssemblyReact {
  root: HTMLElement
  children: HTMLElement
  constructor(id: string) {
    const el = document.getElementById(id)
    if (el) {
      this.root = el
    } else {
      throw new Error(`document.getElementById(${id}) is null`)
    }
    this.children = new NativeButton({
      onClcik: function(ev: any) {
        console.log(ev)
      },
      parent: this.root,
      text: '确认',
      type: 'button'
    })
    this.render()
  }

  render(): void {
    this.root.appendChild(this.children)
  }
}
