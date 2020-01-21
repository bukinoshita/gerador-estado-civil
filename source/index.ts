import uniqueRandomArray from 'unique-random-array'

import { ESTADO_CIVIL_LISTA } from './utils/constants'
import { ESTADO_CIVIL } from './types/estado-civil.enum'

export const geradorEstadoCivil: () => ESTADO_CIVIL = uniqueRandomArray(ESTADO_CIVIL_LISTA)
