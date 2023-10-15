const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchInput.blur();
    }
});

function closeSearch() {
    searchInput.blur();
}



// RETRIEVE THE POST PARAMETERS
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Retrieve and display data from the query parameters
const imageSrc = getQueryParameter('image');
const username = getQueryParameter('user');
const postDp = getQueryParameter('dp');

if (imageSrc && username && postDp) {
    document.getElementById('postImage').src = imageSrc;
    document.getElementById('postDp').src = postDp;
    document.getElementById('postUsername').textContent = `${username}`;
}



// LOGO CLICK LOGIC
function handleLogoClick() {
    window.location.href = `page3.html?image=${imageSrc}&user=${username}&dp=${postDp}`;
}




// GET BACK TO THE HOME PAGE
const scrollArrow = document.getElementById("scrollArrow_1")

if (scrollArrow) {
    scrollArrow.addEventListener("click", () => {
        window.location.href = `page2.html`;
    });
}





// PERSONAL INFO MODAL
const modal = document.getElementById('personalModal');
const arrow = document.getElementById('modalTrigger')
let trigger = false;

function handleModalBtn() {
    modal.style.display = 'block';
    trigger = !trigger;
    if(!trigger) {
        handleModalClose();
    }
    else{
        arrow.style.transform = 'rotate(180deg)';
    }
}

function handleModalClose() {
    arrow.style.transform = 'rotate(0deg)';
    modal.style.display = 'none';
}

arrow.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the click event from reaching the document body listener
});

document.body.addEventListener('click', function (event) {
    if (trigger && event.target !== modal && event.target !== arrow) {
        trigger = !trigger;
        handleModalClose();
    }
});

modal.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent clicks inside the modal from closing it
});




// LOGOUT LOGIC
function handleLogout() {
    window.location.href = `index.html`;
}