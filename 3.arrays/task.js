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

function getUsersNamesInAgeRange(users, gender) {

}

compareArrays ([8, 7, 2], [8, 1, 2])



