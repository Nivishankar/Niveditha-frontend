var marks=64;
marks=marks>90?"A":marks>70?"B":marks>50?"C":marks>30?'D':"fail";
console.log(marks);

function test(a)
{
    return a;
}
console.log(test("hi"));




let datenum=4;
switch(datenum)
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
         console.log("Monday");
        break;

    case 3:
        console.log("Tueday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;

}


let prom=new Promise()
console.log(prom);