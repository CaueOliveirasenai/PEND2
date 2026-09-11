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


function tirarFoto() {

    const video = document.getElementById("camera");
    const canvas = document.getElementById("foto");
    const imagem = document.getElementById("fotoCapturada");

    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    imagem.src = canvas.toDataURL("image/png");
}