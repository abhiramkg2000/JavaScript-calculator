function fetch(value)
{
    document.getElementById("screen").value+=value
}
function display(){
    var text=document.getElementById("screen").value
    var result=eval(text);
    document.getElementById("screen").value=result;
}
function clearDisplay(){
    document.getElementById("screen").value=""
}