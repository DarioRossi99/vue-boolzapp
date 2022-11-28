import utentiInportati from './utenti.js';

const {createApp} = Vue;

const app = createApp({
    data () {
        return{
            listaUtenti: utentiInportati,
            utenteSelezionato: 0,
            newText: "",
            cercaChat: "",
        }
    },
    methods:{

        risposta(){
            this.utenteSelezionato.messages.push({
                date: '10/01/2020 15:50:00',
                message: 'ok',
                status: 'received'
            })
        },

        getFilteredListaUtenti(){
            return this.listaUtenti.filter(utenteSelezionato =>{
                return utenteSelezionato.name.toLowerCase().includes(this.cercaChat.toLowerCase())
            })
        },
    
        
        invioMessaggio () {
        
            this.utenteSelezionato.messages.push({
                date: '10/01/2020 15:50:00',
                message: this.newText,
                status: 'sent'
            })

            setTimeout(this.risposta, 2000);

            this.newText = "";
        }
    },
    beforeMount () {
        this.utenteSelezionato = this.listaUtenti[0]
    },
}).mount("#app")