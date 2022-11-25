import utenti from `./utenti`

const {createApp} = Veu;

const app = createApp({
    data () {
        return{
            utenti
        }
    },
    methods:{},
    mouted () {

    }
}).mount("#app")