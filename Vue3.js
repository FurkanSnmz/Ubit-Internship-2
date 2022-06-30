const app = Vue.createApp({ 
    data() {
     return {
     url:'http://www.ubit.com.tr',
     showBooks : true ,  
     books :[
       {title:'22/11/63' ,author:'Stephen King', img:'11:22:63.jpeg', isFav: true },
       {title:'IT' , author:'Stephen King', img:'IT.jpeg', isFav: false },
       {title:'Pet Sematary' , author:'Stephen King', img:'PetSematary.jpeg', isFav: true }, 
     ]
    }
   },
   methods: {
     toogleshowbooks() {
   
       this.showBooks = !this.showBooks
     },
      toogleFav(book){
     book.isFav = !book.isFav
      }
   },
   computed: {
     filteredBooks(){
       return this.books.filter((book) => book.isFav)
     }
   }
 })
 app.mount('#App')