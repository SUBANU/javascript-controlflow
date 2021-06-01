const number=Math.random()*10;
const floor=Math.floor(number);
console.log(floor);

if(floor%2==0&&floor!=0)
{
    console.log("Even");
}
    
else if(floor==0)
{
    console.log("Zero");
}

else
{
    console.log("Odd")
}

let i;
for(i=0;i<=10;i++)
{
    console.log(i);
}

let s=1;
while(s<9)
{
    console.log(s);
    s++;
}
let k=floor;
switch(k)
{
case 5:
    console.log("Buzz");
    break;
 case 0:
    console.log("Zero");
    break;  
default:
    console.log("Fizz");
    break;
}

for(let j=0;j<10;j++)
{
    if(j==7)
    {
    continue;
    }
    console.log(j);
}
function name()
{
    console.log("i am SUBANU");
}
name()

function members(fname,lname)
{
    Name=fname+lname;
   console.log(Name);
}
members("SUBANU ","KJY")
