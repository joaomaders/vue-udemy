const app = Vue.createApp({
   data() {
      return {
         monsterHealth: 100,
         playerHealth: 100,
         currentRound: 0,
         winner: null
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
      },
      playerSurrender() {
         this.winner = 'monster';
      },
      healPlayer() {
         this.currentRound++;
         let healPower = this.getRandomValue(8, 20);
         if (this.playerHealth + healPower > 100) {
            this.playerHealth = 100;
         } else {
            this.playerHealth += healPower;
         }
         this.attackPlayer();
      },
      attackMonster() {
         this.currentRound++;
         this.monsterHealth -= this.getRandomValue(5, 12);
         this.attackPlayer();
      },
      attackPlayer() {
         this.playerHealth -= this.getRandomValue(8, 15);
      },
      specialAttackMonster() {
         this.currentRound++;
         this.monsterHealth -= this.getRandomValue(10, 25);
         this.attackPlayer();
      },
      getRandomValue(min, max) {
         return Math.floor(Math.random() * (max - min)) + min;
      }
   }
});

app.mount("#game");