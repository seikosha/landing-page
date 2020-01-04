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

const ul = document.querySelector("#navbar__list");
const navContents = document.querySelectorAll("section");

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

// build the nav with "for...of" loop

for (let navContent of navContents)
{
    const lis = document.createElement("li");
    for (let i = 0; i < navContents.length; i++)
    {
        let liNames = navContent.id;
        lis.innerHTML = "<a href=#"+liNames+">"+navContent.id+"</a>";
    }
    ul.appendChild(lis);
}

// Add class 'active' to section when near top of viewport
// reference: https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/

function inViewport(element) {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener("scroll", function() {
    for (const section of navContents) {
        if (inViewport(section)) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
});

/**
 * End Main Functions
 * Begin Events
 *
*/


