function.getElementById("Calculate").addEventListener("click",function()
{
    var num1 = this.document.getElementById("num1").value;
    var num2 = this.document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "S" +sum;
});
function.getElementById("AA").addEventListener("click",function()
{
    var num1 = this.document.getElementById("num1").value;
    var num2 = this.document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML = "S" +sum;
});
function.getElementById("C").addEventListener("click",function()
{
    var num1 = this.document.getElementById("num1").value;
    var num2 = this.document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML = "S" +sum;
});
function.getElementById("T").addEventListener("click",function()
{
    var num1 = this.document.getElementById("num1").value;
    var num2 = this.document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML = "S" +sum;
});

function myalert(){
    Alert(olo)

}

function Calculate1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    alert(innerHTML = "SUM : " +sum);
};