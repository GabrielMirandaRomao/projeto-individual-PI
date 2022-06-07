window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 8000);

// ------------------------
function mostrar_musica(musicas_albums) {
  document.getElementById("modal").style.display = "flex";
  console.log(musicas_albums);
  document.getElementById("modal").innerHTML = ` 
  <div class="div_modal_btn">
    <button class="btn_fechar_modal" onclick="fechar_modal()">
      <img class="img_fechar_modal" src="./assets/imgs/icon/close.png" alt=""> 
    </button>
  </div>
  <h3> Minhas músicas favoritas desse album!</h3>
  <ul>
    <li><h3>${musicas_albums[0]}<h3/></li>
    <li><h3>${musicas_albums[1]}<h3/></li>
    <li><h3>${musicas_albums[2]}<h3/></li>
    <li><h3>${musicas_albums[3]}<h3/></li>
  </ul>
`;
}

function fechar_modal() {
  document.getElementById("modal").style.display = "none";
}

// musicas_albums.please_please_me[0]

var musicas_albums = {
  please_please_me: [
    "Please please me",
    "Twist and shout",
    "Love me do",
    "I saw her standing there",
  ],
  with_the_beatles: [
    "All my loving",
    "It won't be long",
    "Don t bother me",
    "Please mister postman",
  ],
  a_hard_days_night: [
    "A hard days night",
    "Can't buy me love",
    "If I fell",
    "Any time at all",
  ],
  beatles_for_sale: [
    "No reply",
    "Eight days a week",
    "I'm a loser",
    "rock and roll music",
  ],
  help: [
    "Help!", 
    "Ticket to ride", 
    "Yesterday", 
    "Dizzy miss lizzy"
  ],
  rubber_soul: [
    "Drive my car",
    "I'm looking through you",
    "In my life",
    "If I need someone",
  ],
  revolver: [
    "Eleanor Rigby",
    "Taxman", 
    "Here, there and everywhere", 
    "Got to get you into my life"],
  sgt_peppers: [
    "Sgt. pepper's lonely hearts club band",
    "With a little help from my friends",
    "Lucy in the sky with diamonds",
    "Getting better",
  ],
  yellow_submarine: [
    "All you need is love", 
    "Yellow submarine", 
    "Hey bulldog", 
    "All together"
  ],
  magical_mystery_tour: [
    "Hello, Goodbye",
    "Penny lane",
    "I am the walrus",
    "All you need is love",
  ],
  white_album: [
    "Black bird",
    "Ob-la-di, ob-la-da",
    "While my guitar gently weeps",
    "Helter skelter",
  ],
  abbey_road: [
    "Here comer the sun",
    "Come together",
    "Something",
    "Oh! Darling",
  ],
  let_it_be: [
    "Two of us", 
    "Let it be", 
    "I've got a feeling", 
    "Get back"
  ],
  the_beatles_1962_1966: ["Todas", "pois", "só tem", "as melhores!"],
  the_beatles_1967_1970: ["Todas", "pois", "só tem", "as melhores!"],
};

// -------------------------

function mostrar_fase_um() {
  var random_number = Math.floor(Math.random() * 6);

  var primeira_fase = [
    "assets/imgs/albums/please_please_me.jpg",
    "assets/imgs/albums/with_the_beatles.jpg",
    "assets/imgs/albums/a_hard_days_night.jpg",
    "assets/imgs/albums/beatles_for_sale.jpg",
    "assets/imgs/albums/help.jpg",
    "assets/imgs/albums/rubber_soul.jpg",
  ];

  var links_primeira_fase = [
    "https://open.spotify.com/album/3KzAvEXcqJKBF97HrXwlgf",
    "https://open.spotify.com/album/1aYdiJk6XKeHWGO3FzHHTr",
    "https://open.spotify.com/album/6wCttLq0ADzkPgtRnUihLV",
    "https://open.spotify.com/album/1vANZV20H5B4Fk6yf7Ot9a",
    "https://open.spotify.com/album/0PT5m6hwPRrpBwIHVnvbFX",
    "https://open.spotify.com/album/50o7kf2wLwVmOTVYJOTplm",
  ];

  document.getElementById("div_albums").innerHTML = "";

  for (var contador = 0; contador < 26; contador++) {
    if (contador % 2) {
      document.getElementById("div_albums").innerHTML += `
            <h4 style="color:#919191fa;">
            She loves you, yeah, yeah, yeah
            She loves you, yeah, yeah, yeah
            She loves you, yeah, yeah, yeah
            </h4>
        `;
    } else {
      document.getElementById("div_albums").innerHTML += `
      <div class="img_album" id="output_albums">
      </div> <br />`;
    }
  }

  document.getElementById("output_albums").innerHTML = `
  <h4> Você vai gostar de ouvir esse album! </h4><br />
    <img class="img_album" src="${primeira_fase[random_number]}" alt="">
    <a href=${links_primeira_fase[random_number]}>
        <img class="img_link" src="./assets/imgs/icon/loader.gif" alt="">
    </a> `;
}

