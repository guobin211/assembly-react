export function Observer() {
  return function(target: any) {
    console.log(target)
    if (target.state) {
      Object.freeze(target.state)
    }
  }
}
