import { contacts } from './contacts.js'

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      counter: 0,
      newText: '',
      searchUser: '',
      formattedDateTime: '',
      
    }
  },

  methods: {
    addText(index){
      this.contacts[index].messages.push({
      date: this.formattedDateTime,
      message: this.newText,
      status: 'sent',
      });
      this.newText = '';
      setTimeout(() => {
        this.contacts[index].messages.push({
          date: this.formattedDateTime,
          message: 'Ok!',
          status: 'received'
        });
      }, 1000);
    },

    updateFormattedDateTime() {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');

      this.formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    },

    onlyTime(date) {
      return date.split(" ")[1].slice(0, 5);
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
    this.updateFormattedDateTime();

    setInterval(() => {
      this.updateFormattedDateTime();
    }, 1000);

    console.log();
  },
}).mount('#app')