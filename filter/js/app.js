const buttons = document.querySelectorAll("button");

const parentElement = document.querySelector(".parent");

const info = [
  {
    moviePoster: "img/hereditaryPoster.jpeg",
    movieTitle: "Hereditary",
    genre: "horror",
    releaseDate: "2018",
  },

  {
    moviePoster: "img/midsommarPoster.jpeg",
    movieTitle: "Midsommar",
    genre: "horror",
    releaseDate: "2019",
  },

  {
    moviePoster: "img/getOutPoster.jpeg",
    movieTitle: "Get Out",
    genre: "horror",
    releaseDate: "2017",
  },

  {
    moviePoster: "img/sinisterPoster.jpeg",
    movieTitle: "Sinister",
    genre: "horror",
    releaseDate: "2012",
  },

  {
    moviePoster: "img/usPoster.jpeg",
    movieTitle: "Us",
    genre: "horror",
    releaseDate: "2019",
  },

  {
    moviePoster: "img/jennifersBodyPoster.jpeg",
    movieTitle: "Jennifer's Body",
    genre: ["horror", " comedy"],
    releaseDate: "2009",
  },

  {
    moviePoster: "img/theConjuringPoster.jpeg",
    movieTitle: "The Conjuring",
    genre: "horror",
    releaseDate: "2013",
  },

  {
    moviePoster: "img/readyOrNotPoster.jpeg",
    movieTitle: "Ready or Not",
    genre: ["comedy", " horror"],
    releaseDate: "2019",
  },

  {
    moviePoster: "img/birdBoxPoster.jpeg",
    movieTitle: "Bird Box",
    genre: ["thriller", " horror"],
    releaseDate: "2018",
  },

  {
    moviePoster: "img/dontBreathePoster.jpeg",
    movieTitle: "Don't Breathe",
    genre: "thriller",
    releaseDate: "2016",
  },

  {
    moviePoster: "img/happyDeathDayPoster.jpeg",
    movieTitle: "Happy Death Day",
    genre: "comedy",
    releaseDate: "2017",
  },

  {
    moviePoster: "img/theGrinchPoster.jpeg",
    movieTitle: "How the Grinch Stole Christmas",
    genre: "comedy",
    releaseDate: "2000",
  },

  {
    moviePoster: "img/theHandmaidenPoster.jpeg",
    movieTitle: "The Handmaiden",
    genre: "thriller",
    releaseDate: "2016",
  },

  {
    moviePoster: "img/meanGirlsPoster.jpeg",
    movieTitle: "Mean Girls",
    genre: "comedy",
    releaseDate: "2004",
  },

  {
    moviePoster: "img/theEdgeOfSeventeenPoster.jpeg",
    movieTitle: "The Edge of Seventeen",
    genre: "comedy",
    releaseDate: "2016",
  },
];

const displayInfo = () => {
  let html = "";
  info.forEach((e) => {
    html += `<div class = "card">
    <img src="${e.moviePoster}">
        <p class="title">${e.movieTitle}</p>
                <p class="genre">${e.genre}</p>
                <p class="releaseDate">${e.releaseDate}</p>
                </div>`;
  });
  console.log(html);
  parentElement.innerHTML = html;
};

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    buttons.forEach((e) => {
      if (e.classList.contains("horror")) {
        e.classList.filter("horror");
      }
    });
    e.classList.add("horror");
  });
});

// function filterInfo(e) {
//   let buttons = e.target.dataset.buttons;
//   if (buttons === "*") {
//     info.forEach((info) => info.classList.remove("hidden"));
//   } else {
//     info.forEach((info) => {
//       info.classList.contains(buttons)
//         ? info.classList.remove("hidden")
//         : info.classList.add("hidden");
//     }

//   }
// }

displayInfo();

const filtered = info.filter((e) => {
    return e.genre.includes("horror");
  });
  
  console.log(filtered);