function mostrar_fase_dois() {
  var random_number = Math.floor(Math.random() * 7);

  var segunda_fase = [
    "assets/imgs/albums/revolver.jpg",
    "assets/imgs/albums/sgt_peppers.jpg",
    "assets/imgs/albums/magical_mystery_tour.jpg",
    "assets/imgs/albums/white_album.jpg",
    "assets/imgs/albums/yellow_submarine.jpg",
    "assets/imgs/albums/abbey_road.jpg",
    "assets/imgs/albums/let_it_be.jpg",
  ];

  var links_segunda_fase = [
    "https://open.spotify.com/album/3PRoXYsngSwjEQWR5PsHWR",
    "https://open.spotify.com/album/1ntNLgaYCFCkeW4flGYlY2",
    "https://open.spotify.com/album/2BtE7qm1qzM80p9vLSiXkj",
    "https://open.spotify.com/album/1klALx0u4AavZNEvC4LrTL",
    "https://open.spotify.com/album/1gKZ5A1ndFqbcrWtW85cCy",
    "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN",
    "https://open.spotify.com/album/0jTGHV5xqHPvEcwL8f6YU5",
  ];

  document.getElementById("div_albums").innerHTML = "";

  for (var contador = 0; contador < 26; contador++) {
    if (contador % 2) {
      document.getElementById("div_albums").innerHTML += `
            <h4 style="color:#919191fa;">
            hey Jude
            Jude, Jude, Judy, Judy, Judy, Judy
            Na, na, na, na-na-na, na
            Na-na-na, na, hey Jude!
            </h4>
            <div class="img_album" id="output_albums">
            
            </div>
        `;
    } else {
      document.getElementById("div_albums").innerHTML += ` <br />`;
    }
  }

  document.getElementById("output_albums").innerHTML = `
  <h4> Você vai gostar de ouvir esse album! </h4><br />
  <img class="img_album" src="${segunda_fase[random_number]}" alt="">
  <a href=${links_segunda_fase[random_number]}>
        <img class="img_link" src="./assets/imgs/icon/loader.gif" alt="">
    </a> `;
}

function mostrar_ambas() {
  var random_number = Math.floor(Math.random() * 4);

  var duas_fases = [
    "assets/imgs/albums/the_beatles_1962_1966.jpg",
    "assets/imgs/albums/the_beatles_1967_1970.jpg",
    "assets/imgs/albums/past_masters_vol1.jpg",
    "assets/imgs/albums/past_masters_vol2.jpg",
  ];

  var links = [
    "https://open.spotify.com/album/6126O4XLYAfzU3961ziahP",
    "https://open.spotify.com/album/1cTeNkeINtXiaMLlashAKs",
    "https://open.spotify.com/album/3GmCXW10kLxmZrEY0JpRlw",
    "https://open.spotify.com/album/3GmCXW10kLxmZrEY0JpRlw",
  ];

  document.getElementById("div_albums").innerHTML = "";

  var contador = 0;

  while (contador < 26) {
    if (contador % 2) {
      document.getElementById("div_albums").innerHTML += `
      <h4 style="color:#919191;">
        Help!
        It's been a hard days night
        and I've been working like a dog
        for eight days a week
      </h4>
        <div class="img_album" id="output_albums">
            
        </div>
        `;
    } else {
      document.getElementById("div_albums").innerHTML += ` <br />`;
    }
    contador++;
  }

  document.getElementById("output_albums").innerHTML = `
  <h4> Você vai gostar de ouvir esse album! </h4><br />
    <img class="img_album" src="${duas_fases[random_number]}" alt="">
    <a href=${links[random_number]}>
        <img class="img_link" src="./assets/imgs/icon/loader.gif" alt="">
    </a>  

`;
}
