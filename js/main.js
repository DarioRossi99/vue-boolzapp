import utentiInportati from './utenti.js';

const {createApp} = Vue;

const app = createApp({
    data () {
        return{
            listaUtenti: utentiInportati,
            selezionaUtenti: null,
        }
    },
    methods:{},
    beforeMount () {
        this.selezionaUtenti = this.listaUtenti[0]
    }
}).mount("#app")