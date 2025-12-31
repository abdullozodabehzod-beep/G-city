 const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
 const nextBtn = document.getElementById('next');
 const prevBtn = document.getElementById('prev'); 

 let index = 0;
 let autoDelay = 4000;
 let transitionSpeed = 1000;
 let lastAction = 0;

 function showSlide(i) {
   slides.forEach((slide, idx) => {
     slide.classList.toggle('active', idx === i);
     dots[idx].classList.toggle('active', idx === i);
   });
  }

  function nextSlide() {
   const now = Date.now();
   if (now - lastAction < transitionSpeed) return;
   lastAction = now;

   index = (index + 1) % slides.length;
   showSlide(index);
   }

   function prevSlide() {
   const now = Date.now();
  if (now - lastAction < transitionSpeed) return;
  lastAction = now;

  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
 }

 nextBtn.addEventListener('click', nextSlide);
 prevBtn.addEventListener('click', prevSlide);

 dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
   const now = Date.now();
   if (now - lastAction < transitionSpeed) return;
   lastAction = now;

   index = i;
   showSlide(index);
  });
 });

 setInterval(nextSlide, autoDelay);

  //Date

 const now = new Date();
 const day = now.getDate();
 const month = now.getMonth() + 1;
 const year = now.getFullYear;
 
document.getElementById("date").innerText =("Обнавление: " + `${15}.${11}.${2025}`);


 //Курс валют

 async function loadFX() {
  const widget = document.getElementById('fx-widget');
  widget.innerHTML = 'Загрузка курсов...';

  try {
   const res = await fetch("https://open.er-api.com/v6/latest/EUR");
   const data = await res.json();

   const EUR_TO_TJS = 12.40;

   const usdToTjs = EUR_TO_TJS/ data.rates.USD;
   const rubToTjs = EUR_TO_TJS/ data.rates.RUB;

   widget.innerHTML = `
   <diV class="fx-title"></div>
   <diV class="fx-small">Обнавлено: </div>
   <diV class="fx-row"><span>USD -> TJS</span><b>${usdToTjs.toFixed(2)}</b></div>
   <diV class="fx-row"><span>EUR -> TJS</span><b>${EUR_TO_TJS.toFixed(2)}</b></div>
   <diV class="fx-row"><span>RUB -> TJS</span><b>${rubToTjs.toFixed(3)}</b></div>`
   
  } catch (e) {
   widget.innerHTML = "Ошибка загрузка курса";
   console.log(e);
  }
 }

 loadFX();

 //News

 const newsUnderCard = document.getElementById("newsUnderCard");

 document.getElementById("newsCard").onclick = function() {
    newsUnderCard.classList.add("active");
 };

 document.getElementById("closeNews").onclick = function() {
    newsUnderCard.classList.remove("active");
 };

 window.onclick = function(e) {
    if (e.target === newsUnderCard) {
        newsUnderCard.classList.remove("active");
    }
 };

//News1

 const newsUnderCard1 = document.getElementById("newsUnderCard1");

 document.getElementById("newsCard1").onclick = function() {
   newsUnderCard1.classList.add("active");

 };


 document.getElementById("closeNews1").onclick = function() {
   newsUnderCard1.classList.remove("active");
 };

 window.onclick = function(e) {
   if (e.target === newsUnderCard1) {
      newsUnderCard1.classList.remove("active");
   }
 };

 //News2

 const newsUnderCard2 = document.getElementById("newsUnderCard2");

 document.getElementById("newsCard2").onclick = function() {
   newsUnderCard2.classList.add("active");

 };


 document.getElementById("closeNews2").onclick = function() {
   newsUnderCard2.classList.remove("active");
 };

 window.onclick = function(e) {
   if (e.target === newsUnderCard1) {
      newsUnderCard.classList.remove("active");
   }
 };

 



 
 