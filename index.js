window.onload = function () {
    let array = [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "FIGMA"
    ];
    let randomWord = "";
    let board = document.getElementById("board").getContext("2d");

    //Inicia el juego
    document.getElementById("btn-start").onclick = (e) => {
        e.preventDefault();
        show();
        secretWord();
        drawCanvas();
        drawLines();
    }

    function drawCanvas(){
        //Estilos
        board.lineWidth = 8;
        board.lineCap = 'round';
        board.lineJoin = 'round';
        board.fillStyle = '#F3F5F6';
        board.strokeStyle = '#8A3871';
    
        //Dibujando
        board.fillRect(0,0,1200,800);
        board.beginPath();
        board.moveTo(360, 550);
        board.lineTo(860, 550);

        board.stroke();
        board.closePath();
    }

    function drawLines(){
        //Estilos
        board.lineWidth = 6;
        board.lineCap = 'round';
        board.lineJoin = 'round';
        board.fillStyle = '#F3F5F6';
        board.strokeStyle = '#0A3871';

        let breadth = 600/randomWord.length;

        for(let i = 0 ; i < randomWord.length ; i++){
            board.moveTo(350 + (breadth*i), 680)
            board.lineTo(400 + (breadth*i), 680)
        }

        board.stroke();
        board.closePath();
    }
    
    //Seleccion  de la palabra secreta
    function secretWord(){
        let randomItem = Math.floor(Math.random()*array.length);
        randomWord = array[randomItem];
    }
    
    //Oculta seccion de inicio
    function show(){
        document.getElementById("home").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("play").style.display = "block";
    }

}
