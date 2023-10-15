const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchInput.blur();
    }
});

function closeSearch() {
    searchInput.blur();
}


// SIGNUP MODAL JS
let modal1 = document.getElementById("signupModal");

function handleModalBtn1() {
    modal1.style.display = "block";
}

function handleModalClose1() {
    modal1.style.display = "none";
}


function handleSignUpONCLICK() {
    handleModalClose2();
    handleModalBtn1();
}

// LOGIN MODAL JS
let modal2 = document.getElementById("loginModal");

function handleModalBtn2() {
    modal2.style.display = "block";
}

function handleModalClose2() {
    modal2.style.display = "none";
}

function handleLogInONCLICK() {
    handleModalClose1();
    handleModalBtn2();
}

window.onclick = function(event) {
    if(event.target == modal1){
        modal1.style.display = "none";
    }
    else if(event.target == modal2){
        modal2.style.display = "none";
    }
}



// SLIDER LOGIC
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})



// SCROLL TO NEXT SECTION
const arrow1 = document.getElementById("scrollArrow_1")
const target1 = document.getElementById("section_2")

if (arrow1 && target1) {
    arrow1.addEventListener("click", () => {
        target1.scrollIntoView({ behavior: "smooth" });
    });
}

const arrow2 = document.getElementById("scrollArrow_2")
const target2 = document.getElementById("section_1")

if (arrow2 && target2) {
    arrow2.addEventListener("click", () => {
        target2.scrollIntoView({ behavior: "smooth" });
    });
}




// SIGN UP LOGIC
function handleSignUpBtn() {
    window.location.href = `page2.html`;
}


// LOG IN LOGIC
function handleLogInBtn() {
    window.location.href = `page2.html`;
}