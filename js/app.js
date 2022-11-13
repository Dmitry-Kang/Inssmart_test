import plugin_tabs from './plugin-tabs.js';
plugin_tabs();

const forms = document.querySelectorAll('.add-property');

const formValidate = (form) => {
  const inputs = form.querySelectorAll('._req');

  inputs?.forEach((input) => {
    if (input.value.trim() === '') {
      input.value = '';
      formAddError(input);
    } else {
      alert('Form is submitted');
    }

    input.onfocus = () => {
      formRemoveError(input);
    };
  });
};

const formAddError = (input) => {
  input.classList.add('_error');
};
const formRemoveError = (input) => {
  input.classList.remove('_error');
};

forms?.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    formValidate(form);
  });
});
