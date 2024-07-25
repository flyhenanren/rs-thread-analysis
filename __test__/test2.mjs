import test from 'ava'

import { sum } from '../index.js'

test('sum from tesss', (t) => {
  t.is(sum(1, 4), 5)
})