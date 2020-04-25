
const cube = () => {
    let num = +prompt(`Input number`);
    alert(num ** 3);
}


const threeDigits = () => {
    let num1 = +prompt(`Input number 1`);
    let num2 = +prompt(`Input number 2`);
    let num3 = +prompt(`Input number 3`);
    alert(`(${num1} + ${num2}) / ${num3} = ${(num1 + num2) / num3}`);

}
const dayName = () => {
    let day = +prompt(`Input number from 1 to 7`);
    let week = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    alert(week[day - 1]);

}

const factorial = () => {
    let num = +prompt(`Input integer number`);
    let result = 1;

    const calc = (x) => {
        return x === 1 ? x : x * calc(x - 1);
    }
    result = calc(num);

    // for (let i = 1; i <= num; i++) {
    //     result *= i;
    // }
    alert(result);
}

const seconds = () => {
    let hours = +prompt(`Input hours`);
    let minutes = +prompt(`Input minutes`);
    let seconds = +prompt(`Input seconds`);
    alert(`You got ${hours * 3600 + minutes * 60 + seconds} seconds`);

}

const time = () => {
    let totalSeconds = +prompt(`Input seconds`);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = (totalSeconds % 3600) % 60;
    if (hours === 24 && minutes === 0 && seconds === 0) {
        alert(`Рівно одна доба`);
    } else if (hours >= 24) {
        alert(`Більше однієї доби`);
    } else {
        alert(`${hours}:${minutes}:${seconds}`);
    }

}

const difference = () => {
    alert(`Cтрілочні функції:
    1. Не мають this.
    2. Мають коротший синтаксис.
    3. Не піддаються hoisting-у.
    4. Не мають arguments.
    5. Не можуть бути викликані з new.
    6. Не мають super.`)
}