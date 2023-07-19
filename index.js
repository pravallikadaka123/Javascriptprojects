const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherBox=document.querySelector('.weather-box');
const weatherDetails=document.querySelector('.weather-details');
const error=document.querySelector('.not-found');
search.addEventListener('click',()=>
{
    const APIKey='5b969a4d517f23a3528532fef12d4eda';
    const city=document.querySelector('.search-box input').value;
    if(city=='')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json =>{
        if(json.cod==='404')
        {
            container.style.height='605px';
            weatherBox.style.display='none';
            weatherDetails.style.display='none';
            error.style.display='block';
            error.classList.add('fadeIn');
            return;
        }
        container.style.height='505px'
        error.style.display='none';
        error.classList.remove('fadeIn');
        const image=document.querySelector('.weather-box img');
        const temperature=document.querySelector('.weather-box .temperature');
        const description=document.querySelector('.weather-box .description');
        const humidity=document.querySelector('.weather-details .humidity span');
        const wind=document.querySelector('.weather-details .wind span');

        switch(json.weather[0].main)//The expression json.weather[0].main is accessing the main property of the first element in the weather array within a JSON object.
        {
            case 'Clear':
                image.src='images/clearsky.jpeg';  
                break;
            case 'Rain':
                image.src='images/rain.jpeg';

                break;
            case 'Snow':
                image.src='images/snow.jpeg';
                break;
            case 'Clouds':
                image.src='images/clear.jpeg';
                break;  
            case 'Haze':
                image.src='images/haze.jpeg';
                break;  
            default:
                image.src =''

        }
        temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`
        description.innerHTML=`${json.weather[0].description}`;
        humidity.innerHTML=`${json.main.humidity}%`;
        wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;
        weatherBox.style.display='';
        weatherDetails.style.display='';
        weatherBox.classList.add('fadeIn');//to  add the CSS class name "fadeIn" to the weatherBox and weatherDetails elements.
        weatherDetails.classList.add('fadeIn');
        //container.style.height='590px';
        




    });
});
