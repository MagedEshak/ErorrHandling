let firstNumber = document.getElementById("numOne");
let secondNumber = document.getElementById("numTwo");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    try {
        let result = divide(Number(firstNumber.value), Number(secondNumber.value));
        document.querySelector("#result > span").innerText = result;
    } catch (error) {
        document.querySelector("#result > span").innerText = `<< ${error} >>`;
    }
});

function divide(num1,num2) {
    if (num2 == 0) {
        throw new Error("Cant't divide Zero");
    }
    return num1 / num2;
}