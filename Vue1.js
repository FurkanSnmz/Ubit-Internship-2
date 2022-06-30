const app = Vue.createApp({
    data() {
     return {
     showBooks : true ,  
     title:'The Final Empire',
     author:'Sir Alex Ferguson',
     age: 80
    }
   },
   methods: {
     toogleshowbooks() {
   
       this.showBooks = !this.showBooks
     }
   }
 })
 app.mount('#App')