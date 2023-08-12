let locationArea = document.querySelector(`.forecast .location`)
let icon = document.querySelector(`.numdegree img`)
let temp = document.querySelector(`.forecast .numdegree p `)
let custom = document.querySelector(`.custom`)
let status1 = document.getElementById('day1')
let status2 = document.getElementById('day2')
let maxDay1 = document.getElementById('max-temp1')
let minDay1 = document.getElementById('sm-temp1')
let maxDay2 = document.getElementById('max-temp2')
let minDay2 = document.getElementById('sm-temp2')
let iconDay1 = document.getElementById('iconDay1')
let iconDay2 = document.getElementById('iconDay2')
let inp = ""
let date ,date1,date2;
let day0=document.getElementById('day0')
let month0=document.getElementById('month0')
let d1=document.getElementById('d1')
let d2=document.getElementById('d2')
let weatherObject = {}



const navLinks = document.querySelectorAll(`nav ul li`)
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
        let activeLink = document.querySelector(`nav ul li.active`)
        activeLink.classList.remove('active')
        navLinks[i].classList.add('active')

    })



}




async function getWeather(country) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7529bd0a59f74509a92104827230708&q=${country}&days=7`)
    weatherObject = await response.json()
    displayDay0(weatherObject)
    displayDay1(weatherObject)
    displayDay2(weatherObject)
    

}
getWeather('cairo')

inp = document.getElementById('inp')
inp.addEventListener('keyup', function () {
    console.log(this.value)
    getWeather(this.value)


        ;
})




function displayDay0(object) {

    locationArea.innerHTML = object.location.name
    icon.src = object.current.condition.icon
    temp.innerHTML = object.current.temp_c + "<span>&#8451;</span>"
    date = object.forecast.forecastday[0].date
    day0.innerHTML=getDay(date)
    month0.innerHTML=getDate(date)+ " "+ getMonth(date)

}

function displayDay1(object) {

    iconDay1.src = object.forecast.forecastday[1].day.condition.icon

    status1.innerHTML = object.forecast.forecastday[1].day.condition.text
    maxDay1.innerHTML = object.forecast.forecastday[1].day.maxtemp_c + "<span>&#8451;</span>"
    minDay1.innerHTML = object.forecast.forecastday[1].day.mintemp_c + "<sup>o</sup>"
   
    date1 = object.forecast.forecastday[1].date


  
    d1.innerHTML=getDay(date1)


}
function displayDay2(object) {

    iconDay2.src = object.forecast.forecastday[2].day.condition.icon
    status2.innerHTML = object.forecast.forecastday[2].day.condition.text

    maxDay2.innerHTML = object.forecast.forecastday[2].day.maxtemp_c + "<span>&#8451;</span>"

    minDay2.innerHTML = object.forecast.forecastday[2].day.mintemp_c + "<sup>o</sup>"

    date2 = object.forecast.forecastday[2].date

        d2.innerHTML=getDay(date2)
}

function getMonth(date) {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date(date);

    return months[d.getMonth()];
    


}

function getDay(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date(date);

    return days[d.getDay()];

}

function getDate(date) {
    const d = new Date(date);
    return d.getDate();

}


