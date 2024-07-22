import test from 'ava'

import { sum, subtraction } from '../index.js'

test('sum from native', (t) => {
  t.is(sum(1, 2), 3)
})


test('subtraction from native', (t) => {
  t.is(subtraction(5, 2), 3)
})