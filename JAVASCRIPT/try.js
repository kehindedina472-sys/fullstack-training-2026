// assignment solution

const score = 39; // F

switch (true) {
case score >=80:
    console.log( "your score is $(score), so you got A");
    break;

case score >=60:
    console.log( "your score is $(score), so you got B");
    break;
    
case score >=40:
    console.log( "your score is $(score), so you got C");
    break;

case score >=20:
    console.log( "your score is $(score), so you got D");
    break;

   default:
    console.log("your score is $(score), so you need to see me!");
    break;
}