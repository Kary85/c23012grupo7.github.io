function validar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let pasa = true;
    document.getElementById('resultadoValidacion').innerHTML = "";


    let expr2 = /[a-zA-ZÀ-ÿ\s]{3,40}$/;
    if (!expr2.test(nombre)) {
        document.getElementById('resultadoValidacion').innerHTML += `<p>Debe ingresar un nombre.</p>`;
        pasa = false;
    }
    let expr3 = /[a-zA-ZÀ-ÿ\s]{2,40}$/;
    if (!expr3.test(apellido)) {
        document.getElementById('resultadoValidacion').innerHTML += `<p>Debe ingresar un apellido.</p>`;
        pasa = false;
    }
    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email)) {
        document.getElementById('resultadoValidacion').innerHTML += `<p>Debe ingresar un email.</p>`;
        pasa = false;
    }
    if (pasa) {
        let boton = document.getElementById("boton");
        boton.type = "submit";
        boton.click();
    }

}


//boton para ir arriba
const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

window.onscroll = () => {
    add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
    if (window.scrollY < 100) {
        btn_scrolltop.classList.remove("btn-scrolltop-on")
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on")
    }
}

// con esto obtengo la ubicación actual del usuario
navigator.geolocation.getCurrentPosition(function (position) {
    // nos da las coordenadas de latitud y longitud
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // esta es la URL de la API de openw....
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=193e095bade42fed020257241afde6ce`;

    // hago la solicitud HTTP a la API
    fetch(apiUrl)
        .then(function (response) {
            // se convierte la respuesta a formato JSON
            return response.json();
        })
        .then(function (data) {
            // obtengo la temperatura actual en grados Celsius
            const temperature = Math.round(data.main.temp - 273.15);

            // muestra la temp en nuestra pagina
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `La temperatura actual en tu ubicación es de ${temperature}°C.`;
        });
});