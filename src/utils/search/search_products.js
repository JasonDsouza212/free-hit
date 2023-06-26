import fuzzySearch from './fuzzy_search'

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export default function searchProducts(products, searchTerm) {
  const filteredProducts = products
    .filter((product) => {
      if (!searchTerm) return true
      const regex = new RegExp(escapeRegExp(searchTerm.trim()), 'gi')
      var found =
        product.productName.match(regex) ||
        product.description.match(regex) ||
        product.category.match(regex)
      if (found) return found
      if (!found) found = found || fuzzySearch(searchTerm, product.productName)
      return found
    })
    .sort((a, b) => {
      const nameA = a.productName.toUpperCase()
      const nameB = b.productName.toUpperCase()
      return nameA < nameB ? -1 : 1
    })
  return filteredProducts
}
