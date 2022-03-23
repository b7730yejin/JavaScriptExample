//구구단을 출력해주는 함수를 만듬
function gugudan_print() {
  let input = null;
  while (true) {
    input = prompt("보고싶은 단을 입력하세요", "all은 모든 단 출력");
    if (input < 2 || input > 9) {
      alert("2~9사이의 수를 입력해주세요!");
    } else {
      break;
    }
  }

  if (input == "all") {
    for (let i = 2; i <= 9; i++) {
      document.write(`<h3> ${i}단 출력 </h3>`);
      for (let j = 1; j <= 9; j++)
        document.write(`${i} * ${j} = ${i * j} <br/>`);
      document.write("<br/>");
    }
  } else {
    document.write(`<h3> ${input}단 출력 </h3>`);
    for (let i = 1; i <= 9; i++)
      document.write(`${input} * ${i} = ${input * i} <br/>`);
    document.write("<br/>");
  }
}
gugudan_print();
