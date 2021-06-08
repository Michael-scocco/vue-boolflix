// var messaggio = 'hello';
// console.log(messaggio);
/*
Milestone 1:
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 
Titolo
Titolo Originale
Lingua
Voto
*/

// "https://api.themoviedb.org/3/movie/550?api_key=8f58a1f8f7e267aeaf6ae8744c0f20d4&query=ritorno+al+futuro"

const app = new Vue({
    el: '#app',
    data:{
        apiUrl: "https://api.themoviedb.org/3/search/movie",
        api_key: "8f58a1f8f7e267aeaf6ae8744c0f20d4",
        query:"",
        listaFilm:[],
        trovaFilm:'',
    },

    methods:{
        cercaFilm: function(){
            let singoloFilm = this.trovaFilm.toLowerCase();
            this.films.forEach(film => {
                let singoloNome = film.original_title.toLowerCase();
                if (singoloNome.includes(singoloFilm)) {
                    film.video = true;
                }else{
                    film.video = false;
                }
            });
        }
    },

    mounted(){
           const interaApi = `${this.apiUrl}?api_key=${this.api_key}&query=${this.query}`;
           console.log(interaApi);

           axios
           .get(this.apiUrl)
           .then(risp => {
                console.log(risp.data.results);
                this.listaFilm = risp.data.results;
                console.log(this.listaFilm);
            })
            // axios
            // .get(apiUrl, {
            //     params:{
            //         api_key:'8f58a1f8f7e267aeaf6ae8744c0f20d4',
            //         query: '',
            //         language : 'it-IT',
            //     },
            // })
         
            // .catch(e => {
            //     console.error(e);
    
            // })
        
    },
})


{/* <input v-model="query" v-on:keyup.enter="getSearch()" placeholder="Inserisci un titolo"> */}