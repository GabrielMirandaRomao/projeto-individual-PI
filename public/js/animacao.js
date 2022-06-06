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

function teste() {
  alert("teste");
}

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
  <h4> Você vai gostar de ouvir esse album </h4><br />
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
  <h4> Você vai gostar de ouvir esse album </h4><br />
  <img class="img_album" src="${segunda_fase[random_number]}" alt="">
  <a href=${links_segunda_fase[random_number]}>
        <img class="img_link" src="./assets/imgs/icon/loader.gif" alt="">
    </a> `;
}

function mostrar_ambas() {
  var random_number = Math.floor(Math.random() * 2);
 
  var duas_fases = [
    "assets/imgs/albums/the_beatles_1962_1966.jpg",
    "assets/imgs/albums/the_beatles_1967_1970.jpg",
  ];

  var links = [
      "https://open.spotify.com/album/6126O4XLYAfzU3961ziahP",
      "https://open.spotify.com/album/1cTeNkeINtXiaMLlashAKs"
  ]

  document.getElementById("div_albums").innerHTML = "";

  for (var contador = 0; contador < 26; contador++) {
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
  }
  //   document.getElementById("output_albums").style.display = 'flex';
  document.getElementById("output_albums").innerHTML = `
  <h4> Você vai gostar de ouvir esse album </h4><br />
    <img class="img_album" src="${duas_fases[random_number]}" alt="">
    <a href=${links[random_number]}>
        <img class="img_link" src="./assets/imgs/icon/loader.gif" alt="">
    </a>  

`;
}