const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const containerImg = document.querySelector(".container-img");
const containerOverlay = document.querySelector(".container-overlay");
const nav = document.querySelector(".nav");

let currentIndex = 0;

for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    const currentTitle = title[i];
    const currentText = text[i];

    let classActiveImg = "";
    let classActiveNav = "";

    if(i === currentIndex){
        classActiveImg = "active";
        classActiveNav = "active-nav";
    }
    
    containerImg.innerHTML += `<img class="img ${classActiveImg}" src="${currentItem}" alt="img${i}">`;
    containerOverlay.innerHTML += `<h1 class="title ${classActiveImg}">${currentTitle}</h1>`;
    containerOverlay.innerHTML += `<p class="news ${classActiveImg}">${currentText}</p>`;
    nav.innerHTML += `<img class="img-nav ${classActiveNav}" src="${currentItem}" alt="img${i}">`;
}

const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");


// when clicked goes back one image
arrowUp.addEventListener("click", function() {
    const activeImage = containerImg.querySelector(".active");
    const activeOverlay = containerOverlay.querySelectorAll(".active");
    const activeNav = nav.querySelector(".active-nav")

    activeImage.classList.remove("active");
    activeOverlay[0].classList.remove("active");
    activeOverlay[1].classList.remove("active");
    activeNav.classList.remove("active-nav");

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = items.length - 1;
    }

    const newActiveImg = containerImg.querySelector(`img:nth-child(${currentIndex + 1})`);
    newActiveImg.classList.add("active");

    const titleTags = containerOverlay.querySelectorAll(".title");
    const newsTags = containerOverlay.querySelectorAll(".news");
    const newActiveTitle = titleTags[currentIndex]
    const newActiveNews = newsTags[currentIndex]
    newActiveTitle.classList.add("active");
    newActiveNews.classList.add("active");

    const navTags = nav.querySelectorAll("img");
    const newActiveNav = navTags[currentIndex];
    newActiveNav.classList.add("active-nav");
});


// when clicked goes forward one image
arrowDown.addEventListener("click", function() {
    const activeImage = containerImg.querySelector(".active");
    const activeOverlay = containerOverlay.querySelectorAll(".active");
    const activeNav = nav.querySelector(".active-nav")

    activeImage.classList.remove("active");
    activeOverlay[0].classList.remove("active");
    activeOverlay[1].classList.remove("active");
    activeNav.classList.remove("active-nav");

    currentIndex++;

    if(currentIndex == items.length){
        currentIndex = 0;
    }
    
    const newActiveImg = containerImg.querySelector(`img:nth-child(${currentIndex + 1})`);
    newActiveImg.classList.add("active");

    const titleTags = containerOverlay.querySelectorAll(".title");
    const newsTags = containerOverlay.querySelectorAll(".news");
    const newActiveTitle = titleTags[currentIndex]
    const newActiveNews = newsTags[currentIndex]
    newActiveTitle.classList.add("active");
    newActiveNews.classList.add("active");

    const navTags = nav.querySelectorAll("img");
    const newActiveNav = navTags[currentIndex];
    newActiveNav.classList.add("active-nav");
});