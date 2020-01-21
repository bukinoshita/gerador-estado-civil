import { geradorEstadoCivil } from '../source'
import { ESTADO_CIVIL } from '../source/types/estado-civil.enum'

test('random estado civil', () => {
  const random = geradorEstadoCivil

  let current: ESTADO_CIVIL
  let previous: ESTADO_CIVIL | undefined
  let i = 100

  while (i--) {
    current = random()
    expect(current).not.toBe(previous)
    previous = current
  }
})
