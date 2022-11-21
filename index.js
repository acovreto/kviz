const quizData = [
  // {
  //   question: "Which language runs in a web browser?",
  //   a: "Java",
  //   b: "C",
  //   c: "Python",
  //   d: "JavaScript",
  //   correct: "d",
  // },
  // {
  //   question: "What does CSS stand for?",
  //   a: "Central Style Sheets",
  //   b: "Cascading Style Sheets",
  //   c: "Cascading Simple Sheets",
  //   d: "Cars SUVs Sailboats",
  //   correct: "b",
  // },
  // {
  //   question: "What does HTML stand for?",
  //   a: "Hypertext Markup Language",
  //   b: "Hypertext Markdown Language",
  //   c: "Hyperloop Machine Language",
  //   d: "Helicopters Terminals Motorboats Lamborginis",
  //   correct: "a",
  // },
  // {
  //   question: "Which tag contain information about web page",
  //   a: "<html>",
  //   b: "<body>",
  //   c: "<head>",
  //   d: "<info>",
  //   correct: "c",
  // },
  // {
  //   question: "Where is placed '<title>' element ?",
  //   a: "In body",
  //   b: "In head",
  //   c: "Nowhere",
  //   d: "There is no such element",
  //   correct: "b",
  // },
  // {
  //   question:
  //     "Which attribute is responsible for the image’s text, if image url can't be found?",
  //   a: "href",
  //   b: "src",
  //   c: "alt",
  //   d: "width",
  //   correct: "c",
  // },
  // {
  //   question:
  //     "Do you guys remember the tag responsible for the smallest heading?",
  //   a: "h5",
  //   b: "h7",
  //   c: "heading",
  //   d: "h6",
  //   correct: "d",
  // },
  // {
  //   question: "What does the href attribute contains?",
  //   a: "The link/URL of the new web page to be linked",
  //   b: "Just the name of the page",
  //   c: "Browser’s name",
  //   d: "Anything that’s blue",
  //   correct: "a",
  // },
  // {
  //   question:
  //     "Which property of the Style attribute lets you add background color to the text?",
  //   a: "<div style=”bg:blue”>",
  //   b: "<div style=”color:blue”>",
  //   c: "<div style=”background-color:blue”>",
  //   d: "<div style=”bground:blue”>",
  //   correct: "c",
  // },
  // {
  //   question:
  //     "2 or more properties in a style attribute are separated by which one of these?",
  //   a: ";(semicolon)",
  //   b: ",(Comma)",
  //   c: ":(Colon)",
  //   d: "!(Exclamation mark)",
  //   correct: "a",
  // },
  // {
  //   question: "Which one in not self closing tag",
  //   a: "<a>",
  //   b: "<br>",
  //   c: "<hr>",
  //   d: "<img>",
  //   correct: "a",
  // },
  // {
  //   question: "Using one HTML tag inside the other was termed as?",
  //   a: "Fasting",
  //   b: "Mind Blasting",
  //   c: "Testing",
  //   d: "Nesting",
  //   correct: "d",
  // },
  // {
  //   question:
  //     "Which tag, and attributes, were used to introduce the image on page?",
  //   a: "<img>, src, width",
  //   b: "<picture>",
  //   c: "<src>",
  //   d: "<image>",
  //   correct: "a",
  // },
  // {
  //   question: "Which tag helped us in adding hyperlink to the webpage?",

  //   a: "<p>, style",
  //   b: "<a>, href",
  //   c: "title>, src",
  //   d: "<img>, src, width",

  //   correct: "b",
  // },
  // {
  //   question: "Html comment should be enclosed between",
  //   a: "<!-- and -- >",
  //   b: "<! and !>",
  //   c: "<!- and ->",
  //   d: "<--and -->",
  //   correct: "a",
  // },
  {
    question: "Што е CNC?",
    a: "Машина управувана со рачни команди",
    b: "Машина управувана со мобилен телефон",
    c: "Комјутерски управувана машина",
    d: "Самоуправувана машина",
    correct: "c",
  },
  {
    question: "Што значи кратенката CNC?",
    a: "Computer network control",
    b: "Computer numeric computation",
    c: "Computer name compilation",
    d: "Computer numeric control",
    correct: "d",
  },

  {
    question: "Што е погршно?",
    a: "ЦНЦ шлајферица",
    b: "ЦНЦ струг",
    c: "ЦНЦ секач",
    d: "ЦНЦ глодалка",
    correct: "a",
  },
  {
    question: "Што е погршно?",
    a: "ЦНЦ секач со воден млаз",
    b: "ЦНЦ плазма секач",
    c: "ЦНЦ ласер секач",
    d: "ЦНЦ лцд секач",
    correct: "d",
  },
  {
    question: "Што не е ЦНЦ?",
    a: "Струг",
    b: "Бургија",
    c: "Глодалка",
    d: "Секач",
    correct: "b",
  },
  {
    question: "Кој програмски јазик го разбира ЦНЦ машината?",
    a: "A-код",
    b: "B-код",
    c: "G-код",
    d: "C-kod",
    correct: "c",
  },

  {
    question: "Што e Raspberry Pi?",
    a: "Калкулатор",
    b: "Електричен тротинет",
    c: "Мал компјутер",
    d: "Цнц машина",
    correct: "c",
  },
  {
    question: "Кој модел на Raspberry Pi не постои?",
    a: "Raspberry Pi 1",
    b: "Raspberry Pi uno",
    c: "Raspberry Pi 3",
    d: "Raspberry Pi zero",
    correct: "b",
  },
  {
    question: "Raspberry Pi нема:",
    a: "Влезно/излезни порти",
    b: "Меморија",
    c: "Процесор",
    d: "Влезно/Излезни уреди",
    correct: "d",
  },

  {
    question: "Како работи ЦНЦ струг?",
    a: "Алатот ротира",
    b: "Производот или делот ротира",
    c: "Двата ротираат",
    d: "Производот не ротира туку се приближува до алатот",
    correct: "b",
  },
  {
    question: "Како работи ЦНЦ глодалка?",
    a: "Алатот ротира",
    b: "Производот или делот ротира",
    c: "Двата ротираат",
    d: "Производот не ротира туку се приближува до алатот",
    correct: "a",
  },
  {
    question: "Што значи CAD?",
    a: "Computer aided design",
    b: "Connection aided drawing",
    c: "Computer manufacturing design",
    d: "Computer aided Machining ",
    correct: "a",
  },
  {
    question: "Што значи CAM?",
    a: "Computer aided making",
    b: "Computer aided manufacturing",
    c: "Computer aided mathematics",
    d: "Computer aided mastering ",
    correct: "b",
  },
  {
    question: "Што прави CAD software?",
    a: "G-code for cnc mashine",
    b: "F-code for cnc mashine",
    c: "Creates 2D, 2.5D or 3D designs",
    d: "Creates 3D printing",
    correct: "c",
  },
];
const prvo_1 = `1. Влавчески Благоја
2. Илоска Злата
3. Илоска Јана
4. Илоска Сара
5. Јанески Мартин
6. Јанески Михаил
7. Јовановски Петар
8. Карајованоски Матеј
9. Митрески Стефан
10. Ончев Никола
11. Паришовски-Мишевски Благојче
12. Радески Давид
13. Размоски Дамјан
14. Секулоски Ненад
15. Софкоски Славе
16. Тасески Давид
17. Тасиќ Марија
18. Чорбески Филип`;
const prvo_3 = `1. Богојовски Благоја
2. Брдароска Марија
3. Гугоски Филип
4. Димиќ Лука
5. Донев Стефан
6. Донески Филип
7. Ѓорески Климент
8. Јанески Виктор
9. Јованоски Бојан
10. Јованчев Андреј
11. Јоноска Кети
12. Каланоски Владимир
13. Крстаноски Дарко
14. Кузманоска Јана
15. Мајкиќ Мартин
16. Маркоски Марио
17. Мешкоски Андреј
18. Митревски Христијан
19. Мургоски Славчо
20. Мурџоски Борјан
21. Новаков Павел
22. Палоски Бојан
23. Попоски Марко
24. Ристевски Мартин
25. Савиќ Андреа
26. Стевановски Стефан
27. Стојаноски Александар
28. Тасеска Мелани
29. Тодороски Лука
30. Толески Борис
31. Трифуноски Кристијан
32. Трпески Бојан`;
function shuffleArray(array) {
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}

