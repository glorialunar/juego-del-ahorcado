window.onload = function () {
    let array = [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "FIGMA"
    ];
    let randomWord = "";
    let board = document.getElementById("board").getContext("2d");
    let home = document.getElementById("home");
    let footer = document.getElementById("footer");
    let playroom = document.getElementById("play");
    let newWord = document.getElementById("new-word");

    //Inicia el juego
    document.getElementById("btn-start").onclick = () => {
        startPlay();
        secretWord();
        drawCanvas();
        drawLines();
    }
    
    //Sortea una nueva palabra
    document.getElementById("btn-new-game").onclick = () => {
        secretWord();
        drawCanvas();
        drawLines();
    }

    //Vuelve a home desde playroom
    document.getElementById("btn-decline").onclick = () => {
        goHome();
    }
    
    //Vuelve a home desde newWord
    document.getElementById("btn-cancel").onclick = () => {
        goHome();
    }

    //Abre seccion de nueva palabra
    document.getElementById("btn-new-word").onclick = () => {
        addNewWord();
    }

    //Agrega nueva palabra
    document.getElementById("btn-save").onclick = () => {
        pushNewWord();
        startPlay();
        secretWord();
        drawCanvas();
        drawLines();
    }

    //Canvas
    //-------------------------------------------------------//
    //Dibuja el canvas
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

    //Dibuja las lineas de la palabra sorteada
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
    

    //Funcionalidades
    //-------------------------------------------------------//
    //Seleccion  de la palabra secreta
    function secretWord(){
        let randomItem = Math.floor(Math.random()*array.length);
        randomWord = array[randomItem];
        console.log(randomWord);
    }

    function pushNewWord(){
        let nuevaPalabra = document.getElementById("add-new-word");
        array.push(nuevaPalabra.value);
        console.log(array);
    }
    

    //Mostrar y ocultar
    //-------------------------------------------------------//
    //Muestra sección de juego
    function startPlay(){
        home.style.display = "none";
        footer.style.display = "none";
        playroom.style.display = "block";
    }
    
    //Vuelve al inicio
    function goHome(){
        playroom.style.display = "none";
        home.style.display = "flex";
        footer.style.display = "block";
    }
    
    //Muestra sección para agregar nueva palabra
    function addNewWord(){
        home.style.display = "none";
        footer.style.display = "none";
        newWord.style.display = "block";
    }
}
