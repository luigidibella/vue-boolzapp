import { contacts } from './contacts.js'

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      counter: 0
      
    }
  },

  methods: {
    
  },

  computed: {

  },

  mounted() {
    console.log();
  },
}).mount('#app')