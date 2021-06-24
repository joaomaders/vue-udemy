const app = Vue.createApp({
  data() {
    return { 
      enteredGoal: '',
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      if(this.enteredGoal !== '') {
        this.goals.push(this.enteredGoal);
        this.enteredGoal = '';
      } else {
        alert("Empty imput");
      }
    },
    deleteGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
