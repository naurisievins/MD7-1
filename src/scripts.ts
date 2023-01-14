const btn1 = document.querySelector<HTMLElement>('.btn__1');
const btn2 = document.querySelector<HTMLElement>('.btn__2');
const btn3 = document.querySelector<HTMLElement>('.btn__3');
const btn4 = document.querySelector<HTMLElement>('.btn__4');
const btn5 = document.querySelector<HTMLElement>('.btn__5');
const btn6 = document.querySelector<HTMLElement>('.btn__6');

const box1 = document.querySelector<HTMLElement>('.box__1');
const box2 = document.querySelector<HTMLElement>('.box__2 .change_text');
const box3 = document.querySelector<HTMLElement>('.box__3');
const box4 = document.querySelector<HTMLElement>('.box__4');
const box5 = document.querySelector<HTMLElement>('.box__5');
const box6 = document.querySelector<HTMLElement>('.box__6 .timer1');

const colors: string[] = ['#0d1c03', '#2c401b', '#586f31', '#94a84b', '#e2ea69'];

const randomColor = (x: string[]) => {
  let res: string;
  res = x[Math.floor((Math.random() * x.length))];
  return res;
};

const startCounter = () => {
  let counter = 1;
  box6.innerHTML = String(counter);

  const count = () => {
    if (counter < 10) {
      counter++;
      box6.innerHTML = String(counter);
    }
  };
  setInterval(count, 3000);
};

btn1?.addEventListener('click', () => {
  box1.style.backgroundColor = '#E2CF22';
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

btn6?.addEventListener('click', () => {
  startCounter();
});
