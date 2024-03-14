import { contacts } from './contacts.js'

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      counter: 0,
      newText: '',
      searchUser: '',
      
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
    myFilter(){
      this.contacts.forEach(contact => {
        if(contact.name.toLowerCase().includes(this.searchUser.toLowerCase())){
          contact.visible = true;
        }else{
          contact.visible = false;
        }
      });
      return this.contacts;
    }

  },

  mounted() {
    console.log();
  },
}).mount('#app')