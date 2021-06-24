const app = Vue.createApp({
   data() {
      return {
         input1: '',
         p: false
      };
   },
   methods: {
      toggle() {
         this.p = !this.p;
      }
   }
}).mount("#assignment");