let search=document.querySelector('.searchbtn')
let cityd=document.getElementById('citydisplay')
let cityn=document.getElementById('cityname')
let current=document.getElementById('Current')
let feels=document.getElementById('Feels')
let comment=document.getElementById('Comments')
let icon=document.querySelector('.icondisplay')
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd0a99a7bamsh1397a932c0fbf86p134ffbjsnd342b1676aa1',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
const update = async() =>{
    try {
        let placename=cityn.value
        const furl = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+placename;
        const response = await fetch(furl, options);
        const result = await response.json();
        const result1=`${result.location.name} ${result.location.region} ${result.location.country}`
        icon.innerHTML=`<img src='${result.current.condition.icon}' height=70px width=70px/>`
        cityd.innerText=result1
        current.innerText=`Current Temp : ${result.current.temp_c}`
        feels.innerText=`Feels Like : ${result.current.feelslike_c}`
        comment.innerText=`Feels Like : ${result.current.condition.text}`
        console.log(placename)
        console.log(result1);
    } catch (error) {
        cityd.innerText='Please Check The Place'
        console.error(error);
    }
}
search.onclick = function(){
    update()
}