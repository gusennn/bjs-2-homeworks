function compareArrays(arr1, arr2) {

    if ( arr1.length !== arr2.length ) {
        return console.log('разные значения массива');
    }

    const compareState = arr1.every((thisElement, ind) => thisElement === arr2[ind]);
    if ( compareState ) {
        console.log(compareState);
    } else  {
        console.log(compareState + ', разные индексы, хотя и одинаковые значения');
    }
}

compareArrays ([8, 7, 2], [8, 1, 2])



const people = [
    {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
    {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
    {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
    {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
    {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
    {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
    {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
    {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
    {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
    {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
    {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
    {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
    {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
    {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
]

function getUsersNamesInAgeRange(users, gender) {

    console.log('\nФильтр по полу и  возрасту: ');
    let filterPeoplesAge = users.filter( ageFilter => ageFilter.gender === gender)
                                .map( peopleAge => peopleAge.firstName + ': ' + peopleAge.age)
    console.log(filterPeoplesAge);

    console.log('\nСредний возраст: ');
    let ageAvg = users.filter ( genderItem => genderItem.gender === gender )
                        .map( getAge => getAge.age )
                        .reduce( (acc, item)=> acc + item)+1;
    console.log(ageAvg);
}

console.log(getUsersNamesInAgeRange(people, "мужской"));

