/*================ toggle style switcher =================== */ 

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})


// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

// if (styleSwitcherToggle) {
//     styleSwitcherToggle.addEventListener("click", () => {
//         document.querySelector(".style-switcher").classList.toggle("open");
//     });
// } else {
//     console.error("Element with class 'style-switcher-toggler' not found in the DOM.");
// }

//hide style switcher on scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})  


/*----------- ========= theme color ========== -----------*/

const alternateStyle=document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

/*----------- ========= theme light and dark mode ========== -----------*/

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    if(document.querySelector("body").classList[0]) {
        document.getElementById("tanishalogo").src = "images/tanisha's logo white-02.png";
        return;
    }
    document.getElementById("tanishalogo").src = "images/Tanisha's logo.png";
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }

    
})