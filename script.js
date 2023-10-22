let input = document.querySelector("input")
let imagen = document.querySelector("img")
let boton = document.querySelector("button")


function cargarCiudad() {
    if (input.value != null) {
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es"
            , (data) => {

                document.querySelector("#ciudad").textContent = data.name
                let temperatura = data.main.temp
                document.querySelector("#temperatura").textContent = Math.round(temperatura)
                imagen.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
                document.querySelector("#descripcion").textContent = data.weather[0].description

            })
    }
}

boton.addEventListener("click", function () {
    cargarCiudad()
    document.querySelector(".container").style.visibility = "visible"
    input.value = ""
})