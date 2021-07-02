<template>
   <li>
      <h2> {{ name }} </h2>
      <button @click="toggleDetails()"> {{ detailsVisible ? 'Hide' : 'Show' }} details </button>

      <ul v-if="detailsVisible">
         <li><strong>Phone: </strong> {{ phoneNumber }}</li>
         <li><strong>E-mail: </strong> {{ email }}</li>
      </ul>
   </li>
</template>

<script>
   export default {
      // props: ['name', 'phoneNumber', 'email'],
      props: {
         name: {
            type: String,
            required: true
         },
         phoneNumber: {
            type: String,
            required: true
         },
         email: {
            type: String,
            required: true,
            default: 'No e-mail provided.',
            validator: function(value) {
               return value ==='1' || value ==='0';
            }
         }
      },
      data() {
         return {
            detailsVisible: false,
         }
      },
      methods: {
         toggleDetails () {
            this.detailsVisible = !this.detailsVisible;
         }
      }
   };
</script>