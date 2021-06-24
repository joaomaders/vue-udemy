const app = Vue.createApp({
   data () {
      return {
         input1: '',
         input2: ''
      };
   },
   methods: {
      showAlert(msg) {
         alert(msg);
      },
      updateInput1 (event) {
         this.input1 = event.target.value;
      },
      updateInput2 (event) {
         this.input2 = event.target.value;
      }
   }
});

app.mount('#assignment');