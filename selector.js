function calculateSum(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var sum = num1 + num2;
    document.getElementById('result').innerText = 'Sum: ' + sum;
}

function change(){
    const target=document.getElementById("random")
    if(target.style.backgroundColor="red");
    target.style.backgroundColor="blue";
    else
    target.style.backgroundColor="red";
}