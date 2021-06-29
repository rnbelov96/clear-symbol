import '../scss/thanks.scss';

const nameLabelEl = document.querySelector('.js-name') as HTMLSpanElement;
nameLabelEl.textContent = localStorage.getItem('userName') || 'Гость';
