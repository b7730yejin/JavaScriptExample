const checkOdd = (number) => {
  let result = null;
  if (number % 2) result = number + "는 홀수입니다.<br/>";
  else result = number + "는 짝수입니다.<br/>";

  return result;
};
const number = prompt("숫자를 입력해주세요!");
document.write(checkOdd(number));
