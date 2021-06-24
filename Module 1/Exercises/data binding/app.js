const app = Vue.createApp({
   data () {
      return {
         name: 'João Mathias Maders',
         age: 21,
         imageUrl: './home-bg-img.svg'
      };
   },
   methods: {
      ageInFive () {
         return this.age + 5;
      },
      randomNumber () {
         return Math.random();
      }
   }
});

app.mount('#assignment');