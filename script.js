// function plus(){
//     var num1,num2,result;
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);//darcnum e togh@ tiv 

//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//     result = num1 + num2;
//     document.getElementById('answer').innerHTML = result;
// }

// function minus(){
//     let num1,num2,result;
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);//darcnum e togh@ tiv 

//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//     result=num1-num2;

//     document.getElementById('answer').innerHTML = result;
    
// }

// function multiply(){
//     let num1,num2,result;
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);//darcnum e togh@ tiv 

//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//     result=num1*num2;

//     document.getElementById('answer').innerHTML = result;
    
// }

let clear = document.getElementById("clear");
    one =  document.getElementById('one');
    two = document.getElementById('two');
    three= document.getElementById('three');
    four= document.getElementById('four');
    five = document.getElementById('five');
    six =  document.getElementById('six');
    seven =  document.getElementById('seven');
    eight = document.getElementById('eight');
    nine = document.getElementById('nine');
    zero = document.getElementById('zero');
    plus = document.getElementById('plus');
    minus = document.getElementById('minus');
    multiply =  document.getElementById('multiply');
    divide =  document.getElementById('divide');
    equally =  document.getElementById('equally');
    input =  document.getElementById('n1');
    
    clear.addEventListener('click',function(event){
        input.value = "";
    });
    one.addEventListener('click',function(event){
        input.value += 1;
    });
    two.addEventListener('click',function(event){
        input.value += 2;
    });
    three.addEventListener('click',function(event){
        input.value += 3;
    });
    four.addEventListener('click',function(event){
        input.value += 4;
    });
    five.addEventListener('click',function(event){
        input.value += 5;
    });
    six.addEventListener('click',function(event){
        input.value += 6;
    });
    seven.addEventListener('click',function(event){
        input.value += 7;
    });
    eight.addEventListener('click',function(event){
        input.value += 8;
    });
    nine.addEventListener('click',function(event){
        input.value += 9;
    });
    zero.addEventListener('click',function(event){
        input.value += 0;
    });
    plus.addEventListener('click',function(event){
        input.value += "+";
    });
    minus.addEventListener('click',function(event){
        input.value += "-";
    });
    multiply.addEventListener('click',function(event){
        input.value += "*";
    });
    divide.addEventListener('click',function(event){
        input.value += "/";
    });
    equally.addEventListener('click',function(event){
        let result = eval(input.value);
        input.value = result;
    });
    


