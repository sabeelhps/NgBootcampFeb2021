

function fun() {
    console.log('inside fun');
    
    let x = 0;
    
    function innerFun() {
        x++;
        console.log(x);
    }

    return innerFun;

}

let f = fun();
///..........

f();
f();
f();
f();
f();