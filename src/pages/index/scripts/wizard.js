console.log('wizard');

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
  student.checked ? studentFormOpen() : regBlockOpen();
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
