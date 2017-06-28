import assert = require('assert')
import { Result, IResult } from '../src'



function testFunction(r: IResult<string>) {
  if (r.ok) {
    assert.equal('hello', r.data)
  } else {
    assert(false)
  }
}





suite('index', () => {})

test('index', () => {
  const a = Result.OK('hello')
  assert.equal(true, a.ok)

  const b = Result.Error('my error')
  assert.equal(false, b.ok)


  testFunction(a)


  const c = Result.of(() => {
    return 5
  })
  assert.equal(true, c.ok)
  if (c.ok) {
    assert.equal(5, c.data)
  }

  const d = Result.of(() => {
    throw new Error('oops')
  })

  assert.equal(false, d.ok)

  if (d.ok != true) {
    assert.equal('oops', d.error)
  }

})