/* eslint-disable no-param-reassign */
export {};

const modalFormInfoList = [
  {
    title: 'на бесплатную консультацию',
  },
  {
    title: 'и получите подробный план открытия',
  },
  {
    title: 'на презентацию франшизы и финансовую модель',
  },
];

const closeModal = (modalEl: HTMLDivElement) => {
  modalEl.style.opacity = '0';
  modalEl.style.overflowY = 'inherit';
  modalEl.style.pointerEvents = 'none';
  document.body.style.overflowY = 'auto';
};

const openModal = (modalEl: HTMLDivElement) => {
  modalEl.style.opacity = '1';
  modalEl.style.overflowY = 'auto';
  modalEl.style.pointerEvents = 'auto';
  document.body.style.overflowY = 'hidden';
};

const modalElList = document.querySelectorAll('.modal');
const [formModalEl, policyModalEl] = modalElList;

const formTitleEl = formModalEl.querySelector(
  '.js-modal-form-title',
) as HTMLHeadingElement;

const modalWrapperElList = document.querySelectorAll('.modal__center-wrapper');
modalElList.forEach(modalEl => {
  modalEl.addEventListener('click', (e: Event) => {
    if (
      e.target === e.currentTarget
      || [...modalWrapperElList].includes(e.target as Element)
    ) {
      const clickedModal = e.currentTarget as HTMLDivElement;
      closeModal(clickedModal);
    }
  });
});

const closeModalElList = document.querySelectorAll('.modal__close');
closeModalElList.forEach(closeEl => {
  closeEl.addEventListener('click', (e: Event) => {
    let modalToClose = (e.target as HTMLButtonElement)
      .parentElement as HTMLDivElement;
    if (!modalToClose?.classList.contains('modal')) {
      modalToClose = modalToClose?.parentElement as HTMLDivElement;
    }
    if (!modalToClose?.classList.contains('modal')) {
      modalToClose = modalToClose?.parentElement as HTMLDivElement;
    }
    closeModal(modalToClose);
  });
});

// Найти кнопки и прописать события
const policyBtnElList = document.querySelectorAll('.js-policy');
policyBtnElList.forEach(el => {
  el.addEventListener('click', () => {
    openModal(policyModalEl as HTMLDivElement);
  });
});

const callbackBtnElList = document.querySelectorAll('.js-callback');
const planBtnElList = document.querySelectorAll('.js-plan');
const presentBtnElList = document.querySelectorAll('.js-present');

callbackBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    formTitleEl.textContent = modalFormInfoList[0].title;
    openModal(formModalEl as HTMLDivElement);
  });
});
planBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    formTitleEl.textContent = modalFormInfoList[1].title;
    openModal(formModalEl as HTMLDivElement);
  });
});
presentBtnElList.forEach(btn => {
  btn.addEventListener('click', () => {
    formTitleEl.textContent = modalFormInfoList[2].title;
    openModal(formModalEl as HTMLDivElement);
  });
});
