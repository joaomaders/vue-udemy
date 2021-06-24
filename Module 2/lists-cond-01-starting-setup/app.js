const app = Vue.createApp({
  data() {
    return { 
      enteredGoal: '',
      goalToDelete: '',
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
    deleteGoal() {
      this.goals.pop(this.goalToDelete);
    }
  }
});

app.mount('#user-goals');
