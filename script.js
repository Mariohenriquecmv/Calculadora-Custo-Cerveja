
// definir variaveis
const calcButton = document.getElementById("calc-button")
calcButton.addEventListener("click",function(){
    console.log("click")
    // pegar valor da cerveja e dividir pelo ṕreço
    const beer1volume = document.getElementById("quant1").value
    const beer1price = document.getElementById("price1").value.replace(",",".");
    
    const calcbeer1 = (parseFloat(beer1price) / parseFloat(beer1volume) * 1000).toFixed(2)

    // pegar valor da cerveja 2 e dividir pelo ṕreço
    const beer2volume = document.getElementById("quant2").value
    const beer2price = document.getElementById("price2").value.replace(",",".");
    

    const calcbeer2 = (parseFloat(beer2price) / parseFloat(beer2volume) * 1000).toFixed(2)

    const result = document.getElementById("result")
    result.innerText = "O litro da cerveja 1 está custando " + calcbeer1 + " e o litro da cerveja 2 está custando " + calcbeer2
    console.log(calcbeer1)
    console.log(calcbeer2)
    })
