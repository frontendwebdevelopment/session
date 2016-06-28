function outer(num1,num2) {
	var res = num1 * num2;
  function inner(num1,num2) {
  	var num3 = 25;
	var z = num1 + num2;
  	alert(z);
  }
  inner(25,10);
  alert(res);
}
outer(10,5);
alert("undefined num3 outside inner function");
alert(num3);