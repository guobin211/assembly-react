let jack = { name: 'jack', age: 22, city: 'USA' }

class Component {
  constructor(data) {
    this.$data = createObserver(data, this.render)
    this.render(this.$data)
  }

  render(data) {
    console.log('render: ', data)
  }
}

function createObserver(obj, fn) {
  return new Proxy(obj, {
    get(target, p, receiver) {
      return target.p
    },
    set(target, p, value, receiver) {
      target.p = value
      console.log('set');
      fn(receiver)
    },
  })
}

function proxySet(obj, prop, value, component) {
    obj[prop] = value;
    component.$data[prop] = value
}

const div = new Component(jack)

proxySet(jack, 'age', 33, div)
