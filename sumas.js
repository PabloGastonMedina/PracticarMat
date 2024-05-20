//Primero seleccionamos los <P>
const suma1 = document.querySelector("#suma1");
const suma2 = document.querySelector("#suma2");
const suma3 = document.querySelector("#suma3");
const suma4 = document.querySelector("#suma4");
const suma5 = document.querySelector("#suma5");
const suma6 = document.querySelector("#suma6");
const suma7 = document.querySelector("#suma7");
const suma8 = document.querySelector("#suma8");
const suma9 = document.querySelector("#suma9");
const suma10 = document.querySelector("#suma10");
const suma11 = document.querySelector("#suma11");
const suma12 = document.querySelector("#suma12");
const suma13 = document.querySelector("#suma13");
const suma14 = document.querySelector("#suma14");
const suma15 = document.querySelector("#suma15");
const suma16 = document.querySelector("#suma16");
const suma17 = document.querySelector("#suma17");
const suma18 = document.querySelector("#suma18");
const suma19 = document.querySelector("#suma19");
const suma20 = document.querySelector("#suma20");
const suma21 = document.querySelector("#suma21");
const suma22 = document.querySelector("#suma22");
const suma23 = document.querySelector("#suma23");
const suma24 = document.querySelector("#suma24");
const suma25 = document.querySelector("#suma25");
const suma26 = document.querySelector("#suma26");
const suma27 = document.querySelector("#suma27");
const suma28 = document.querySelector("#suma28");
const suma29 = document.querySelector("#suma29");
const suma30 = document.querySelector("#suma30");
const suma31 = document.querySelector("#suma31");
const suma32 = document.querySelector("#suma32");
const suma33 = document.querySelector("#suma33");
const suma34 = document.querySelector("#suma34");


console.log(suma1, suma2)

//Aca le agregamos un numero al azar a cada <p>
suma1.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma2.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma3.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma4.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma5.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma6.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma7.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma8.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma9.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma10.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma11.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma12.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma13.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma14.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma15.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma16.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma17.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma18.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma19.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma20.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma21.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma22.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma23.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma24.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma25.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma26.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma27.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma28.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma29.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma30.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma31.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma32.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma33.textContent = Math.floor(Math.random() * (100 - 0 + 1));
suma34.textContent = Math.floor(Math.random() * (100 - 0 + 1));




//Aca seleccionamos el boton Cambiar numeros y luego hacemos que al apretar se cambien los numeros y se reinicie el input
const bntReinicio1 = document.querySelector(".btn1")
bntReinicio1.addEventListener("click", juegoNuevo);



function juegoNuevo(){
    suma1.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma2.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma3.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma4.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma5.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma6.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma7.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma8.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma9.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma10.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma11.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma12.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma13.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma14.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma15.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma17.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma18.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma19.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma20.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma21.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma22.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma23.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma24.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma25.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma26.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma27.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma28.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma29.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma30.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma31.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma32.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma33.textContent = Math.floor(Math.random() * (100 - 0 + 1));
    suma34.textContent = Math.floor(Math.random() * (100 - 0 + 1));

    //Vaciamos el input y ponemos el fondo blanco del input 
    reiniciar();
}


//Aca seleccionamos cada input
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");
const input5 = document.querySelector(".input5");
const input6 = document.querySelector(".input6");
const input7 = document.querySelector(".input7");
const input8 = document.querySelector(".input8");
const input9 = document.querySelector(".input9");
const input10 = document.querySelector(".input10");
const input11 = document.querySelector(".input11");
const input12 = document.querySelector(".input12");
const input13 = document.querySelector(".input13");
const input14 = document.querySelector(".input14");

//Funcion para riniciar el juego
function reiniciar(){
    input1.value = "";
    input1.style.backgroundColor = "white"

    input2.value = "";
    input2.style.backgroundColor = "white"

    input3.value = "";
    input3.style.backgroundColor = "white"

    input4.value = "";
    input4.style.backgroundColor = "white"

    input5.value = "";
    input5.style.backgroundColor = "white"

    input6.value = "";
    input6.style.backgroundColor = "white"

    input7.value = "";
    input7.style.backgroundColor = "white"

    input8.value = "";
    input8.style.backgroundColor = "white"

    input9.value = "";
    input9.style.backgroundColor = "white"

    input10.value = "";
    input10.style.backgroundColor = "white"

    input11.value = "";
    input11.style.backgroundColor = "white"

    input12.value = "";
    input12.style.backgroundColor = "white"

    input13.value = "";
    input13.style.backgroundColor = "white"

    input14.value = "";
    input14.style.backgroundColor = "white"
}




