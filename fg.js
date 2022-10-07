
var buttongf = document.querySelector('.buttone');
var input = document.querySelector('.inputValue');
var namey = document.querySelector('.name');
var icon = document.querySelector('.icon');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humi = document.querySelector('.humi');
var spee = document.querySelector('.spee');


// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&
// appid=93018bc3e6355d7ef90e1705c1eb1c71')


    // aspi: "93018bc3e6355d7ef90e1705c1eb1c71",
    //     fetch("https://api.openweathermap.org/data/2.5/weather?q="
    //     + city
    //     + "&appid="
    //     + aspi;
    //     )
    //     .then((response)=> response.json()).then((data)=>console.log(data));

    
        // var api = "https://api.openweathermap.org/data/2.5/weather?q=";
        // var city = 'London';
        // var apikey = '&appid=93018bc3e6355d7ef90e1705c1eb1c71';
        // var units = '&units=metric';

        // function weatherask(){
        //     var url = api + city + apikey + units;
        //     loadJSON(url, g)
        // }

        buttongf.addEventListener('click', function(){
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value
           +'&appid=93018bc3e6355d7ef90e1705c1eb1c71&unit=metric')
            .then(response => response.json())
            .then(data => {
                var namees = data['name'];
                var tems = data['main']['temp'];
                var descs = data['weather'][0]['description'];
                var speed = data['wind']['speed']
                var ic = data['weather'][0]['icon']
                var hm = data['main']['humidity']

                namey.innerHTML = "weather in " + namees;
                icon.src="https://openweathermap.org/img/wn/" + ic + ".png";
                temp.innerHTML = "Temperature:" + tems;
                desc.innerHTML = descs;
                humi.innerHTML = "Humidity:" + hm; + "%";
                spee.innerHTML = " Wind Speed:" + speed + "km/h";



                

            })



            .catch(err => alert("wrong city name!"))
            
        })
