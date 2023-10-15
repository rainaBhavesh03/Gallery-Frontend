const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchInput.blur();
    }
});

function closeSearch() {
    searchInput.blur();
}




// POST VIEW REDIRECT V2
document.querySelector('.posts').addEventListener('click', function (event) {
    // Check if the clicked element or its parent has the "clickAble" class
    if (event.target.classList.contains('clickAble') || event.target.closest('.clickAble')) {
        console.log('clickAble element clicked');
        // Find the related post details within the clicked post element
        const postElement = event.target.closest('.clickAble');

        // Check if the required elements exist
        const imgElement = postElement.querySelector('.postImage'); // Update the selector to '.postImage'
        const usernameElement = postElement.querySelector('.postInfo p');
        const dpElement = postElement.querySelector('.postInfo img');

        if (imgElement && usernameElement && dpElement) {
            const imageSrc = imgElement.src;
            console.log('imageSrc: ', imageSrc);
            const username = usernameElement.textContent;
            console.log('username: ', username);
            const postDp = dpElement.src;
            console.log('postDp: ', postDp);

            // Redirect to the new HTML file with query parameters
            window.location.href = `page3.html?image=${imageSrc}&user=${username}&dp=${postDp}`;
        } else {
            console.log('One or more required elements are missing.');
        }
    }
});




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