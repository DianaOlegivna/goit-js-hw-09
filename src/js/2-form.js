const feedbackForm = document.querySelector('.js-feedback-form')

let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  try {
    const formDataFromsLS = localStorage.getItem('feedback-form-state');

    if (!formDataFromsLS) {
      return;
    }

    formData = JSON.parse(formDataFromsLS);

    for (const key in formData) {
      if (feedbackForm.elements[key]) {
        feedbackForm.elements[key].value = formData[key];
      }
    }
  }
  catch (err) {
    console.log(err);
  }
};


fillFormFields();

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