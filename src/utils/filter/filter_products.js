export default function filterProducts(products, filters) {
  return products.filter((product) =>
    filters
      .map((filter) => filter.toLowerCase())
      .some((f) => f == product.category.toLowerCase() || f == 'all')
  )
}
