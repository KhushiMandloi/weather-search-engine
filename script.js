// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dbd1c3f741msh4c30f721899fd7bp115fd2jsn567752cff3f6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};



const getcity= (city)=>{
        cityname.innerHTML=city
    
    
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
   .then(response =>response.json())
   .then((response)=>{
    // console.log(response)

    cloud_pct.innerHTML = response.cloud_pct
    console.log(response.cloud_pct)
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
   })
   .catch(err =>console.error(err));
}

submit.addEventListener("click",(e)=>{
        e.preventDefault()
        getcity(city.value)
    
    })

    getcity("Khargone")




    // watch
    function showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        MyClockDisplay.innerHTML=time           
        //document.getElementById("MyClockDisplay").innerText = time;
        // document.getElementById("MyClockDisplay").textContent = time;
        
        setTimeout(showTime, 1000);
        //1000 millisecond
        
    }
    
    showTime();
    


    