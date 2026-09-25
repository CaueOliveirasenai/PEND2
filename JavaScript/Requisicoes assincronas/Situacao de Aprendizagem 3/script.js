async function buscarClima() {

    let cidade = document.getElementById("cidade").value;

    if (cidade == "") {
        alert("Digite uma cidade!");
        return;
    }

    let respostaCidade = await fetch(
        "https://geocoding-api.open-meteo.com/v1/search?name="
        + cidade
        + "&count=1&language=pt&format=json"
    );

    let dadosCidade = await respostaCidade.json();

    if (!dadosCidade.results) {
        alert("Cidade não encontrada!");
        return;
    }

    let local = dadosCidade.results[0];

    let latitude = local.latitude;
    let longitude = local.longitude;


    
    let respostaClima = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude="
        + latitude
        + "&longitude="
        + longitude
        + "&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
        + "&hourly=temperature_2m"
        + "&timezone=auto"
    );

    let dados = await respostaClima.json();


    
    let temperatura = dados.current.temperature_2m;
    let umidade = dados.current.relative_humidity_2m;
    let vento = dados.current.wind_speed_10m;


    
    document.getElementById("resultado").innerHTML = `

        <h2>${local.name}</h2>

        <div class="temperatura">
            ${temperatura}°C
        </div>

        <div class="info">

            <div>
                <b>Umidade</b>
                <p>${umidade}%</p>
            </div>

            <div>
                <b>Vento</b>
                <p>${vento} km/h</p>
            </div>

        </div>
    `;


    let horas = dados.hourly.time.slice(0, 24).map(function(hora) {
    return hora.substring(11, 16);
});

let temperaturas = dados.hourly.temperature_2m.slice(0, 24);

    
    new Chart(
        document.getElementById("graficoTemperatura"),
        {
            type: "line",

            data: {
                labels: horas,

                datasets: [{
                    label: "Temperatura °C",
                    data: temperaturas,
                    borderColor: "#1976d2"
                }]
            }
        }
    );
}