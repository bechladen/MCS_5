/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

function getRectArea(dimensions) {
  const valuesArr = dimensions.split(' ');
  return Number(valuesArr[0]) * Number(valuesArr[1]);
}

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл,
? який для кожного елемента масиву буде виводити в консоль повідомлення у
? форматі <номер елемента> - <значення елемента>. Нумерація елементів
? повинна починатися з 1.
?
? Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
? індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

function logItems() {
  for (let i = 0; i < arguments.length; i += 1) {
    console.log(`${i + 1} - ${arguments[i]}`);
  }
}

// logItems('Mango', 'Poly', 'Ajax');
// logItems('🍎', '🍇', '🍑', '🍌', '🍋');

/*
? Напиши функцію printInfo(names, phones) яка виводить
? у консоль ім'я та телефонний номер користувача. У параметри
? names та phones будуть передані рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках
? вказують на відповідність. Кількість імен та телефонів
? гарантовано однакова.
*/

function printInfo(names, phones) {
  const namesArr = names.split(',');
  const phonesArr = phones.split(',');

  for (let i = 0; i < namesArr.length; i += 1) {
    console.log(`${namesArr[i]} - ${phonesArr[i]}`);
  }
}

// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/*
? Напиши функцію formatTime(minutes) яка переведе значення
? minutes (кількість хвилин) у рядок у форматі годин
? та хвилин HH:MM.
*/

//? Форматування рядка за допомогою конструкція if(){}

// function formatTime(totalMinutes) {
//   const addZero = function (value) {
//     // if (value < 10) {
//     //   return `0${value}`;
//     // } else {
//     //   return value;
//     // }

//     return value < 10 ? `0${value}` : String(value);
//   };

//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   //* variant 1
//   //   let formattedHours = String(hours);
//   //   let formattedMinutes = String(minutes);

//   //   if (hours < 10) {
//   //     formattedHours = `0${formattedHours}`;
//   //   }

//   //   if (minutes < 10) {
//   //     formattedMinutes = `0${formattedMinutes}`;
//   //   }

//   //   return `${formattedHours}:${formattedMinutes}`;

//   //* variant 2

//   let formattedHours = addZero(hours);
//   let formattedMinutes = addZero(minutes);

//   return `${formattedHours}:${formattedMinutes}`;
// }

// console.log(formatTime(79)); // "01:19"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// console.log(formatTime(4638)); // "77:18"

//? Форматування рядка за допомогою методу padStart().

// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
//     2,
//     '0'
//   )}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(courseName) - додає курс в кінець колекції
? removeCourse(courseName) - видаляє курс з колекції
? updateCourse(oldCourseName, newCourseName) - змінює назву курса
*/

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(courseName) {
  if (courses.includes(courseName)) {
    console.error(`${courseName} вже існує у списку курсів!`);
    return;
  }
  courses.push(courseName);
}

function removeCourse(courseName) {
  const indexToDelete = courses.indexOf(courseName);

  if (indexToDelete === -1) {
    console.error(`Курсу ${courseName} не існує у списку курсів!`);
    return;
  }

  courses.splice(indexToDelete, 1);
}

function updateCourse(oldCourseName, newCourseName) {
  const indexToUpdate = courses.indexOf(oldCourseName);

  if (indexToUpdate === -1) {
    console.error(`Курсу ${oldCourseName} не існує у списку курсів!`);
    return;
  }

  courses.splice(indexToUpdate, 1, newCourseName);
}

// console.log(courses);

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('React'); // 'Курс з такою назвою не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

/*
? Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
? В параметр letter будуть передавати рядок із однією літерою.
? Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

function checkCaseOfLetter(letter) {
  return letter === letter.toLowerCase() ? 'lower case' : 'upper case';
}

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
? Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
? В параметр str будуть передавати рядок.
*/

function changeCaseOfLetters(str) {
  //* variant 1
  //   const arrOfChars = str.split('');
  //   let resultStr = '';

  //   for (const char of arrOfChars) {
  //     // if (checkCaseOfLetter(char) === 'lower case') {
  //     //   resultStr += char.toUpperCase();
  //     // } else {
  //     //   resultStr += char.toLowerCase();
  //     // }

  //     resultStr +=
  //       checkCaseOfLetter(char) === 'lower case'
  //         ? char.toUpperCase()
  //         : char.toLowerCase();
  //   }

  //   return resultStr;

  //* variant 2
  let resultStr = '';

  for (let i = 0; i < str.length; i += 1) {
    resultStr +=
      checkCaseOfLetter(str[i]) === 'lower case'
        ? str[i].toUpperCase()
        : str[i].toLowerCase();
  }

  return resultStr;
}

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba
