const showModal = document.querySelector(".show-modal");
// console.log(showModal);
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// const btnAdd = document.querySelector(".btn");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
showModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);

// overlay.addEventListener("click", closeModal);
