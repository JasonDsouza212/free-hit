import { allFilters } from './data/filters'
export default function checkFilter(filters) {
  for (let i = 0; i < filters.length; i++) {
    if (!allFilters.includes(filters[i].toLowerCase())) {
      return true
    }
  }
  return false
}
