

function fizzBuzz(n) {
    
    let cnt3 = 0;
    let cnt5 = 0;
    
    for (let i = 0; i <= n; i++){
        let str = "";
        
        if (cnt3 === 3) {
            str += 'fizz';
            cnt3 = 0;
        }
        if (cnt5 === 5) {
            str += 'Buzz';
            cnt5 = 0;
        }
        if (str === '') {
            str += i;
        }

        console.log(str);

        cnt3++;
        cnt5++;
    }

}


fizzBuzz(20);