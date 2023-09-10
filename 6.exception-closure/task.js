let parseCount = (parseValue) => {
    let resultParse = Number.parseFloat(parseValue)
    if ( Number.isNaN(resultParse)) {
        throw new Error ('Невалидное значение')
    }
    return Number.parseFloat (parseValue)
}
parseCount (33.3)

let validateCount = (parseValue) => {
    try {
        return parseCount(parseValue)
    } catch (e) {
        return e
    }
}
validateCount(3)

class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.p=(this.side1+this.side2+this.side3)/2;
        // this.heron = ().toFixed(3);
        if ( this.side1 > this.side2 + this.side3 ||
            this.side2 > this.side1 + this.side3 ||
            this.side3 > this.side1 + this.side2 ) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
    }
    get perimeter() {
        return this.side1 + this.side2 + this.side3
    }

    get area () {
        return Number((Math.sqrt(this.p*(this.p-this.side1)*(this.p-this.side2)*(this.p-this.side3))).toFixed(3))
    }
}

let getTriangle =(sideLength1, sideLength2, sideLength3 )=> {
    try {
        return new Triangle(sideLength1, sideLength2, sideLength3)
    }
    catch (e) {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует'
            },
            get area() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }
}

getTriangle(1,2,3)


