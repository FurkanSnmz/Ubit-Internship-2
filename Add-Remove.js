const app = Vue.createApp({
    data() {
        return {
            showBooks : true,
            products: [
                {
                    title : 'Computer',
                    number : 6,
                },
                {
                    title : 'Tablet',
                    number : 8,
                },
                {
                    title : 'Phone',
                    number : 5,
                },
                {
                    title : 'Mouse',
                    number : 9,
                },
                {
                    title : 'Monitor',
                    number : 0,
                }
            ],
            basket: []
        }
    },  
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        addToBasket(product) {
            console.log("product", product)
            this.products.find(p => p.title == product.title).number--
            
            var basket = this.basket.find(b => b.title == product.title)
            if(basket){
                basket.number++
            }
            else{
                var newProduct = {
                    title: product.title,
                    number: 1
                }
    
                this.basket.push(newProduct)
            }
        },
        removeFromBasket(product, index) {
            console.log("product", product)
            var removedProduct = this.basket.find(b => b.title == product.title)
            removedProduct.number--

            if(removedProduct.number <= 0) {
                this.basket.splice(index, 1)
            }

            var product = this.products.find(p => p.title == product.title)

            if(product){
                product.number++
            }
            else{
                var newProduct = {
                    number:1
                }
                this.product.push(newProduct)
            }
            }
        }
    })
     
app.mount('#App') 