
const episodes = [
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_01_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_02_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_03_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_04_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_05_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_06_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_07_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_08_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_09_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_10_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_11_vostfr.mp4",
    "https://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_12_vostfr.mp4",
];

/*
const episodes = Array(12).fill(null)
    .map((_, index) => String(index + 1).padStart(2, "0"))
    .map((episodeNumber) => `http://archive.kagescan.fr/anime/mekakucity-actors/mekakucity_actors_${episodeNumber}_vostfr.mp4`);
*/

function setChapter(episodeNumber) {
    const video = document.querySelector("video");
    video.src = episodes[episodeNumber - 1];

    const span = document.querySelector(".episode-number");
    span.innerText = String(episodeNumber);
}

function updateBtnStates(episodeNumber) {
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");

    prevBtn.classList.remove("disabled");
    nextBtn.classList.remove("disabled");

    if (episodeNumber === 1) {
        prevBtn.classList.add("disabled");
    } else if (episodeNumber === episodes.length) {
        nextBtn.classList.add("disabled");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let episodeNumber = 1;
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");

    prevBtn.addEventListener("click", () => {
        if (episodeNumber > 1) {
            episodeNumber--;
            setChapter(episodeNumber);
        }
    });
    nextBtn.addEventListener("click", () => {
        if (episodeNumber < episodes.length) {
            episodeNumber++;
            setChapter(episodeNumber);
        }
        updateBtnStates(episodeNumber);
    });

});