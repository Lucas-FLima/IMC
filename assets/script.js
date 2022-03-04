const c = document.querySelector;
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

function calcular() {
  parseFloat(peso.value);
  parseFloat(altura.value);
  if (
    peso.value == "" ||
    altura.value == "" ||
    peso.value == 0 ||
    altura.value == 0
  ) {
    alert("Preencha todos os campos e sem uso de valores nulos!");
  } else {
    if (altura.value >= 3) {
      alert(
        "Preencha o campo altura usando como separador o ponto (.) ou a vírgula (,)!"
      );
    } 
    else {
      const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
      const idealPesoMax = ((24.9 * Math.pow(altura.value, 2)).toFixed(2));
      const idealPesoMin = ((18.5 * Math.pow(altura.value, 2)).toFixed(2));
      document.querySelector(".result").style.display = "flex";
      document.querySelector(
        ".result .imc"
      ).innerHTML = `<h3>Seu IMC é de ${imc} kg/m<sup>2</sup></h3>`;
      switch (true) {
        case imc < 18.5:
          document.querySelector(".result .classifc").innerHTML = `<h3>Magreza</h3>`;
          document.querySelector(".result .dado").innerHTML = `<p>Quando o resultado é menor que 18,5 kg/m<sup>2</sup></p>`;
          break;
        case imc >= 18.5 && imc < 24.9:
          document.querySelector(".result .classifc").innerHTML = `<h3>Normal</h3>`;
          document.querySelector(".result .classifc h3").classList.add("colorize-classifc");
          document.querySelector(".result .dado").innerHTML = `<p>Quando o resultado está entre que 18,5 e abaixo de 24.9kg/m<sup>2</sup></p>`;
          break;
        case imc > 24.9 && imc <= 29.9:
          document.querySelector(".result .classifc").innerHTML = `<h3>Sobrepeso</h3>`;
          document.querySelector(".result .dado").innerHTML = `<p>Quando o resultado está entre que 24.9 e abaixo de 30kg/m<sup>2</sup></p>`;
          break;
        case imc > 29.9 && imc <= 34.9:
          document.querySelector(".result .classifc").innerHTML = `<h3>Obesidade de Classe 1</h3>`;
          document.querySelector(".result .dado").innerHTML = `<p>Quando o resultado está entre que 30 e abaixo de 34.9kg/m<sup>2</sup></p>`;
          break;
        case imc > 34.9 && imc <= 39.9:
          document.querySelector(".result .classifc").innerHTML = `<h3>Obesidade de Classe 2</h3>`;
          document.querySelector(".result .dado").innerHTML = `<p>Quando o resultado está entre que 34.9 e abaixo de 39.9kg/m<sup>2</sup></p>`;
          break;
        default:
          document.querySelector(".result .classifc").innerHTML = `<h3>Obesidade de Classe 3</h3>`;
          document.querySelector(".result .dado").innerHTML = `<p>Quando o resultado está acima de 40kg/m<sup>2</sup></p>`;
      }
        document.querySelector('.ideal_peso').innerHTML = `<p>Seu peso ideal está entre ${idealPesoMin}kg e ${idealPesoMax}kg</p>`;
    }
  }
}

function reset() {
  peso.value = "";
  altura.value = "";
  document.querySelector(".result").style.display = "none";
  if (
    document
      .querySelector(".result .classifc h3")
      .classList.contains("colorize-classifc")
  ) {
    document
      .querySelector(".result .classifc h3")
      .classList.remove("colorize-classifc");
  }
}
