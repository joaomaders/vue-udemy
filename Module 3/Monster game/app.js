const app = Vue.createApp({
   data() {
      return {
         monsterHealth: 100,
         playerHealth: 100,
         currentRound: 0,
         winner: null,
         logMessages: []
      };
   },
   computed: {
      monsterBarStyle() {
         if (this.monsterHealth < 0) {
            return {width: '0%'}
         }
         return {width: this.monsterHealth + '%'};
      },
      playerBarStyle() {
         if (this.playerHealth < 0) {
            return {width: '0%'};
         } 
         return {width: this.playerHealth + '%'};
      },
      mayUseSpecialAttack() {
         return this.currentRound % 3 !== 0;
      }
   },
   watch: {
      playerHealth(newValue) {
         if (newValue <= 0 && this.monsterHealth <= 0) {
            this.winner = 'draw';
         } else if (newValue <= 0) {
            this.winner = 'monster';
         }
      },
      monsterHealth(newValue) {
         if (newValue <= 0 && this.playerHealth <= 0) {
            this.winner = 'draw';
         } else if (newValue <= 0) {
            this.winner = 'player';
         }
      }
   },
   methods: {
      startGame() {
         this.playerHealth = 100;
         this.monsterHealth = 100;
         this.winner = null;
         this.currentRound = 0;
         this.logMessages = [];
      },
      healPlayer() {
         this.currentRound++;
         let healPower = this.getRandomValue(8, 20);
         if (this.playerHealth + healPower > 100) {
            this.playerHealth = 100;
         } else {
            this.playerHealth += healPower;
         }
         this.addLogMessage('player', 'heal', healPower);
         this.attackPlayer();
      },
      attackMonster() {
         this.currentRound++;
         let attackPower = this.getRandomValue(5, 12)
         this.monsterHealth -= attackPower;
         this.addLogMessage('player', 'attack', attackPower);
         this.attackPlayer();
      },
      attackPlayer() {
         let attackPower = this.getRandomValue(8, 15)
         this.playerHealth -= attackPower;
         this.addLogMessage('monster', 'attack', attackPower);
      },
      specialAttackMonster() {
         this.currentRound++;
         let attackPower = this.getRandomValue(10, 25);
         this.monsterHealth -= attackPower;
         this.addLogMessage('player', 'attack', attackPower);
         this.attackPlayer();
      },
      getRandomValue(min, max) {
         return Math.floor(Math.random() * (max - min)) + min;
      },
      playerSurrender() {
         this.winner = 'monster';
      },
      addLogMessage (who, what, value) {
         this.logMessages.unshift({
            actionBy: who,
            actionType: what,
            actionValue: value
         });
      }
   }
});

app.mount("#game");