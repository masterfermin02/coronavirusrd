import { greaterThanTo } from "../tools/comparision";
import {useWith, filterWith, getWith} from "../tools/functional";

export const within0Cases = useWith(greaterThanTo(0), getWith('total_cases'))
export const filterPositiveCase = filterWith(within0Cases)
