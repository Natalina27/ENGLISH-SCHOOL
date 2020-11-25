import {saveToStorage} from './login';

console.log('wizard');

const obj = {};

const getElById = (el) => document.getElementById(el);
const styleDisNone = (el) => el.style.display = 'none';
const styleDisBlock = (el) => el.style.display = 'flex';
const btnClick = (btn, func) => btn.addEventListener('click', func);

//Buttons
const regBtn = getElById('regBtn');
const continueBtn = getElById('toStep2Btn');
const from3to2Btn = getElById('from3to2Svg');
const from2to1Btn = getElById('from2to1');
const studentBackBtn = getElById('from2to1Svg');
const from4to3Btn = getElById('from4to3');
const from4to5Btn = getElById('from4to5');
const toLoginBtn = getElById('toLoginSvg');
const from1to2Btn = getElById('from1to2');
const continueStudentBtn = getElById('toRegFormBtn');

//Blocks
const wruBlock = getElById('step1Block');
const loginBlock = getElById('loginBlock');
const regBlock = getElById('regBlock');
const studentFormBlock = getElById('step2Block');

//Radio
const student = getElById('user_student');

//Form
const formLogin = regBlock.querySelector('.form-login');
const nameInput = getElById('name');
const mailInput = getElById('email');
const passwordInput = getElById('password');
const confirmPasswordInput = getElById('password_next');
const createAccountBtn = getElById('createAccount');
const clearForm = () => {
  nameInput.value = '';
  mailInput.value = '';
  passwordInput.value = '';
  confirmPasswordInput.value = '';
};

//Functions
const wruBlockOpen = () => {
  styleDisBlock(wruBlock);
  styleDisNone(loginBlock);
  styleDisNone(regBlock);
  styleDisNone(studentFormBlock);
};
const regBlockOpen = () => {
  styleDisBlock(regBlock);
  styleDisNone(loginBlock);
  styleDisNone(wruBlock);
  styleDisNone(studentFormBlock);
};
const loginBlockOpen = () => {
  styleDisBlock(loginBlock);
  styleDisNone(wruBlock);
  styleDisNone(regBlock);
};
const studentFormOpen = () => {
  styleDisBlock(studentFormBlock);
  styleDisNone(wruBlock);
};
const continueByType = () => {
  if (student.checked) {
    studentFormOpen();
    obj.type = 'student';
  } else {
    regBlockOpen();
    obj.type = 'teacher';
  }
};
const generateError = (el) => {
  el.className = 'error-reg';
  return false;
};
const removeValidation = () => {
  const errors = formLogin.querySelectorAll('.error-reg');
  errors.forEach(item => {
    item.classList.remove('error-reg');
    item.classList.add('input-box');
  });

};

const fields = formLogin.querySelectorAll('.input-box');

const checkFieldsNotEmpty = () => {
  let response = true;
  fields.forEach(item => {
    if (!item.value) {
      const error = generateError(item, ' Cannot be blank');
      console.error('Cannot be blank');
      response = error;
    }
  });
  return response;
};

const nameValidation = () => {
  const name = nameInput.value.split(' ');
  if (name.length === 2 && name.every(el => el.length >= 3)) {
    return true;
  } else {
    generateError(nameInput);
  }
};
const checkPasswordMatch = () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
    console.error('passwords are not equals');
    generateError(confirmPasswordInput, 'Password doesnt match');
    return false;
  } else {
    return true;
  }
};
const formLoginSubmit = () => {
  removeValidation();

  obj.name = nameInput.value;
  obj.email = mailInput.value;
  obj.password = passwordInput.value;
  obj.confirmPassword = confirmPasswordInput.value;

  const notEmpty = checkFieldsNotEmpty();
  const passwordMatch = checkPasswordMatch();
  const nameValid = nameValidation();

  const students = JSON.parse(localStorage.getItem('students')) || [];

  if (notEmpty && passwordMatch && nameValid) {
    if (obj.type === 'teacher') {
      localStorage.setItem('teacher', JSON.stringify(obj));
      saveToStorage(obj);
      window.location.href = 'teacher.html';
    } else {
      localStorage.setItem('students', JSON.stringify([obj, ...students]));
      saveToStorage(obj);
      window.location.href = 'student.html';
    }
  }
  clearForm();
};

btnClick(regBtn, wruBlockOpen);
btnClick(from3to2Btn, wruBlockOpen);
btnClick(from2to1Btn, wruBlockOpen);
btnClick(studentBackBtn, wruBlockOpen);
btnClick(from4to3Btn, wruBlockOpen);
btnClick(continueBtn, continueByType);
btnClick(from1to2Btn, continueByType);
btnClick(toLoginBtn, loginBlockOpen);
btnClick(continueStudentBtn, regBlockOpen);
btnClick(from4to5Btn, regBlockOpen);
btnClick(createAccountBtn, formLoginSubmit);
