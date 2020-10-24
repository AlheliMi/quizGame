var inicio = document.querySelector(".body");
var comenzamosBoton = document.getElementById("started");
console.log(comenzamosBoton);
var tiempo = document.getElementById("conteo");
console.log(tiempo);
var contenedorResultados = document.getElementById("conteiner2");
var divResultados = document.getElementById("score1")
//contenedorResultados.style.display="none";
/*iniciar el cuestionario*/
var tiempoTotal = 90; // el tiempo que tengo para el quiz
var timeInterval;

var preguntaIndice =0
var puntaje = 0;
var termino = false


// actuliza count down every 1 second
function iniciarTiempo() {
  console.log("inicie")
timeInterval= setInterval(function() {

  // tiempo
  tiempoTotal--;

  // de 90 a 0
  var distance = tiempoTotal;

  // Display the result in the element with id="demo"
  tiempo.textContent= ("Timeleft: "+ tiempoTotal);
  

  // si se termino el tiempo avisa esto
  if (distance === 0) {
    termino =true
    clearInterval(timeInterval);
    tiempo.textContent= "Time: "+ tiempoTotal;
    //cuando se acabe el tiempo debo agregar el contenedor de los puntajes
    //desaparecer el contenedor de las preguntas
  }
}, 1000);
console.log("voy a oreguntar")

preguntas(0)
// agrega funcion de mis preguntas
console.log("ya pregunte")
};

comenzamosBoton.addEventListener("click", iniciarTiempo);


var misPreguntas = [
    {
      question: "how many teeths a 4 year old should have?",
      answers: {
        a: "20",
        b: "16",
        c: "21",
        d: "12",
      correcta: "20"
    }},
    {
      question: "how many teeths a 25 year old person should have?",
      answers: {
        a: "28-32",
        b: "16-20",
        c: "20-30",
        d: "none",
      correcta: "28-32"
    }},
    {
      question: "What is stomatologt the study of?",
      answers: {
        a: "eyes and nose diseases",
        b: "throat diseases",
        c: "mouth and its disorders and diseases",
        d: "teeths diseases",
      correcta: "mouth and its disorders and diseases"
    }},
    {
      question: "what is an endodontic treatment?",
      answers: {
        a: "treats the hard tissue on a tooth",
        b: "treats the softpulp tissue inside the tooth",
        c: "treats gums deseases",
        d: "treats toothache",
      correcta: "treats the softpulp tissue inside the tooth"
    }},
    {
      question:"how many rooths does an upper first premomalar usually have?" ,
      answers: {
        a: "2",
        b: "1",
        c: "3",
        d: "0",
      correcta: "2"
    }},   
    {
      question:"at what age does the first tooth usually appear?" ,
      answers: {
        a: "probably never",
        b: "at 1 months",
        c: "at 6 months",
        d: "after the first year",
      correcta: "at 6 months"
    }},  
    {
      question:"The branch of desntistry dealing with the prevention and correction of irregular teeth?" ,
      answers: {
        a: "Orthodontics",
        b: "Oral surgery",
        c: "Endodontics",
        d: "Dental Implantology",
      correcta: "Orthodontics"
    }},  
    {
      question:"What are tooth cavities?" ,
      answers: {
        a: "teeth diseases",
        b: "black areas",
        c: "soft areas",
        d: "decayed areas of your teeth that develop into tiny openings or holes",
      correcta: "decayed areas of your teeth that develop into tiny openings or holes"
    }},  
  ];

var quizConteiner = document.getElementById("cuestionario");
var contenedorRespuestas = document.getElementById("answers");
console.log(quizConteiner);
var pregunta = document.getElementById("question");
console.log(pregunta);
var opcionA = document.getElementById("a");
console.log(opcionA);
var opcionB = document.getElementById("b");
var opcionC = document.getElementById("c");
var opcionD = document.getElementById("d");
var todasPreguntas = misPreguntas.length;
console.log(todasPreguntas);
var respCorrecta= document.getElementById("answerWrong");
var respIncorrecta = document.getElementById("answerRight")
var tiempoDespuesRespuesta = document.getElementById("timeRemainAfterQuestion");
var divResultados = document.getElementById("score1")
var desplazandoCuestionario = 0;
function test() {console.log("test") }
// agregar las preguntas
function preguntas(i) {
  console.log("f")
 cuestionario = misPreguntas[desplazandoCuestionario];
 console.log(cuestionario)

  pregunta.textContent = misPreguntas[i].question;

  opcionA.textContent = misPreguntas[i].answers.a;
  opcionA.title = i
  opcionB.textContent = misPreguntas[i].answers.b;
  opcionB.title = i
  opcionC.textContent = misPreguntas[i].answers.c;
  opcionC.title = i
  opcionD.textContent = misPreguntas[i].answers.d;
  opcionD.title = i

}
console.log("preguntas")

var cuestBtn = document.querySelectorAll(".cuestBtn")
console.log(cuestBtn)
opcionA.addEventListener("click" ,userAnswerA)
opcionB.addEventListener("click" ,userAnswerB)
opcionC.addEventListener("click" ,userAnswerC)
opcionD.addEventListener("click" ,userAnswerD)

contenedorResultados.style.visibility = 'hidden';


