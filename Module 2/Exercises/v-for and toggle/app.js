const app = Vue.createApp({
   data() {
      return {
         showing: false,
         tasks: [],
         newTask: ''
      };
   },
   computed: {
      buttonCaption () {
         return this.showing ? 'Hide' : 'Show';
      }
   },
   methods: {
      addTask () {
         this.tasks.push(this.newTask);
      },
      changeListState () {
         this.showing = !this.showing;
      }
   }
}).mount("#assignment");