const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};
hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        console.log(i);
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

//* SLIDER

let slidex = 0;
function currentSlide(n) {
  showSlides(slidex = n);
}

function showSlides(n) {
  let slideText = document.querySelectorAll(".tabheader__item");
  let sliderItem = document.querySelectorAll(".tabcontent");
  if (n > slideText.length && n > sliderItem.length) {
    slidex += 1;
  }
  if (n < 0) {
    slidex = slideText.length && slidex === sliderItem.length;
  }
  for (let slide of slideText) {
    slide.classList.remove("tabheader__item_active");
  }
  slideText[n].classList.add("tabheader__item_active");

  for (let slide of sliderItem) {
    slide.style.display = "none";
  }
  sliderItem[slidex].style.display = "block";
}


const timer = () => {
  slidex++;
  if (slidex > 3) {
    slidex = 0;
  }
  hideTabContent()
  showTabContent(slidex)
  console.log(slidex)
}
setInterval(timer, 3000);

//MODAL Window


const modal = document.querySelector(".modal");
const modalTrigger = document.querySelectorAll("[data-modal]");

modalTrigger.forEach((item) => {
  item.addEventListener("click", openModal);
});

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";

  clearInterval(modalTimeout);
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

modal.addEventListener("click", (event) => {
  if (
    event.target === modal ||
    event.target.classList.contains("modal__close")
  ) {
    closeModal();
  }
});

function openModalScroll() {
  const page = document.documentElement;

  if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
    openModal();

    window.removeEventListener("scroll", openModalScroll);
  }
}

window.addEventListener("scroll", openModalScroll);
const modalTimeout = setTimeout(openModal, 30000);
