import {getWith, useWith, sortBy} from "./functional";

const functional = require('./functional')

const greaterThanOrEqual = (a, b) => a >= b
const greaterThan = (a, b) => a > b
const lessThan = (a, b) => a < b

// Right curried so we can create useful unary predicates
export const greaterThanOrEqualTo = functional.rightCurry(greaterThanOrEqual);
export const greaterThanTo = functional.rightCurry(greaterThan);
export const descending = functional.comparator(greaterThan)
export const asscending = functional.comparator(lessThan)
export const sortByColumn = (column, direction) => sortBy(useWith(direction, getWith(column), getWith(column)))
