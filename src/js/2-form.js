const feedbackForm = document.querySelector('.js-feedback-form')

let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  try {
    if (localStorage.length === 0) {
      return;
    }
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    formData = formDataFromLS;
    for (const key in formDataFromLS) {
      feedbackForm.elements[key].value = formDataFromLS[key];
    }
  } catch (err) {
    console.log(err);
  }
};

const onFormInput = event => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
};

const onFormSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
   
  console.log(formData);

  formData = { email: '', message: '' };
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
}; 


feedbackForm.addEventListener('input', onFormInput);
feedbackForm.addEventListener('submit', onFormSubmit);