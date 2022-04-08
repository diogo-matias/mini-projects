const calculate = document.getElementById("calculate");

function bmi() {
  const name = document.getElementById("name").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;

  const result = document.getElementById("result");

  if (name !== "" && altura !== "" && peso !== "") {
    var bmi_valor = (peso / (altura * altura)).toFixed(2);

    let classification;
    if (bmi_valor < 18.5) {
      classification = "Abaixo do peso.";
      console.log(classification);
    } else if (bmi_valor < 24.9) {
      classification = "Peso ideal!!";
      console.log(classification);
    } else if (bmi_valor < 29.9) {
      classification = "com Sobrepeso.";
      console.log(classification);
    } else if (bmi_valor >= 29.9) {
      classification = "com Obesidade.";
      console.log(classification);
    } else {
    }

    result.textContent = `${name}, seu IMC é ${bmi_valor} e vocé está ${classification}`;
  } else {
    result.textContent = "Preencha todos os valores!as";
  }
}

calculate.addEventListener("click", bmi);
