import { contacts } from './contacts.js'

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      counter: 0,
      newText: '',
      
    }
  },

  methods: {
    addText(index){
      this.contacts[index].messages.push({
      date: '10/01/2020 15:50:00',
      message: this.newText,
      status: 'sent',
      });
      this.newText = '';
      setTimeout(() => {
        this.contacts[index].messages.push({
          date: '10/01/2020 16:15:22',
          message: 'Ok!',
          status: 'received'
        });
      }, 1000);
  },
    
  },

  computed: {

  },

  mounted() {
    console.log();
  },
}).mount('#app')