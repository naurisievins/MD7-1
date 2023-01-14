const btn1 = document.querySelector<HTMLElement>('.btn__1');
const btn2 = document.querySelector<HTMLElement>('.btn__2');
const btn3 = document.querySelector<HTMLElement>('.btn__3');
const btn4 = document.querySelector<HTMLElement>('.btn__4');
const btn5 = document.querySelector<HTMLElement>('.btn__5');
const btn6 = document.querySelector<HTMLElement>('.btn__6');
const btn7 = document.querySelector<HTMLElement>('.btn__7');

const box1 = document.querySelector<HTMLElement>('.box__1');
const box2 = document.querySelector<HTMLElement>('.box__2 .change_text');
const box3 = document.querySelector<HTMLElement>('.box__3');
const box4 = document.querySelector<HTMLElement>('.box__4');
const box5 = document.querySelector<HTMLElement>('.box__5');
const box6 = document.querySelector<HTMLElement>('.box__6 .timer1');
const allBoxes = document.querySelectorAll<HTMLElement>('.box');

const output = document.querySelector<HTMLElement>('.output');
const timer2 = document.querySelector<HTMLElement>('.timer2');
const inputField = document.querySelector<HTMLInputElement>('.input_field');

const colors: string[] = ['#0d1c03', '#2c401b', '#586f31', '#94a84b', '#e2ea69'];

const randomColor = (x: string[]) => {
  let res: string;
  res = x[Math.floor((Math.random() * x.length))];
  return res;
};

let interval:NodeJS.Timeout;
const startCounter = (x:number, y:HTMLElement) => {
  let counter = 1;
  y.innerHTML = String(counter);
  const count = () => {
    if (counter < 10) {
      counter++;
      y.innerHTML = String(counter);
    }
  };
  interval = setInterval(count, x);
};

btn1?.addEventListener('click', () => {
  box1.style.backgroundColor = '#E2CF22';
});

let box1CurrentColor:string;

box1?.addEventListener('mouseover', () => {
  box1CurrentColor = box1.style.backgroundColor;
  box1.style.backgroundColor = 'red';
});

box1?.addEventListener('mouseout', () => {
  box1.style.backgroundColor = box1CurrentColor;
});

btn2?.addEventListener('click', () => {
  box2.innerHTML = 'SUCCESS';
});

btn3?.addEventListener('click', () => {
  box3.style.setProperty('visibility', 'hidden');
});

btn4?.addEventListener('click', () => {
  if (box4.style.visibility === 'hidden') {
    box4.style.setProperty('visibility', 'visible');
  } else {
    box4.style.setProperty('visibility', 'hidden');
  }
});

btn5?.addEventListener('click', () => {
  box5.style.backgroundColor = randomColor(colors);
});

box5?.addEventListener('mouseover', () => {
  startCounter(1000, box5);
});

box5?.addEventListener('mouseout', () => {
  box5.innerHTML = '0';
  clearInterval(interval);
});

btn6?.addEventListener('click', () => {
  startCounter(3000, box6);
});

btn7?.addEventListener('click', () => {
  allBoxes.forEach(box => {
    box.style.backgroundColor = '#18D5E1';
  });
  document.body.style.backgroundColor = '#000000';
  output.style.color = 'white';
});

inputField?.addEventListener('input', () => {
  output.innerHTML = inputField.value;
});
