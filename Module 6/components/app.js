const app = Vue.createApp({
   data() {
      return {
         friends: [
            {
               id: 'manuel',
               name: 'Manuel Lorenz',
               phone: '51 9 9548-9285',
               email: 'emanuel@gmail.com  '
            },
            {
               id: 'julie',
               name: 'Julie Jones',
               phone: '51 9 9548-9285',
               email: 'julie@gmail.com  '
            }
         ],
      }
   }
});

app.component('friend-contact', {
   template: `
   <li>
      <h2> {{ friend.name }}</h2>
      <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : "Show" }} Details</button>
      <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
   </li>
   `
   ,
   data() {
      return {
         detailsVisible: false,
         friend: {
            id: 'manuel',
            name: 'Manuel Lorenz',
            phone: '51 9 9548-9285',
            email: 'emanuel@gmail.com  '
         }
      }
   },
   methods: {
      toggleDetails () {
         this.detailsVisible = !this.detailsVisible;
      }
   }
});


app.mount('#app');