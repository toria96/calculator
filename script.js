function plus () {
    let number1;
    let number2;
    let result;

number1 = document.getElementById('num1').value;
number1=parseInt (number1);

number2= document.getElementById('num2').value;
number2=parseInt (number2);

result = number1+number2;

document.getElementById ('out'). innerHTML = result;

}
