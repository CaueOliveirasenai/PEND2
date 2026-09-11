const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

contexto.beginPath();
contexto.moveTo(10, 0);
contexto.lineTo(50, 200);
contexto.lineTo(200, 200);
contexto.stroke();  // Desenhando uma linha

contexto.fillRect(50, 50, 150, 100);  // Desenhando um retângulo preenchido

contexto.strokeRect(250, 50, 150, 100);  // Desenhando um retângulo contornado

contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI *2 );  // Desenhando um círculo
contexto.stroke();  // Contornando o círculo

