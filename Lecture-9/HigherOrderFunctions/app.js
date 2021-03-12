
// Higher Order function
function fun() {
   
    function innerFun() {
        console.log("Inside Inner Fun")
    }
    
    return innerFun;
}


let x = fun();
// console.log(x);
x();