const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const NUM1 = prompt("첫번째 수를 입력하세요");
const NUM2 = prompt("두번째 수를 입력하세요");

document.write(
  `${NUM1} + ${NUM2} = ${add(NUM1 * 1, NUM2 * 1)} <br/>
            ${NUM1} - ${NUM2} = ${sub(NUM1, NUM2)} <br/>
            ${NUM1} * ${NUM2} = ${mul(NUM1, NUM2)} <br/>
            ${NUM1} / ${NUM2} = ${div(NUM1, NUM2)} `
);
