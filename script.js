const resultado = document.querySelector("#resultado")
const altura = document.querySelector("#altura")
const peso = document.querySelector("#peso")

const calculoIMC = () => {
    if(altura.value !== "" && peso.value !== ""){
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classificação = ""

        if (imc < 18.5){
            classificação = "ABAIXO DO PESO"
        } else if (imc < 25){
            classificação = "NORMAL"
        } else if(imc < 30){
            classificação = "SOBREPESO"
        } else if(imc < 35){
            classificação = "OBESIDADE GRAU 1"
        } else if(imc > 40){
            classificação = "OBESIDADE GRAU 2"
        } else{
            classificação = "OBESIDADE GRAU 3"
        }

        resultado.innerHTML = `IMC: ${imc} (${classificação})`
    } else{
        resultado.innerHTML = "Preencha os campos acima"
    }
}