import assert = require('assert')
import { Result, IResult } from '../src'


suite('index', () => {})


test('index', () => {
  const a = Result.OK('hello')
  assert.equal(true, a.ok)

  const b = Result.Error('my error')
  assert.equal(false, b.ok)

  function testFunction(r: IResult<string>) {
    if (r.ok) {
      assert.equal('hello', r.data)
    } else {
      assert(false)
    }
  }

  testFunction(a)
})