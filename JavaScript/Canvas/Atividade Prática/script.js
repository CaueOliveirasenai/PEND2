const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

contexto.lineWidth = 5;  // Definindo a largura da linha

//cabeça
contexto.beginPath();
contexto.arc(250, 80, 30, 0, Math.PI *2 );  
contexto.stroke();  

//corpo
contexto.beginPath();
contexto.moveTo(250, 110);
contexto.lineTo(250, 200);
contexto.stroke();  


//braço esquerdo
contexto.beginPath();
contexto.moveTo(250, 110);
contexto.lineTo(220, 150);
contexto.lineTo(260, 170);
contexto.stroke();

//braço direito
contexto.beginPath();
contexto.moveTo(250, 110);
contexto.lineTo(280, 150);
contexto.lineTo(320, 130);
contexto.stroke();

//perna esquerda
contexto.beginPath();
contexto.moveTo(250, 200);
contexto.lineTo(220, 300);
contexto.lineTo(210, 350);
contexto.stroke();

//perna direita
contexto.beginPath();
contexto.moveTo(250, 200);
contexto.lineTo(280, 300);
contexto.lineTo(290, 350);
contexto.stroke();



