function getArrayParams(...arr) {
  let min;
  let max;
  let avg;

  // Проверяем, что цикл завершился без выхода за границы массива
  if (arr.length === 0) {
    console.log('Массив пустой');
  }

  // Вызываем функцию getArrayParams для каждого элемента массива
  for (let i=0; i< arr.length; i++) {
    min = Math.min(...arr);
    max = Math.max(...arr);
    avg = max / arr.length;
  }

  return { min, max, avg };
}


function summElementsWorker(...arr) {
  let summElement = 0;

  for ( let i = 0; i < arr.length; i++ ) {
    summElement += arr[i]
  }


  if ( !arr.length  ) {
    return 0
  } else {
    return summElement
  }
}

function differenceMaxMinWorker(...arr) {
  let min;
  let max;

  min = Math.min(...arr);
  max = Math.max(...arr);

  if ( !arr.length  ) {
    return 0
  } else {
    return max - min;
  }
}

function differenceEvenOddWorker(...arr) {

  let evenSum = 0;
  let oddSum = 0;

  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] % 2 == 0 ) {
      evenSum += arr[i]
    }  else {
      oddSum += arr[i]
    }
  }
  if ( !arr.length  ) {
    return 0
  } else {
    return evenSum - oddSum;
  }
}

function averageEvenElementsWorker(...arr) {

  let evenSum = 0;
  let eventCount = 0;

  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] % 2 == 0 ) {
      evenSum += arr[i];
      eventCount ++
    }
  }

  if ( !arr.length  ) {
    return 0
  } else {
    return evenSum / eventCount
  }
}

function makeWork (arrOfArr, func) {

  let maximum = func(...arrOfArr[0]);

  for ( let i = 1; i < arrOfArr.length; i++  ) {
    const funcRes = func(...arrOfArr[i])
    if ( funcRes > maximum ) {
      maximum = funcRes;
    }
  }

  return maximum;
}

console.log(`\n# Задача 1.
Возвращение минимальное, максимальное и среднее арифметическое значений массива`);
console.log(getArrayParams(1, 2, 3, -100, 10));
console.log(`\n# Задача 2. Мясорубка`);
console.log("Сумма элементов массива: " + summElementsWorker(10, 10, 11, 20, 10));
console.log("Разница максимального и минимального элементов: " + differenceMaxMinWorker(10, 10, 11, 20, 10));
console.log("Разница сумм чётных и нечётных элементов: " + differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));
console.log("Среднее значение чётных элементов: " + averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72