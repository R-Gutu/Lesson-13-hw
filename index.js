var x = parseInt(prompt("Enter value of x",0) );
var n = parseInt(prompt("Enter value of n",0) );
var result = Math.pow (x , n);
var resultText = "Result of x = "+ x +"\t in power of n= " + n + "\t equals " + result;
var divElement = document.createElement('div');
divElement.className = "container";
divElement.innerHTML = resultText;
document.body.append(divElement);
alert("Result of x = "+ x +"\t in power of n= " + n + "\t equals " + result);