import productService from './service/product.service'

async function main() {
  await productService.findByCategory(2)
}

main()
