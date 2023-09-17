let redirecionar = "http://localhost:3000/logado";

let client_id = "c3d8138bf17f42ff98b1acedab790802";
let client_secret = "e536212b3c194076848ede08b8c03d5e"

const autorizacao = "https://accounts.spotify.com/authorize";

const token = "https://api.spotify.com/token"
const artistas = "https://api.spotify.com/v1/me/top/artists?offset=0&limit=10&time_range=short_term"
const faixas = "https://api.spotify.com/v1/me/top/tracks?offset=0&limit=10&time_range=short_term"

function autorizar(){
    let url = autorizacao;
    url += "?client_id=" +  client_id;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURI(redirecionar);
    url += "&show_dialogue=true";
    url += "&scope=user-read-private user-read-email user-read-playback-state user-top-read";
    window.location.href = url;
}