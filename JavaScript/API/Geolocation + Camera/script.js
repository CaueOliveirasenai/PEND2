function obterLocalizacao() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function(posicao) {

                let latitude = posicao.coords.latitude;
                let longitude = posicao.coords.longitude;
                let precisao = posicao.coords.accuracy;

                document.getElementById("latitude").innerText =
                    latitude;

                document.getElementById("longitude").innerText =
                    longitude;

                document.getElementById("precisao").innerText =
                    precisao + " metros";

            },

            function() {

                alert("Não foi possível obter sua localização.");

            }

        );

    } else {

        alert("Seu navegador não suporta Geolocation.");

    }
}


// ==========================
// CÂMERA
// ==========================

function abrirCamera() {

    navigator.mediaDevices.getUserMedia({

        video: true

    })

    .then(function(stream) {

        let camera = document.getElementById("camera");

        camera.srcObject = stream;

        document.getElementById("cameraTexto").style.display = "none";

    })

    .catch(function() {

        alert("Não foi possível acessar a câmera.");

    });

}

