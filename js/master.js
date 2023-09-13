// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

// If There's Color Item In Local Storage
if (mainColors !== null) {

  // console.log('Local Storage Is Not Empty You Can Set It On Root Now');
  // console.log(localStorage.getItem("color_option"));

document.documentElement.style.setProperty('--main-color', mainColors);

  // Remove Active Class From All Colors List Item
document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {

      // Add Active Class
    element.classList.add("active");

    }

});

}

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not EMpty
if (backgroundLocalItem !== null) {

  // Remove Active Class From All Spans
document.querySelectorAll(".rand-bg span").forEach(element => {

    element.classList.remove("active");

});

    if (backgroundLocalItem === 'true') {

    backgroundOption = true;

    document.querySelector(".rand-bg .yes").classList.add("active");

        } else {

            backgroundOption = false;

            document.querySelector(".rand-bg .no").classList.add("active");

    }

}

// Click On Toggle Settings Gear
document.querySelector(".toggle-setting .fa-gear").onclick = function () {

  // Toggle Class Fa-spin For Rotation on Self
this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
document.querySelector(".setting-box").classList.toggle("open");

};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach(li => {

  // Click On Every List Items
li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);
          
          handelActive(e);

});
});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".rand-bg span");

// Loop On All Spans
randomBackEl.forEach(span => {

  // Click On Every Span
span.addEventListener("click", (e) => {
    
    handelActive(e);

    if (e.target.dataset.background === 'yes') {

        backgroundOption = true;

        randomizeImgs();

        localStorage.setItem("background_option", true);

    } else {

        backgroundOption = false;

        clearInterval(backgroundInterval);

        localStorage.setItem("background_option", false);

    }

    });

});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {

    if (backgroundOption === true) {

    backgroundInterval = setInterval(() => {

      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
      // Change Background Image Url 
        landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
    }, 10000);

    }

}

randomizeImgs();


//Select Our Selector

let ourSkills = document.querySelector(".skills");

window.onscroll = function(){

  let skillsOffsetTop = ourSkills.offsetTop;
  
  let skillsOuterHeight = ourSkills.offsetHeight;

  let windowHeight = this.innerHeight;

  let windowScrollTop = this.pageYOffset;

  if(windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
    
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

    allSkills.forEach(skill =>{
      
      skill.style.width = skill.dataset.progress;

    });

  }

};

//Create Popup With The Image
let ourGallery = document.querySelectorAll(".our-gallery img");

ourGallery.forEach(img => {
  
  img.addEventListener('click' , (e) => {
    
    //Create Overlay Element
    let overlay = document.createElement("div")

    //Add Class Name Overlay
    overlay.className = 'popup-overlay';

    //Append Overlay To The Body
    document.body.appendChild(overlay);

    //Create The Popup Box
    let popupBox = document.createElement("div");

    //Add Class Name PoupBox
    popupBox.className = 'popup-box';

    if(img.alt !== null){

      let headingImage = document.createElement("h3");

      let imageText = document.createTextNode(img.alt);
      
      headingImage.appendChild(imageText);

      popupBox.appendChild(headingImage);

      

    }

    //Create The Image
    let popupImage = document.createElement("img");

    //Set Image Source
    popupImage.src = img.src;

    //Add Image To Popup Box
    popupBox.appendChild(popupImage);

    //Add Popup Box To Body 
    document.body.appendChild(popupBox);

    //Create The Close Span
    let closeButton = document.createElement("span");

    //Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    //Append Text To Close Button
    closeButton.appendChild(closeButtonText)

    closeButton.className = 'close-button';

    popupBox.appendChild(closeButton);

  });

});

    //Close Popup
    
    document.addEventListener("click", (e) => {

      if(e.target.className == 'close-button') {

        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();

      }

    });



    //Select All Bullets
    const allBullets = document.querySelectorAll(".nav-bullets .bullet");

    allBullets.forEach(bullet => {

        bullet.addEventListener("click", (e) => {

            document.querySelector(e.target.dataset.section).scrollIntoView({
              behavior: 'smooth'
            });

        });

    });


    //Select All Links
    const allLinks = document.querySelectorAll(".links a");

    allLinks.forEach(link => {

      
      link.addEventListener("click", (e) => {
          e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

              behavior: 'smooth'

            });

        });

    });


    //Handel Active
    function handelActive(ev){

      ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active")

});

        ev.target.classList.add("active");

    }


    //Show Bullets
    let bulletsSpan = document.querySelectorAll(".bullets-option span");
    let bulletContainer = document.querySelector(".nav-bullets");

    let bulletLocalItem = localStorage.getItem("bullets_option")

    if(bulletLocalItem !== null) {

      bulletsSpan.forEach(span => {

        span.classList.remove("active");

      });

      if (bulletLocalItem === 'block'){

        bulletContainer.style.display = 'block';
        document.querySelector(".bullets-option .yes").classList.add("active")

      }else{

        bulletContainer.style.display = 'none';
        document.querySelector(".bullets-option .no").classList.add("active")

      }

    }

    bulletsSpan.forEach(span => {

      span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

          bulletContainer.style.display = 'block';
          localStorage.setItem("bullets_option", 'block');

        } else {

          bulletContainer.style.display = 'none';
          localStorage.setItem("bullets_option", 'none');

        }

        handelActive(e);

      });

    });


    //reset-options
    document.querySelector(".reset-options").onclick = function (){

      localStorage.removeItem("color_option");
      localStorage.removeItem("background_option");
      localStorage.removeItem("bullets_option");
      

      window.location.reload();
    }


    //Toggle Menu
    let toggleBtn = document.querySelector(".toggle-menu");
    let tLinks = document.querySelector(".links");

    toggleBtn.onclick = function(e) {

      e.stopPropagation();

      this.classList.toggle("menu-active");

      tLinks.classList.toggle("open");

    }


    //Close Menu
    document.addEventListener("click", (e) => {

      if(e.target !== toggleBtn && e.target !== tLinks){

        if(tLinks.classList.contains("open")){

          toggleBtn.classList.toggle("menu-active");

          tLinks.classList.toggle("open");

        }

      }

    });

    tLinks.onclick = function() {
      e.stopPropagation();
    }