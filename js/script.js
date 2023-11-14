const slides = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

slider(slides)
function slider(array) {
    const container = document.querySelector(".item")
    array.forEach(slide => {
        const newSlide = createSlide(slide)

        container.append(newSlide)
        console.log(newSlide);
        createThumb(slide)

    });
}
function createSlide(oneslide) {
    const slideElem = document.createElement("div")
    slideElem.classList.add("item")
    slideElem.innerHTML =
        `
<img src="${oneslide.image}" alt="Spiderman" />
<div class="text">
    <h3>${oneslide.title}</h3>
    <p>
        ${oneslide.text}
    </p>
</div>`
    return slideElem
}
function createThumb(oneThumbs) {
const thumbElem =document.createElement("div")
thumbElem.classList.add("thumb")
thumbElem.innerHTML = ` <img src=${oneThumbs.image}" alt="Svezia" />`
return thumbElem
}
console.log(createThumb(slides[0]));