// DARK MODE

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    darkBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }
  else{

    darkBtn.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

  }

});



// SCROLL ANIMATION

const sections =
document.querySelectorAll(".scroll-animation");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const sectionTop =
    section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

      section.classList.add("active");

    }

  });

});



// FORM ALERT

const forms =
document.querySelectorAll("form");

forms.forEach(form => {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Form submitted successfully!");

    form.reset();

  });

});



// SCROLL TO TOP BUTTON

const scrollBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    scrollBtn.style.display = "block";

  }
  else{

    scrollBtn.style.display = "none";

  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

});