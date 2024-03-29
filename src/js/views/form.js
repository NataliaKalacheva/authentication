/**
 * Function inputErrorTemplate
 * @param {String} msg
 */

function inputErrorTemplate(msg) {
  return `
  <div class="invalid-feedback">${msg}</div>
  `;
}

/**
 * Function showInputError add input error
 * @param {HTMLInputElement} el
 */

export function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || "Invalid input";
  const template = inputErrorTemplate(msg);
  el.classList.add("is-invalid");
  parent.insertAdjacentHTML("beforeend", template);
}

export function closeModalForm() {
  const modalForm = document.getElementById("darkModalForm");
  const modalBackdrop = document.querySelector(".modal-backdrop");
  modalForm.classList.remove("show");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("show");
  }
}
/**
 * Function removeInputError
 * @param {HTMLInputElement} el
 */

export function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector(".invalid-feedback");
  if (!err) return;
  el.classList.remove("is-invalid");
  parent.removeChild(err);
}
