// Define Global Variables
const ul = document.querySelector("#navbar__list");
const navContents = document.querySelectorAll("section");

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

//check if
function inViewport(element) {
    let isVisible = false;

    const pageScrollHeight = window.pageYOffset;
    const topValue = element.offsetTop;


    if (pageScrollHeight >= topValue) {
        isVisible = true;
    } else {
        isVisible = false;
    }
    return isVisible;
}

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function() {
    for (const section of navContents) {
        if (inViewport(section)) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
});