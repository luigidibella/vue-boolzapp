import { contacts } from './contacts.js'

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      
    }
  },

  methods: {
    
  },

  computed: {

  },

  mounted() {
    console.log(contacts);
  },
}).mount('#app')