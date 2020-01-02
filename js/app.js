/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/








/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

// function createNav()
// {
//     const navLinks = document.querySelector("ul");
//     navLinks.insertAdjacentHTML("beforeend","<li id='0'><a href=#top><p>Top</p></a></li>");
//     navLinks.insertAdjacentHTML("beforeend","<li id='1'><a href=#section1><p>Section 1</p></a></li>");
//     navLinks.insertAdjacentHTML("beforeend","<li id='2'><a href=#section2><p>Section 2</p></a></li>");
//     navLinks.insertAdjacentHTML("beforeend","<li id='3'><a href=#section3><p>Section 3</p></a></li>");
// }
// createNav();

const navList = document.querySelector("#navbar__list");
const navContents = document.querySelectorAll("section");

for (let navContent of navContents)
{
    const lis = document.createElement("li");
    for (let i = 0; i < navContents.length; i++)
    {
        const liName = document.querySelectorAll("section")[i].id;
        lis.innerHTML = "<a href="+liName+">"+navContent.id+"</a>";
    }
    navList.appendChild(lis);
}


let isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const section00 = document.getElementById("top");

window.addEventListener("scroll",function(){
    if (isInViewport(section00)){
        section00.classList.add("active");
    } else {
        section00.classList.remove("active");
    }
});

const section11 = document.getElementById("section1");

window.addEventListener("scroll",function(){
    if (isInViewport(section11)){
        section11.classList.add("active");
    } else {
        section11.classList.remove("active");
    }
});

const section22 = document.getElementById("section2");

window.addEventListener("scroll",function(){
    if (isInViewport(section22)){
        section22.classList.add("active");
    } else {
        section22.classList.remove("active");
    }
});

const section33 = document.getElementById("section3");

window.addEventListener("scroll",function(){
    if (isInViewport(section33)){
        section33.classList.add("active");
    } else {
        section33.classList.remove("active");
    }
});





// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