function checkAnswer(e) {
  if (e.target.textContent[0] == quizData[curentQuestion].correct) {
    e.target.style.backgroundColor = "green";
    e.target.style.color = "white";
    scoreEl.textContent = Number(scoreEl.textContent) + 1;
  } else {
    e.target.style.backgroundColor = "red";
    e.target.style.color = "white";
  }
  answers.forEach((answer) => answer.removeEventListener("click", checkAnswer));
}

function nextFunc() {
  curentQuestion++;
  if (curentQuestion == quizData.length) {
    curentQuestion = 0;
    scoreEl.textContent = 0;
    questionCount.textContent = 0;
    shuffleArray(quizData);
  }
  init();
}
function listaUcenici(lista) {
  let listaUcenici = lista.split("\n");
  let html = ``;
  listaUcenici.forEach((ucenik) => {
    html = `<li>${ucenik}</li>`;
    ol.insertAdjacentHTML("beforeend", html);
  });
}
function init() {
  answers.forEach((answer) => {
    answer.style.backgroundColor = "white";
    answer.style.color = "black";
    answer.style.fontSize = "1.2rem";
  });
  questionCount.textContent = Number(questionCount.textContent) + 1;
  questionEl.textContent = quizData[curentQuestion].question;
  answers[0].textContent = `a) ${quizData[curentQuestion].a}`;
  answers[1].textContent = `b) ${quizData[curentQuestion].b}`;
  answers[2].textContent = `c) ${quizData[curentQuestion].c}`;
  answers[3].textContent = `d) ${quizData[curentQuestion].d}`;
  answers.forEach((answer) => answer.addEventListener("click", checkAnswer));
}
let quizLenth = quizData.length;
let curentQuestion = 0;
const questionEl = document.querySelector(".question");
const answers = document.querySelectorAll(".answer");
const scoreEl = document.querySelector(".score-count");
const questionCount = document.querySelector(".question-count");
const allQuestionsEl = document.querySelector(".all-questions");
const ol = document.querySelector("ol");
const start = document.querySelector(".start");
const finish = document.querySelector(".finish");

allQuestionsEl.textContent = quizLenth;

listaUcenici(prvo_3);
start.addEventListener("click", (e) => {
  e.preventDefault();
  curentQuestion = 0;
  scoreEl.textContent = 0;
  questionCount.textContent = 0;
  shuffleArray(quizData);
  init();
});
finish.addEventListener("click", (e) => {
  e.preventDefault();
  questionEl.textContent = `Ученикото дговори точно на ${scoreEl.textContent} од ${questionCount.textContent}`;
});
