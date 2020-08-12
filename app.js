const text = document.getElementById("text");
text.addEventListener("keypress",function(evt){
    if (evt.keyCode == 13) {
        getResults(text.value)
        console.log("s");
    }
});

function getResults(prayer) {
    fetch(`http://api.aladhan.com/v1/timingsByAddress?address=${prayer}`)
    .then (time => time.json(time))
    .then (json => {
        let fajr = document.getElementById("fajr");
        fajr.style.display = "block"
        fajr.innerText = json.data.timings.Fajr; 

        let sunrise = document.getElementById("sunrise");
        sunrise.style.display = "block"
        sunrise.innerText = json.data.timings.Sunrise;

        let dhuhr = document.getElementById("dhuhr");
        dhuhr.style.display = "block"
        dhuhr.innerText = json.data.timings.Dhuhr;

        let asar = document.getElementById("asar");
        asar.style.display = "block"
        asar.innerText = json.data.timings.Asr;

        let sunset = document.getElementById("sunset");
        sunset.style.display = "block"
        sunset.innerText = json.data.timings.Sunset;

        let mgrb = document.getElementById("mgrb");
        mgrb.style.display = "block"
        mgrb.innerText = json.data.timings.Maghrib;

        let isha = document.getElementById("isha");
        isha.style.display = "block"
        isha.innerText = json.data.timings.Isha;

//         Asr: "15:22"
// Dhuhr: "11:58"
// Fajr: "04:24"
// Imsak: "04:14"
// Isha: "19:31"
// Maghrib: "18:26"
// Midnight: "23:58"
// Sunrise: "05:29"
// Sunset: "18:26"


        console.log(json)
    }) 
}




