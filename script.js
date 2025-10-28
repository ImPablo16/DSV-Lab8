// Problema 1: Suma de tres valores
function calcularSuma() {
    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const num3 = parseFloat(document.getElementById('num3').value) || 0;
    
    // Calcular la suma
    const suma = num1 + num2 + num3;
    
    // Mostrar el resultado con animación
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `La suma de los valores ingresados es: ${suma}`;
    resultadoElement.classList.add('active');
}

// Problema 2: Cuadrado de un número
function calcularCuadrado() {
    // Obtener el valor del input
    const numero = parseFloat(document.getElementById('numeroCuadrado').value);
    
    // Verificar si se ingresó un número válido
    if (isNaN(numero)) {
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = 'Por favor, ingrese un número válido.';
        resultadoElement.classList.add('active');
        return;
    }
    
    // Calcular el cuadrado
    const cuadrado = numero * numero;
    
    // Mostrar el resultado con animación
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El cuadrado de ${numero} es: ${cuadrado}`;
    resultadoElement.classList.add('active');
}

// Problema 3: Promedio de calificaciones
function calcularPromedio() {
    // Obtener los valores de los inputs
    const nombre = document.getElementById('nombreEstudiante').value;
    const calif1 = parseFloat(document.getElementById('calificacion1').value) || 0;
    const calif2 = parseFloat(document.getElementById('calificacion2').value) || 0;
    const calif3 = parseFloat(document.getElementById('calificacion3').value) || 0;
    
    // Verificar si se ingresó un nombre
    if (!nombre.trim()) {
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = 'Por favor, ingrese el nombre del estudiante.';
        resultadoElement.classList.add('active');
        return;
    }
    
    // Calcular el promedio
    const promedio = (calif1 + calif2 + calif3) / 3;
    
    // Mostrar el resultado con dos decimales
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El promedio de ${nombre} es: ${promedio.toFixed(2)} puntos`;
    resultadoElement.classList.add('active');
}

// Problema 4: Conversión de unidades (metros)
function convertirUnidades() {
    // Obtener el valor del input
    const metros = parseFloat(document.getElementById('metros').value);
    
    // Verificar si se ingresó un número válido
    if (isNaN(metros)) {
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = 'Por favor, ingrese un valor válido en metros.';
        resultadoElement.classList.add('active');
        return;
    }
    
    // Realizar las conversiones
    const centimetros = metros * 100;
    const kilometros = metros / 1000;
    
    // Formatear números con separadores de miles
    const formatoNumero = (num) => {
        return num.toLocaleString('es-ES', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };
    
    // Mostrar el resultado con animación
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = 
        `${metros} metros equivalen a ${formatoNumero(centimetros)} centímetros y ${formatoNumero(kilometros)} kilómetros.`;
    resultadoElement.classList.add('active');
}

// Problema 5: Comparación de dos valores
function compararValores() {
    // Obtener los valores de los inputs
    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);
    
    // Verificar si se ingresaron números válidos
    if (isNaN(valorA) || isNaN(valorB)) {
        const resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = 'Por favor, ingrese valores válidos para ambos campos.';
        resultadoElement.classList.add('active');
        return;
    }
    
    // Determinar mayor, menor y diferencia
    let mayor, menor;
    if (valorA > valorB) {
        mayor = valorA;
        menor = valorB;
    } else {
        mayor = valorB;
        menor = valorA;
    }
    
    const diferencia = Math.abs(valorA - valorB);
    
    // Mostrar el resultado con animación
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = 
        `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
    resultadoElement.classList.add('active');
}

// Añadir funcionalidad para limpiar resultados cuando se modifiquen los inputs
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const resultado = document.getElementById('resultado');
            if (resultado) {
                resultado.classList.remove('active');
            }
        });
    });
});