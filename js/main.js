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
        apiUrl:"https://api.themoviedb.org/3/movie",
        parametri:{
            apiCodice:'8f58a1f8f7e267aeaf6ae8744c0f20d4',
            linguaggio : 'it-IT',
        },
        domanda: '',
        listaFilm:[],
        trovaFilm:'',
    },

    methods:{
        cercaFilm: function(){
            let singoloFilm = this.trovaFilm.toLowerCase();
            this.films.forEach(film => {
                let singoloNome = film.name.toLowerCase();
                if (singoloNome.includes(singoloFilm)) {
                    film.adult = true;
                }else{
                    film.adult = false;
                }
            });
        }
    },

    mounted(){

            axios
            .get(this.apiUrl)
            .then(risp => {
                console.log(risp.data.production_companies);
                this.listaFilm = risp.data.production_companies;
                console.log(this.listaFilm);
            })
            .catch(e => {
                console.error(e);
    
            })
        
    },
})


