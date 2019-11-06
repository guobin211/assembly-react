import { AssemblyReact } from '../src/assembly-react'

/**
 * AssemblyReact test
 */
describe('AssemblyReact test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new AssemblyReact('app')).toBeInstanceOf(AssemblyReact)
  })
})
