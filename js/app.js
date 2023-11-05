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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

const numOfSections = sections.length;

/**
  * End Global Variables
  * Start Helper Functions
  * 
  */
 //navlist creation
function createNavList() {
    for (let i = 0; i < numOfSections; i++) {
         //creating list item in each iteration and generating innerHTML from its corresponding section attributes info.
        const listItem = document.createElement("li");
        const location = sections[i].getAttribute("id");
        const sectionName = sections[i].getAttribute("data-nav");
        listItem.innerHTML = `<a class="menu__link" href=#${location}>${sectionName}</a>`;
        navList.appendChild(listItem);
    }
}

 //checking if an element is in a viewport

function isInViewport(element) {
     //fetching the rectangle DOM object
    let rectangleDOM = element.getBoundingClientRect();


    return (
         rectangleDOM.top >= 0 && rectangleDOM.top < 0.5 * window.innerHeight
    );
}

 //adding class styles to the section in the viewport

function checkActiveClass() {

    for (let section of sections) {


        if (isInViewport(section)) {
             //if it is in viewport and doesn't have the class
            if (!section.classList.contains("your-active-class")) {
                 //then add it on the class list
                section.classList.add("your-active-class");
            }
        } else {
             //if it is not in the ViewPort just remove it
            section.classList.remove("your-active-class");
        }
    }
}

 //applying events for each anchor click

function scrollByAnchors() {

    const anchors = document.querySelectorAll(".menu__link");
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function(e) {
             //detecting the clicked anchor by passing the index
            applyActiveLink(i);
            e.preventDefault();
            sections[i].scrollIntoView({
                behavior: "smooth"
            });
        })
    }
}

 //function to apply the new "active_link" styles on the selected anchor 

function applyActiveLink(index) {

    const anchors = document.querySelectorAll(".menu__link");
    for (let i = 0; i < anchors.length; i++) {
         //if the counter equals the passed index of the selected anchor
        if (i === index) {
             //add the new css class styles
            anchors[i].classList.add("active_link");
        } else {
             //and remove it from anything not selected
            anchors[i].classList.remove("active_link");
        }
    }
}
/**
  * End Helper Functions
  * Begin Main Functions
  * 
  */

 // build the nav

createNavList();

 // Add class 'active' to section when near top of viewport

window.addEventListener('scroll', checkActiveClass);
 // Scroll to anchor ID using scrollTO event

/**
  * End Main Functions
  * Begin Events
  * 
  */
 // Build menu 

 // Scroll to section on link click
scrollByAnchors();
 // Set sections as active
