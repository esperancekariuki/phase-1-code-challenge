const prompt = require("prompt-sync")();
let studentScore =prompt("Enter students score  ? \n");
function grading(studentScore){
console.log("student's score is : " + studentScore);
if (studentScore >=79 && studentScore <=100){
    console.log("A")
}
else if (studentScore >=60 && studentScore <=79){
    console.log("B")
}
else if (studentScore >=59 && studentScore <=49){
    console.log("C")
}
else if (studentScore >=40 && studentScore <=49){
    console.log("D")
}
else if (studentScore >=0 && studentScore <=40){
    console.log("E")
}
else{
    console.log("score is invalid")
}
}
grading(studentScore)


