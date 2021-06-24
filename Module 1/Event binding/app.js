const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '', 
      lastName: '',
      // fullName: ''
    };
  },
  watch: {
    counter (newValue) {
      if (newValue > 50) {
        this.counter = 0;
      }
    }
    // name(newValue) {
    //   if (newValue === '') {
    //     this.fullName = '' + ' ' + this.lastName;
    //   } else {
    //     this.fullName = newValue + ' ' + this.lastName;
    //   }
    // },
    // lastName(newValue) {
    //   if (newValue === '') {
    //     this.fullName = this.name + ' ' + '';
    //   } else {
    //     this.fullName = this.name + ' ' + newValue;
    //   }
    // }
  },
  computed: {
    fullName () {
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    increment (value) {
      this.counter = this.counter + value;
    },
    reduce (value) {
      this.counter = this.counter - value;
    },
    resetInput (e) {
      this.name = '';
      this.lastName = '';
    }
  }  
});

app.mount('#events');