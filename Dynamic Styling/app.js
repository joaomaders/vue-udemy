const app = Vue.createApp({
   data() {
      return {
         selectedA: false,
         selectedB: false,
         selectedC: false,
      }
   },
   methods: {
      boxSelected(box) {
         if (box === 'A') {
            this.selectedA = !this.selectedA;
         }
         if (box === 'B') {   
            this.selectedB = !this.selectedB;
         }
         if (box === 'C') {
            this.selectedC = !this.selectedC;
         }
      }
   }
}).mount('#styling');