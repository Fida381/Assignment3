let a= "";
let numb3="";
let op="";
let b="";
function numbers(num)
{
    a= a + num;
    document.getElementById('numb').value=a;
    function numbers(num) {
        if (op === '') { // First number
            a = a + num;
        } else { // Second number
            a = num;
            op = ''; // Reset operator
        }
        document.getElementById('numb').value = a;
    }
}

function operator(ope)
{
    op= ope;
    document.getElementById('numb').value=op;
    b=parseFloat(a);
    a="";
}
function equall()
{
    if(op === '+')
{
    numb3= b + parseFloat (a);
}
else if(op === '-')
{
    numb3= b-  parseFloat (a);
}
else if(op === '*')
{
    numb3= b * parseFloat (a);
}
else if(op === '/')
{
    numb3=b / parseFloat (a);
}
a = numb3.toString();
    document.getElementById('numb').value= numb3 
}

    function clearInput()
 {
        document.getElementById('numb').value = "";
        a = "";
        b = "";
        numb3 = "";
        op = "";
    }
