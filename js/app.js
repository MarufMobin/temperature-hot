const catchInputData = () =>{
    const inputData = document.getElementById('taken-name');
    const cityName = inputData.value;
    const API_KEY = `94681e9ff1a6f4cec1fbe373912d0d20
    `;

    if( cityName !== ''){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`

        if( url !== 'undefined'){
            fetch(url).then( res => res.json()).then( data => displayTemprature(data))
        }else{
            alert('please A state or Country name')
        }
        
    }else{
        alert('please Enter a valid Data')
    }
    inputData.value = "";
}

const setInnerText = ( id,valueName ) =>{
  const name = document.getElementById(id);
  name.innerText = valueName;
}

const displayTemprature = data =>{


    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    
    document.getElementById('icon').setAttribute("src", iconUrl)

    setInnerText('city', data.name);
    setInnerText('temparature', data.main.temp);
    setInnerText('status', data.weather[0].main);
    console.log(data)
}