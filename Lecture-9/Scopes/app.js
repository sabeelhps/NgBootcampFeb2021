

function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
    
}

a();