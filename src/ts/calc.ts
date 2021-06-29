/* eslint-disable no-param-reassign */
export {};

const leftColor = '#4aa016';
const rightColor = '#e5e5e5';

const shopAmountLabelList = [
  'одного магазина',
  'двух магазинов',
  'трех магазинов',
  'четырех магазинов',
  'пяти магазинов',
];

const shopAmountLabelEl = document.querySelector('.js-shop-amount-label') as HTMLSpanElement;

const rangeElList = document.querySelectorAll('.js-range');

const rentRange = document.querySelector('.js-rent-range') as HTMLInputElement;
const shopIncomeRange = document.querySelector(
  '.js-shop-income-range',
) as HTMLInputElement;
const restWasteRange = document.querySelector(
  '.js-rest-waste-range',
) as HTMLInputElement;
const eShopIncomeRange = document.querySelector(
  '.js-eShop-income-range',
) as HTMLInputElement;
const optIncomeRange = document.querySelector(
  '.js-opt-income-range',
) as HTMLInputElement;

const rentEndpoints = document.querySelector(
  '.js-rent-endpoints',
) as HTMLDivElement;
const shopIncomeEndpoints = document.querySelector(
  '.js-shop-income-endpoints',
) as HTMLDivElement;
const restWasteEndpoints = document.querySelector(
  '.js-rest-waste-endpoints',
) as HTMLDivElement;
const eShopIncomeEndpoints = document.querySelector(
  '.js-eShop-income-endpoints',
) as HTMLDivElement;
const optIncomeEndpoints = document.querySelector(
  '.js-opt-income-endpoints',
) as HTMLDivElement;

let currentShopAmount = 1;

const calcResultLabelElList = document.querySelectorAll('.js-calc-result');
const workPaymentLabelEl = document.querySelector(
  '.js-work-payment',
) as HTMLSpanElement;
const totalWasteLabelEl = document.querySelector(
  '.js-total-waste',
) as HTMLSpanElement;

let result: number;
let workPayment: number;
let totalWaste: number;

let rentCurrentStep = 2;
let shopIncomeCurrentStep = 2;
let restWasteCurrentStep = 2;
let eShopIncomeCurrentStep = 2;
let optIncomeCurrentStep = 2;

const calcWorkPayment = () => {
  workPayment = 750 * 30
    + (Number(shopIncomeRange.value) + Number(eShopIncomeRange.value)) * 0.05;
  workPaymentLabelEl.textContent = (
    workPayment * currentShopAmount
  ).toLocaleString();
  return workPayment;
};

const calcTotalWaste = () => {
  totalWaste = Number(restWasteRange.value)
    + Number(rentRange.value)
    + calcWorkPayment()
    + (Number(shopIncomeRange.value)
      + Number(eShopIncomeRange.value)
      + Number(optIncomeRange.value))
      * 0.513;
  totalWasteLabelEl.textContent = (
    totalWaste * currentShopAmount
  ).toLocaleString();
  return totalWaste;
};

const calcResult = () => {
  result = (Number(shopIncomeRange.value)
      + Number(eShopIncomeRange.value)
      + Number(optIncomeRange.value)
      - calcTotalWaste())
    * currentShopAmount;
  calcResultLabelElList.forEach(el => {
    el.textContent = result.toLocaleString();
  });
};

calcResult();

const radioListContainerEl = document.querySelector('.calc__radio-list');
radioListContainerEl?.addEventListener('click', (e: Event) => {
  const clickedElement = e.target as HTMLElement;
  if (clickedElement.tagName !== 'INPUT') {
    return;
  }

  currentShopAmount = Number((clickedElement as HTMLInputElement).value);

  shopAmountLabelEl.textContent = shopAmountLabelList[currentShopAmount - 1];

  calcResult();
});

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (currentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;
});

rentRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  rentCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  [...rentEndpoints.children].forEach(endpoint => {
    endpoint.classList.remove('calc__endpoint_active');
  });
  rentEndpoints.children[rentCurrentStep].classList.add(
    'calc__endpoint_active',
  );

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (rentCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (rentCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

shopIncomeRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  shopIncomeCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  [...shopIncomeEndpoints.children].forEach(endpoint => {
    endpoint.classList.remove('calc__endpoint_active');
  });
  shopIncomeEndpoints.children[shopIncomeCurrentStep].classList.add(
    'calc__endpoint_active',
  );

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (shopIncomeCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (shopIncomeCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

restWasteRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  restWasteCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  [...restWasteEndpoints.children].forEach(endpoint => {
    endpoint.classList.remove('calc__endpoint_active');
  });
  restWasteEndpoints.children[restWasteCurrentStep].classList.add(
    'calc__endpoint_active',
  );

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (restWasteCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (restWasteCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

eShopIncomeRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  eShopIncomeCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  [...eShopIncomeEndpoints.children].forEach(endpoint => {
    endpoint.classList.remove('calc__endpoint_active');
  });
  eShopIncomeEndpoints.children[eShopIncomeCurrentStep].classList.add(
    'calc__endpoint_active',
  );

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (eShopIncomeCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (eShopIncomeCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});

optIncomeRange.addEventListener('input', e => {
  const rangeEl = e.currentTarget as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  optIncomeCurrentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  [...optIncomeEndpoints.children].forEach(endpoint => {
    endpoint.classList.remove('calc__endpoint_active');
  });
  optIncomeEndpoints.children[optIncomeCurrentStep].classList.add(
    'calc__endpoint_active',
  );

  rangeEl.style.background = `linear-gradient(to right, ${leftColor} 0%, ${leftColor} ${String(
    (optIncomeCurrentStep / steps) * 100,
  )}%, ${rightColor} ${String(
    (optIncomeCurrentStep / steps) * 100,
  )}%, ${rightColor} 100%)`;

  calcResult();
});
