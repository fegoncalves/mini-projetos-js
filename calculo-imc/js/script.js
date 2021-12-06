document.getElementById('calcularIMC').addEventListener('click', imc);

function imc() {
  const vnome = document.getElementById('nome').value;
  const valtura = document.getElementById('altura').value;
  const vpeso = document.getElementById('peso').value;

  const calculoIMC = (vpeso / (valtura * valtura)).toFixed(1);

    let mensagem; 

    
    if (calculoIMC <= 18.5) {
      mensagem = "Você está abaixo do peso! A recomendação é que você consulte um nutricionista!";
    }
    else if (calculoIMC >= 18.6 && calculoIMC < 25) {
      mensagem = "Parabéns! Você está com o peso Ideal!";
    }
    else if (calculoIMC >= 25 && calculoIMC < 30) {
      mensagem = "Cuidado! Você está um pouco acima do peso. Consulte um nutricionista!";
    }
    else if (calculoIMC >= 30) {
      mensagem = "Atenção! O índice é de obesidade. Consulte o quanto antes um nutricionista!";
    }

  
    
  const text = `${vnome}, o resultado do seu IMC é ${calculoIMC} kg/m2.  ${mensagem}`;  

  if (valtura == "") {
    alert ("Por favor preencha o campo com a sua altura");
  } else if (vpeso == "") {
    alert ("Por favor preencha o campo com o seu peso");
  } else {
    document.getElementById("mostraResultadoIMC").innerHTML = text;
  }
}