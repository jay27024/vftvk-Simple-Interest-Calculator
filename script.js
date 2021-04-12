function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    result=getElementById("result");
    result.innerHTML= "Interest is" + (p*y*r/100); 
    var d= new Date
    var n= d.getFullYear()
}
    
{   var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var date = new Date();
    var thisYear = date.getFullYear();
    var futureYear = thisYear + Number(years);
    var result = document.getElementById("result");
    output = "If you deposit" + principal + "at an interest rate of" + rate +
            + "You will receive an amount of" + interest + "in the year" + futureYear;
    result.innerHTML = output;
    function myrate(r)
}

        