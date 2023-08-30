const textRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

rangeHandle();

textRange.addEventListener("input", rangeHandle);

function rangeHandle() {
  text.style.fontSize  = `${textRange.value}px`;
}
