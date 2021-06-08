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

const app = new Vue({
    el: '#app',
    data:{
        listaFilm:[],
    },
    methods:{

    },
    mounted(){
       
            axios
            .get("https://api.themoviedb.org/3/movie/550?api_key=8f58a1f8f7e267aeaf6ae8744c0f20d4&query=harry+potter")
            .then(resp => {
                console.log(resp.data);
                this.listaFilm = resp.data;
                console.log(this.listaFilm);
            })
            .catch(e => {
                console.error(e);
    
            })
        
    },
})