function userAnswerA() {
  //event.stopPropagation();
  if (opcionA.textContent === misPreguntas[opcionA.title].answers.correcta){
    respCorrecta.textContent = "You,re right genius, have 10+ sec";
    respCorrecta.setAttribute("style","color: purple");

    tiempoTotal = tiempoTotal + 5 
    console.log("correcta");
    puntaje++
   
   }
   else {
     respIncorrecta.textContent = "Wrong, can´t imagine how your mouth is! -10 sec";
     respIncorrecta.setAttribute("style","color: red");
     tiempoTotal = tiempoTotal -5
     console.log("incorrecta")
   }

   if (preguntaIndice < misPreguntas.length-1) {
    preguntaIndice++
    preguntas(preguntaIndice )
    
  }
  else{    
      termino = true    
      contenedorResultados.style.visibility = 'visible'
      divResultados.textContent = puntaje
      clearInterval(timeInterval);
    tiempo.textContent= "Time: "+ tiempoTotal;
  }
}
function userAnswerB() {
  //event.stopPropagation();
  if (opcionB.textContent === misPreguntas[opcionB.title].answers.correcta){
    respCorrecta.textContent = "You,re right genius, have 10+ sec";
    respCorrecta.setAttribute("style","color: purple");
    /* tiempo restante total. no se si asi se deba declarar?? */
    tiempoTotal = tiempoTotal + 5 
    console.log("correcta");
    puntaje++
   }
   else {
     respIncorrecta.textContent = "Wrong, can´t imagine how your mouth is! -10 sec";
     respIncorrecta.setAttribute("style","color: red");
     tiempoTotal = tiempoTotal -5
     console.log("incorrecta")
     
   }
   
   if (preguntaIndice < misPreguntas.length-1) {
    preguntaIndice++
    preguntas(preguntaIndice )
  }
  else{    
    termino = true    
    contenedorResultados.style.visibility = 'visible'
    divResultados.textContent = puntaje
    clearInterval(timeInterval);
    tiempo.textContent= "Time: "+ tiempoTotal;
}
}
function userAnswerC() {
  //event.stopPropagation();
  if (opcionC.textContent === misPreguntas[opcionC.title].answers.correcta){
    respCorrecta.textContent = "You,re right genius, have 10+ sec";
    respCorrecta.setAttribute("style","color: purple");
    /* tiempo restante total. no se si asi se deba declarar?? */
    tiempoTotal = tiempoTotal + 5 
    console.log("correcta");
    puntaje++
   }
   else {
     respIncorrecta.textContent = "Wrong, can´t imagine how your mouth is! -10 sec";
     respIncorrecta.setAttribute("style","color: red");
     tiempoTotal = tiempoTotal -5
     console.log("incorrecta")
   }
   
   if (preguntaIndice < misPreguntas.length-1) {
    preguntaIndice++
    preguntas(preguntaIndice )
  }
  else{    
    termino = true    
    contenedorResultados.style.visibility = 'visible'
    divResultados.textContent = puntaje
    clearInterval(timeInterval);
    tiempo.textContent= "Time: "+ tiempoTotal;
}
}
function userAnswerD() {
  //event.stopPropagation();
  if (opcionD.textContent === misPreguntas[opcionD.title].answers.correcta){
    respCorrecta.textContent = "You,re right genius, have 10+ sec";
    respCorrecta.setAttribute("style","color: purple");
    /* tiempo restante total. no se si asi se deba declarar?? */
    tiempoTotal = tiempoTotal + 5 
    console.log("correcta");
    puntaje++
   }
   else {
     respIncorrecta.textContent = "Wrong, can´t imagine how your mouth is! -10 sec";
     respIncorrecta.setAttribute("style","color: red");
     tiempoTotal = tiempoTotal -5
     console.log("incorrecta")
   }
   
   if (preguntaIndice < misPreguntas.length-1) {
    preguntaIndice++
    preguntas(preguntaIndice )
  }
  else{    
    termino = true  
    quizConteiner.style.visibility = 'hidden'
    contenedorResultados.style.visibility = 'visible'
    divResultados.textContent = puntaje
    clearInterval(timeInterval);
    tiempo.textContent= "Time: "+ tiempoTotal;
}
}

//Para almacenar los resultados

var submitButton = document.getElementById("submit");
var listaPuntajesMaximos = document.getElementById("highScoreList")
listaResultFinales = document.getElementById("questionsDiv");


renderListaPuntajes();

function displayMessage(type, message) {
  listaResultFinales.textContent = message;
}
 var iniciales = localStorage.setItem("placeholder")
function renderListaPuntajes() {
  iniciales;
  puntajeMax = localStorage.setItem(puntaje);
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();

   iniciales.value;
  var puntaje = document.querySelector(puntaje).value;

  if (iniciales === "") {
    displayMessage("error", "initials cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("iniciales", iniciales);
    localStorage.setItem("score", puntaje);
    renderListaPuntajes();
  }
});
// aun no logro hacerlo funcionar
puntajeMaximo.push(resultadosFinales);
localStorage.setItem("highscores", JSON.stringify(resultadosFinales));

var iniciales = 0;
var restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", function(_event){
  iniciales++;
  iniciarTiempo();

});
