//Función para agregar el valor al campo de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Función que calcula el valor en el campo de la calculadora
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}

//Función que borra el valor del campo de la calculadora
function borrar(){
    document.getElementById('pantalla').value = ''
}