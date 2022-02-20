import { throttle } from 'lodash';
const params = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('textarea'),
  input: document.querySelector('.feedback-form input'),
};

const throttleFunc = throttle(onTextInput, 500);

let inputValues = {};
fillInText();

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttleFunc);

function onSubmit(e) {
  e.preventDefault();
  console.log(inputValues);
  inputValues = {};
  e.currentTarget.reset();
  localStorage.removeItem(params);
}

function onTextInput(e) {
  inputValues[e.target.name] = e.target.value;
  console.log('inputValues', inputValues);
  const savedData = JSON.stringify(inputValues);
  localStorage.setItem(params, savedData);
}

function fillInText() {
  const savedInputs = localStorage.getItem(params);
  console.log(savedInputs);
  if (savedInputs !== null) {
    const parsedInput = JSON.parse(savedInputs);
    const keys = Object.keys(parsedInput);
    for (const key of keys) {
      refs.form.elements[key].value = parsedInput[key];
      inputValues[key] = parsedInput[key];
    }
  }
}
