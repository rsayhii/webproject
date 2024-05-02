const submitBtn = document.querySelector('#submitBtn');
const cityName = document.querySelector('#cityName');
const city_name = document.querySelector('#city_name');
const temp_status = document.querySelector('#temp_status');
const main_temp = document.querySelector('#main_temp');
const data_hide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault(); // stop page to refresh
    let cityVal = cityName.value;
    if(cityVal === ""){
        data_hide.classList.add("data_hide");
        city_name.innerText = "plz write the name before search";        
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f7bcc405da77854de86f7bc0d3e88b14`;
            const respone = await fetch(url);
            const data = await respone.json();
            console.log(data);
            const arrData = [data];
            console.log(arrData);

            city_name.textContent = `${arrData[0].name}, ${arrData[0].sys.country}`;
            main_temp.textContent = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;


            // condition to check sunny or cloudy
            if(tempMood === "clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood === "clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";                
            }else if(tempMood === "rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";                
            }else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";                
            }

            data_hide.classList.remove("data_hide");

        }catch{
            city_name.innerText = "plz enter the city name properly";             
            data_hide.classList.add("data_hide");
        }           

    }
}

submitBtn.addEventListener('click', getInfo);