document.addEventListener("DOMContentLoaded", () => {
  const quizDiv = document.getElementById("quiz");
  const nextBtn = document.getElementById("nextBtn");
  const progressBar = document.getElementById("progress-bar");
  const resultadoDiv = document.getElementById("resultado");

  let currentQuestion = 0;
  let puntaje = 0;

  const preguntas = [
    {
      texto: "¿Sabes qué es un algoritmo?",
      opciones: [
        { texto: "No sé", valor: 1 },
        { texto: "Más o menos", valor: 2 },
        { texto: "Sí, lo entiendo", valor: 3 }
      ]
    },
    {
      texto: "¿Has usado Scratch o un lenguaje con bloques?",
      opciones: [
        { texto: "Nunca", valor: 1 },
        { texto: "Algunas veces", valor: 2 },
        { texto: "Sí, bastante", valor: 3 }
      ]
    },
    {
      texto: "¿Sabes qué es una variable?",
      opciones: [
        { texto: "No", valor: 1 },
        { texto: "Lo he escuchado", valor: 2 },
        { texto: "Sí, lo sé usar", valor: 3 }
      ]
    },
    {
      texto: "¿Has resuelto problemas con pasos lógicos?",
      opciones: [
        { texto: "Nunca", valor: 1 },
        { texto: "A veces", valor: 2 },
        { texto: "Sí, seguido", valor: 3 }
      ]
    },
    {
      texto: "¿Has creado historias o juegos con bloques?",
      opciones: [
        { texto: "No", valor: 1 },
        { texto: "Pocas veces", valor: 2 },
        { texto: "Muchas veces", valor: 3 }
      ]
    },
    {
      texto: "¿Sabes qué es un bucle o ciclo?",
      opciones: [
        { texto: "No", valor: 1 },
        { texto: "He escuchado de eso", valor: 2 },
        { texto: "Sí, lo sé usar", valor: 3 }
      ]
    },
    {
      texto: "¿Has probado escribir código en algún lenguaje?",
      opciones: [
        { texto: "Nunca", valor: 1 },
        { texto: "Un poco", valor: 2 },
        { texto: "Sí, bastante", valor: 3 }
      ]
    }
  ];

  // clases de color para cada opción
const colorClasses = ["rojo", "verde", "amarillo"];

function mostrarPregunta() {
  const pregunta = preguntas[currentQuestion];
  quizDiv.innerHTML = `
    <div class="pregunta">
      <p>${pregunta.texto}</p>
      ${pregunta.opciones
        .map(
          (op, idx) => `
            <label class="${colorClasses[idx]}">
              <input type="radio" name="respuesta" value="${op.valor}">
              ${op.texto}
            </label>
          `
        )
        .join("")}
    </div>
  `;
  nextBtn.classList.add("oculto");
}

  // Mostrar resultado (sin cambios sustanciales)
  function mostrarResultado() {
    let nivel = "";
    let feedback = "";
    let costo = "";

    if (puntaje <= 10) {
      nivel = "Básico";
      feedback = "Tu hijo necesita empezar desde cero con juegos y actividades de lógica.";
      costo = "Plan recomendado: Introducción a la Programación – S/120";
    } else if (puntaje <= 16) {
      nivel = "Intermedio";
      feedback = "Ya tiene nociones básicas, lo ideal es reforzar Scratch y conceptos de algoritmos.";
      costo = "Plan recomendado: Taller de Scratch – S/150";
    } else {
      nivel = "Avanzado";
      feedback = "Tiene un buen nivel, puede avanzar a lenguajes como Python.";
      costo = "Plan recomendado: Curso de Python para niños – S/200";
    }

    quizDiv.innerHTML = "";
    nextBtn.classList.add("oculto");

    resultadoDiv.innerHTML = `
      <h2>Resultado</h2>
      <p><b>Nivel:</b> ${nivel}</p>
      <p><b>Retroalimentación:</b> ${feedback}</p>
      <p><b>Cotización:</b> ${costo}</p>
    `;
    resultadoDiv.classList.remove("oculto");
  }

  // Manejar selección: solo mostrar el botón "Siguiente" (no sumar aún)
  quizDiv.addEventListener("change", (e) => {
    if (e.target.name === "respuesta") {
      nextBtn.classList.remove("oculto");
    }
  });

  // Botón siguiente: aquí sí añadimos el valor seleccionado al puntaje
  nextBtn.addEventListener("click", () => {
    // tomar el valor seleccionado de esta pregunta (si lo hay)
    const seleccionado = document.querySelector('input[name="respuesta"]:checked');
    if (seleccionado) {
      puntaje += parseInt(seleccionado.value, 10);
    }

    currentQuestion++;
    let progreso = (currentQuestion / preguntas.length) * 100;
    progressBar.style.width = progreso + "%";

    if (currentQuestion < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarResultado();
    }
  });

  // Iniciar quiz
  mostrarPregunta();
});