//Aca seleccionamos el boton comprobar y comprobamos si la suma es correcta
const bnt2 = document.querySelector(".btn2")
bnt2.addEventListener("click", comprobar);

function comprobar () {
    if (parseInt(suma1.textContent) + parseInt(suma2.textContent) === parseInt(input1.value)){
        input1.style.backgroundColor = 'green';
    }else{
        input1.style.backgroundColor = 'red';
    }

    if (parseInt(suma3.textContent) + parseInt(suma4.textContent) === parseInt(input2.value)){
        input2.style.backgroundColor = 'green';
    }else{
        input2.style.backgroundColor = 'red';
    }

    if (parseInt(suma5.textContent) + parseInt(suma6.textContent) === parseInt(input3.value)){
        input3.style.backgroundColor = 'green';
    }else{
        input3.style.backgroundColor = 'red';
    }

    if (parseInt(suma7.textContent) + parseInt(suma8.textContent) === parseInt(input4.value)){
        input4.style.backgroundColor = 'green';
    }else{
        input4.style.backgroundColor = 'red';
    }

    if (parseInt(suma9.textContent) + parseInt(suma10.textContent) === parseInt(input5.value)){
        input5.style.backgroundColor = 'green';
    }else{
        input5.style.backgroundColor = 'red';
    }

    if (parseInt(suma11.textContent) + parseInt(suma12.textContent) === parseInt(input6.value)){
        input6.style.backgroundColor = 'green';
    }else{
        input6.style.backgroundColor = 'red';
    }

    if (parseInt(suma13.textContent) + parseInt(suma14.textContent) === parseInt(input7.value)){
        input7.style.backgroundColor = 'green';
    }else{
        input7.style.backgroundColor = 'red';
    }

    if (parseInt(suma15.textContent) + parseInt(suma16.textContent) === parseInt(input8.value)){
        input8.style.backgroundColor = 'green';
    }else{
        input8.style.backgroundColor = 'red';
    }

     if (parseInt(suma17.textContent) + parseInt(suma18.textContent) + parseInt(suma19.textContent) === parseInt(input9.value)){
        input9.style.backgroundColor = 'green';
    }else{
        input9.style.backgroundColor = 'red';
    }

     if (parseInt(suma20.textContent) + parseInt(suma21.textContent) + parseInt(suma22.textContent) === parseInt(input10.value)){
        input10.style.backgroundColor = 'green';
    }else{
        input10.style.backgroundColor = 'red';
    }

     if (parseInt(suma23.textContent) + parseInt(suma24.textContent) + parseInt(suma25.textContent) === parseInt(input11.value)){
        input11.style.backgroundColor = 'green';
    }else{
        input11.style.backgroundColor = 'red';
    }

     if (parseInt(suma26.textContent) + parseInt(suma27.textContent) + parseInt(suma28.textContent) === parseInt(input12.value)){
        input12.style.backgroundColor = 'green';
    }else{
        input12.style.backgroundColor = 'red';
    }

     if (parseInt(suma29.textContent) + parseInt(suma30.textContent) + parseInt(suma31.textContent) === parseInt(input13.value)){
        input13.style.backgroundColor = 'green';
    }else{
        input13.style.backgroundColor = 'red';
    }

     if (parseInt(suma32.textContent) + parseInt(suma33.textContent) + parseInt(suma34.textContent) === parseInt(input14.value)){
        input14.style.backgroundColor = 'green';
    }else{
        input14.style.backgroundColor = 'red';
    }

   

    const alerta1 = document.createElement("p");
    alerta1.innerText = "Todas las sumas estan correctas";
    alerta1.style.color = "green";
    alerta1.classList.add("alerta1");

    const alerta2 = document.createElement("p");
    alerta2.innerText = "HAY UN ERROR EN ALGUNA SUMA"
    alerta2.style.color = "red"
    alerta2.classList.add("alerta2");
    const pagina = document.querySelector("body");

    const alertaMostrada1 = document.querySelector(".alerta1");
    const alertaMostrada2 = document.querySelector(".alerta2");
    
    if(!alertaMostrada2){
    if (input1.style.backgroundColor === "green" && input2.style.backgroundColor === "green" && input3.style.backgroundColor === "green" && input4.style.backgroundColor === "green"  && input5.style.backgroundColor === "green"  && input6.style.backgroundColor === "green"  && input7.style.backgroundColor === "green"  && input8.style.backgroundColor === "green"  && input9.style.backgroundColor === "green" && input10.style.backgroundColor === "green"  && input11.style.backgroundColor === "green"  && input12.style.backgroundColor === "green"  && input13.style.backgroundColor === "green"  && input14.style.backgroundColor === "green"){
        pagina.appendChild(alerta1)
    }else{
        pagina.appendChild(alerta2)
    }
    }

    setTimeout (() => {
        alerta1.remove();
        alerta2.remove();
    }, 3000)
    
    
    
    
}

