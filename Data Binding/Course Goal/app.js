const app = Vue.createApp({
   data() {
      return {
         courseGoal: 'Finish the course and learn Vue!',
         myGoal: 'Master Vue and build amazing SPA!',
         vueLink: 'https://vuejs.org/'
      };
   },
   methods: {
      outputGoal() {
         const ramdomNumber = Math.random();
         return ramdomNumber < 0.5 ? this.courseGoal : this.myGoal;
      }
   }
});

app.mount('#user-goal');