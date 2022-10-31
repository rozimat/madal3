const btn = document.querySelector("#btn");
const modalEl = document.querySelector(".modal-btn");
const modalWrapper = document.querySelector(".wrapper");

btn.addEventListener("click", ()=>{
  modalEl.style.display = "block";
  modalWrapper.style="none";
});

modalEl.addEventListener("submit", ()=>{
  modalEl.style.display = "none";
  modalWrapper.style="block";

})