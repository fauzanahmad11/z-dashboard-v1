const headList = document.querySelectorAll(".navbar-content.body .navbar-items a.navbar-link.head-list");
const navBar = document.querySelector(".navbar");

function myFunction(x) {
    if (x.matches) {
        // document.body.style.backgroundColor = "yellow";
        navBar.style.maxWidth = "100%";
    } else {
        // document.body.style.backgroundColor = "pink";
        navBar.style.maxWidth = "235px";
        headList.forEach(headList => {
            headList.addEventListener("click", event => {
                const currentListActive = document.querySelector(".navbar-content.body .navbar-items a.navbar-link.head-list.active");
                if (currentListActive && currentListActive !== headList) {
                    currentListActive.classList.toggle("active");
                    currentListActive.nextElementSibling.getElementsByClassName.maxHeight = 0;
                }

                // if (headList.classList.item(2) == 'active') {
                //     console.log("yes");
                //     navBar.style.maxWidth = "235px";
                // } else {
                //     navBar.style.maxWidth = "240px";
                // }

                headList.classList.toggle("active");
            });
        });
    }
}

var x = window.matchMedia("(max-width: 768px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


// ==================Dropdown user==================
let toggleNavStatus = false;

const getBtnToggleUser = document.querySelector(".user-dropdown .dropdown-toggle");
const getDropdownItem = document.querySelector(".user-dropdown .dropdown-menu ul.dropdown-item");

getBtnToggleUser.addEventListener('click', function () {
    if (toggleNavStatus === false) {
        getDropdownItem.style.maxHeight = "100vh";
        getDropdownItem.style.boxShadow = "0 15px 25px 2px rgba(0, 0, 0, .4)";
        getDropdownItem.style.border = "3px solid #fff";

        toggleNavStatus = true;
    } else {
        getDropdownItem.style.maxHeight = "0vh";
        getDropdownItem.style.boxShadow = "none";
        getDropdownItem.style.border = "none";
        toggleNavStatus = false;
    }
});

// navbar drop yang memupnyai anak
const getHeadList = document.querySelectorAll(".navbar-link.head-list");
let headListLength = getHeadList.length;
for (let i = 0; i < headListLength; i++) {
    getHeadList[i].removeAttribute("href");
}