const km = document.getElementById('km');
const min = document.getElementById('min');
const calfareBtn = document.getElementById('cal-fare');
const fareDiv = document.getElementById('fare-div');
const showFareBtn = document.getElementById('show-fare-btn');
const showFareDiv = document.getElementById('show-fare');

calfareBtn.addEventListener('click', async() => {
    
    const res=await axios.post('/calfare', { km: km.value, min: min.value });

    fareDiv.innerHTML=`<h1>Total fare is ${res.data.totalFare}</h1>`

    console.log(res);
})

showFareBtn.addEventListener('click', async() => {
    
   const res=await axios.get('/rates');
   
    showFareDiv.innerHTML = `Fixed fare : ${res.data.fixed}
                             <br>
                             Fixed KM : ${res.data.fixedKm}
                             <br>
                             Free Min : ${res.data.freeMin}
                             <br>
                             Per Km : ${res.data.perKm}
                             <br>
                             Per Min : ${res.data.perMin}
    
                            `
    })
