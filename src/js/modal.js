const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};
refs.openModalBtn.addEventListener('click', handleModalOpen);
refs.closeModalBtn.addEventListener('click', handleModalClose);
refs.modal.addEventListener('mouseup', closeOnClickBackdrop);

function handleEsc(evt) {
  if (evt.key === 'Escape') {
    handleModalClose();
  }
}

function closeOnClickBackdrop(evt) {
  if (evt.target.className === 'consultation-backdrop') {
    handleModalClose();
  }
}

function handleModalOpen() {
  refs.modal.classList.remove('is-hidden');
  document.addEventListener('keydown', handleEsc);
}

function handleModalClose() {
  refs.modal.classList.add('is-hidden');
  document.removeEventListener('keydown', handleEsc);
}
