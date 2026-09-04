navigator.mediaDevices.getUserMedia({
    video: true
})
.then(function (stream) {
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})
.catch(function (erro) {
    console.log("Não foi possível acessar a câmera. ", erro);
});