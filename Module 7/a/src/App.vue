<template>
   <section>
      <h2> My friends: </h2>
      <ul v-for="friend in friends" :key="friend.id">
         <friend-contact
            :name="friend.name"
            :phone-number="friend.phone"
            :email="friend.email"
         >
         </friend-contact>
      </ul>
   </section>
</template>

<script>
export default {
   data () {
      return {
         friends: [
            {
               id: 'Manuel',
               name: 'Manuel Martinez',
               phone: '(51) 9 9548-9285',
               email: 'teste@teste.com'
            },
            {
               id: 'Julie',
               name: 'Julie Jones',
               phone: '(51) 9 9548-9285',
               email: 'teste@teste.com'
            }
         ]
      }
   }
};
</script>