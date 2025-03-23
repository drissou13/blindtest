const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const submitBtn = document.getElementById('submit-btn');
const guessInput = document.getElementById('guess-input');
const resultDiv = document.getElementById('result');

// Liste des extraits musicaux
const songs = [
    { title: "Imagine", artist: "John Lennon", src: "https://www.cjoint.com/doc/22_12/LLDugLTLPHj_John-Lennon--Imagine-Instrumental.mp3" },
    { title: "Shape of You", artist: "Ed Sheeran", src: "https://www.cjoint.com/doc/24_11/NKebtiIpYSA_Ed-Sheeran---Shape-of-You-Official-Music-Video-.mp3" },
    { title: "Bohemian Rhapsody", artist: "Queen", src: "https://www.cjoint.com/doc/24_07/NGrgmna6cJD_Queen-%E2%80%93-Bohemian-Rhapsody-Official-Video-Remastered.mp3" },
     { title: "le bilan", artist: "neg marron", src: "https://www.cjoint.com/doc/21_09/KIChXxILZ6b_9convert.com---N%C3%A8g-Marrons-Le-bilan-Clip-officiel.mp3" },
  { title: "Angela", artist: "hatik", src: "https://www.cjoint.com/doc/20_06/JFmnfuSayF5_Hatik---Angela.mp3" },
  { title: "big-bisou", artist: "carlos", src: "https://www.cjoint.com/doc/21_05/KExqa5DYsvJ_carlos-big-bisous-clip-officiel.mp3" },
    { title: "Le-Coup-de-Soleil", artist: "richard cocciante", src: "https://www.cjoint.com/doc/22_07/LGyk7avrzB6_Richard-Cocciante-Le-Coup-de-Soleil.mp3" },
    { title: "barbie girl", artist: "aqua", src: "https://www.cjoint.com/doc/22_03/LCzgNdchv7f_aqua-barbie-girl-official-music-video.mp3" },
     { title: "Je-danse le mia", artist: "iam", src: "https://www.cjoint.com/doc/19_05/IEoooyWncjB_IAM---Je-danse-le-Mia.mp3" },
    { title: "I-Love-Rock-n-Roll", artist: "joan jett", src: "https://www.cjoint.com/doc/24_09/NIbmbSDlM0a_Joan-Jett---I-Love-Rock-n-Roll.mp3" },
   { title: "Free", artist: "stevie wonder", src: "https://www.cjoint.com/doc/16_05/FEqqUzeCfYy_Stevie-wonder-Free.mp3" },
   { title: "Tomber-La-Chemise", artist: "zebda", src: "https://www.cjoint.com/doc/18_03/HCox256mosb_Zebda---Tomber-La-Chemise.mp3" },
  { title: "Clandestino", artist: "manu chao", src: "https://www.cjoint.com/doc/19_01/IADtv53znTV_Manu-Chao---Clandestino.mp3" },
  { title: "The Message", artist: "grand master flash", src: "https://www.cjoint.com/doc/22_12/LLipMwpwH1V_Grandmaster-Flash-The-Furious-Five---The-Message.mp3" },
  { title: "Envole moi", artist: "jean jacques goldman", src: "https://www.cjoint.com/13ma/CCxmBYm2Zvx_goldman.mp3" },
{ title: "c'est écrit", artist: "Francis cabrel", src: "https://www.cjoint.com/doc/22_01/LAudN7sllX5_cabrel-1-.mp3" },
    { title: "pas le temps", artist: "faf larage ", src: "https://www.cjoint.com/doc/20_01/JAqi1CRmyRr_Faf-larage---Pas-le-temps.mp3" },
    { title: "mon bled", artist: "rohff ", src: "https://www.cjoint.com/doc/19_03/ICbxRKM2Kl8_rohff-mohamed-lamine-chebba-maria-mon-bled.mp3" }
    { "title": "bo le lavabo", "artist": "vincent lagaf ", src: "https://www.cjoint.com/doc/20_07/JGbsCgC1juV_Vincent-Lagaf---Bo-le-lavabo.mp3" }
    { "title" : "la zoubida", "artist":"vincent lagaf ", src: "https://www.cjoint.com/doc/20_04/JDwmtcxqEOh_la-zoubida-vincent-lagaf-1991.mp3" }

    
];

];

let currentSongIndex = null;

// Fonction pour jouer un extrait aléatoire
function playRandomSong() {
    currentSongIndex = Math.floor(Math.random() * songs.length);
    const song = songs[currentSongIndex];
    audioPlayer.src = song.src;
    audioPlayer.play();
    resultDiv.textContent = ""; // Réinitialiser le résultat
}

// Vérifier la réponse
function checkAnswer() {
    const guess = guessInput.value.toLowerCase();
    const currentSong = songs[currentSongIndex];

    if (guess.includes(currentSong.title.toLowerCase()) || guess.includes(currentSong.artist.toLowerCase())) {
        resultDiv.textContent = "✅ Correct !";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `❌ Faux ! C'était "${currentSong.title}" par ${currentSong.artist}.`;
        resultDiv.style.color = "red";
    }

    guessInput.value = ""; // Réinitialiser le champ de saisie
}

// Écouteurs d'événements
playBtn.addEventListener('click', playRandomSong);
submitBtn.addEventListener('click', checkAnswer);
