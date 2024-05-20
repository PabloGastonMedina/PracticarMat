 /*SELECCIONAMOS LOS CASILLEROS DE LA PRIMER TABLA*/
 const casillero1 = document.querySelector(".td1");
 const casillero2 = document.querySelector(".td2");
 const casillero3 = document.querySelector(".td3");
 const casillero4 = document.querySelector(".td4");
 const casillero5 = document.querySelector(".td5");
 const casillero6 = document.querySelector(".td6");
 const casillero7 = document.querySelector(".td7");
 const casillero8 = document.querySelector(".td8");
 const casillero9 = document.querySelector(".td9");
 const casillero10 = document.querySelector(".td10");
 const casillero11 = document.querySelector(".td11");
 const casillero12 = document.querySelector(".td12");
 const casillero13 = document.querySelector(".td13");
 const casillero14 = document.querySelector(".td14");
 const casillero15 = document.querySelector(".td15");
 const casillero16 = document.querySelector(".td16");
 const casillero17 = document.querySelector(".td17");
 const casillero18 = document.querySelector(".td18");
 const casillero19 = document.querySelector(".td19");
 const casillero20 = document.querySelector(".td20");
 const casillero21 = document.querySelector(".td21");
 const casillero22 = document.querySelector(".td22");
 const casillero23 = document.querySelector(".td23");
 const casillero24 = document.querySelector(".td24");
 const casillero25 = document.querySelector(".td25");
 const casillero26 = document.querySelector(".td26");
 const casillero27 = document.querySelector(".td27");
 const casillero28 = document.querySelector(".td28");
 const casillero29 = document.querySelector(".td29");
 const casillero30 = document.querySelector(".td30");
 const casillero31 = document.querySelector(".td31");
 const casillero32 = document.querySelector(".td32");

const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const input3 = document.querySelector(".input3")
const input4 = document.querySelector(".input4")
const input5 = document.querySelector(".input5")
const input6 = document.querySelector(".input6")
const input7 = document.querySelector(".input7")
const input8 = document.querySelector(".input8")
const input9 = document.querySelector(".input9")
const input10 = document.querySelector(".input10")
const input11= document.querySelector(".input11")
const input12 = document.querySelector(".input12")
const input13 = document.querySelector(".input13")
const input14 = document.querySelector(".input14")
const input15 = document.querySelector(".input15")
const input16 = document.querySelector(".input16")
const input17 = document.querySelector(".input17")
const input18 = document.querySelector(".input18")
const input19 = document.querySelector(".input19")
const input20 = document.querySelector(".input20")
const input21 = document.querySelector(".input21")
const input22 = document.querySelector(".input22")
const input23 = document.querySelector(".input23")
const input24 = document.querySelector(".input24")
const input25 = document.querySelector(".input25")
const input26 = document.querySelector(".input26")
const input27 = document.querySelector(".input27")
const input28 = document.querySelector(".input28")
const input29 = document.querySelector(".input29")
const input30 = document.querySelector(".input30")
const input31 = document.querySelector(".input31")
const input32 = document.querySelector(".input32")


/*PONEMOS UN NUEMRO AL AZAR EN CADA CASILLERO*/
 casillero1.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero2.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero3.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero4.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero5.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero6.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero7.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero8.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero9.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero10.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero11.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero12.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero13.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero14.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero15.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero16.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero17.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero18.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero19.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero20.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero21.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero22.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero23.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero24.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero25.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero26.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero27.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero28.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero29.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero30.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero31.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero32.textContent = Math.floor(Math.random() * (1000 - 0 + 1));




 /*ACA SELECCIONAMOS EL BOTON Y ACTUALIZAMOS LOS NUMEROS CADA VEZ QEU APRETAMOS*/
 const bntReinicio1 = document.querySelector(".btn1")
 bntReinicio1.addEventListener("click", juegoNuevo);

 function juegoNuevo(){
 casillero1.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero2.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero3.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero4.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero5.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero6.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero7.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero8.textContent = Math.floor(Math.random() * (1000- 0 + 1));
 casillero9.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero10.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero11.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero12.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero13.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero14.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero15.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero16.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero17.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero18.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero19.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero20.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero21.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero22.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero23.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero24.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero25.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero26.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero27.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero28.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero29.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero30.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero31.textContent = Math.floor(Math.random() * (1000 - 0 + 1));
 casillero32.textContent = Math.floor(Math.random() * (1000 - 0 + 1));


 reiniciarJuego();
}

function reiniciarJuego (){
    input1.value =" ";
    input2.value =" ";
    input3.value =" ";
    input4.value =" ";
    input5.value =" ";
    input6.value =" ";
    input7.value =" ";
    input8.value =" ";
    input9.value =" ";
    input10.value =" ";
    input11.value =" ";
    input12.value =" ";
    input13.value =" ";
    input14.value =" ";
    input15.value =" ";
    input16.value =" ";
    input17.value =" ";
    input18.value =" ";
    input19.value =" ";
    input20.value =" ";
    input21.value =" ";
    input22.value =" ";
    input23.value =" ";
    input24.value =" ";
    input25.value =" ";
    input26.value =" ";
    input27.value =" ";
    input28.value =" ";
    input29.value =" ";
    input30.value =" ";
    input31.value =" ";
    input32.value =" ";

    input1.style.backgroundColor = "white";
    input2.style.backgroundColor = "white";
    input3.style.backgroundColor = "white";
    input4.style.backgroundColor = "white";
    input5.style.backgroundColor = "white";
    input6.style.backgroundColor = "white";
    input7.style.backgroundColor = "white";
    input8.style.backgroundColor = "white";
    input9.style.backgroundColor = "white";
    input10.style.backgroundColor = "white";
    input11.style.backgroundColor = "white";
    input12.style.backgroundColor = "white";
    input13.style.backgroundColor = "white";
    input14.style.backgroundColor = "white";
    input15.style.backgroundColor = "white";
    input16.style.backgroundColor = "white";
    input17.style.backgroundColor = "white";
    input18.style.backgroundColor = "white";
    input19.style.backgroundColor = "white";
    input20.style.backgroundColor = "white";
    input21.style.backgroundColor = "white";
    input22.style.backgroundColor = "white";
    input23.style.backgroundColor = "white";
    input24.style.backgroundColor = "white";
    input25.style.backgroundColor = "white";
    input26.style.backgroundColor = "white";
    input27.style.backgroundColor = "white";
    input28.style.backgroundColor = "white";
    input29.style.backgroundColor = "white";
    input30.style.backgroundColor = "white";
    input31.style.backgroundColor = "white";
    input32.style.backgroundColor = "white";

}



const bnt2 = document.querySelector(".btn2")
bnt2.addEventListener("click", comprobar);

function comprobar() {
    // Comparamos los números
    //Casillero1
    if(parseInt(casillero1.textContent) % 2 === 0){
    if(parseInt(input1.value) === parseInt(casillero1.textContent) / 2) {
        input1.style.backgroundColor = 'green';
    }else{
        input1.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero1.textContent) % 2 !== 0){
    if(parseInt(input1.value) === parseInt(casillero1.textContent) * 2) {
        input1.style.backgroundColor = 'green';
    }else{
        input1.style.backgroundColor="red";
    }
   }

       //Casillero2
    if(parseInt(casillero2.textContent) % 2 === 0){
    if(parseInt(input2.value) === parseInt(casillero2.textContent) / 2) {
        input2.style.backgroundColor = 'green';
    }else{
        input2.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero2.textContent) % 2 !== 0){
    if(parseInt(input2.value) === parseInt(casillero2.textContent) * 2) {
        input2.style.backgroundColor = 'green';
    }else{
        input2.style.backgroundColor="red";
    }
   }

       //Casillero3
    if(parseInt(casillero3.textContent) % 2 === 0){
    if(parseInt(input3.value) === parseInt(casillero3.textContent) / 2) {
        input3.style.backgroundColor = 'green';
    }else{
        input3.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero3.textContent) % 2 !== 0){
    if(parseInt(input3.value) === parseInt(casillero3.textContent) * 2) {
        input3.style.backgroundColor = 'green';
    }else{
        input3.style.backgroundColor="red";
    }
   }

       //Casillero4
    if(parseInt(casillero4.textContent) % 2 === 0){
    if(parseInt(input4.value) === parseInt(casillero4.textContent) / 2) {
        input4.style.backgroundColor = 'green';
    }else{
        input4.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero4.textContent) % 2 !== 0){
    if(parseInt(input4.value) === parseInt(casillero4.textContent) * 2) {
        input4.style.backgroundColor = 'green';
    }else{
        input4.style.backgroundColor="red";
    }
   }
      //Casillero5
    if(parseInt(casillero5.textContent) % 2 === 0){
    if(parseInt(input5.value) === parseInt(casillero5.textContent) / 2) {
        input5.style.backgroundColor = 'green';
    }else{
        input5.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero5.textContent) % 2 !== 0){
    if(parseInt(input5.value) === parseInt(casillero5.textContent) * 2) {
        input5.style.backgroundColor = 'green';
    }else{
        input5.style.backgroundColor="red";
    }
   }
        //Casillero6
    if(parseInt(casillero6.textContent) % 2 === 0){
    if(parseInt(input6.value) === parseInt(casillero6.textContent) / 2) {
        input6.style.backgroundColor = 'green';
    }else{
        input6.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero6.textContent) % 2 !== 0){
    if(parseInt(input6.value) === parseInt(casillero6.textContent) * 2) {
        input6.style.backgroundColor = 'green';
    }else{
        input6.style.backgroundColor="red";
    }
   }
        //Casillero7
    if(parseInt(casillero7.textContent) % 2 === 0){
    if(parseInt(input7.value) === parseInt(casillero7.textContent) / 2) {
        input7.style.backgroundColor = 'green';
    }else{
        input7.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero7.textContent) % 2 !== 0){
    if(parseInt(input7.value) === parseInt(casillero7.textContent) * 2) {
        input7.style.backgroundColor = 'green';
    }else{
        input7.style.backgroundColor="red";
    }
   }
        //Casillero8
    if(parseInt(casillero8.textContent) % 2 === 0){
    if(parseInt(input8.value) === parseInt(casillero8.textContent) / 2) {
        input8.style.backgroundColor = 'green';
    }else{
        input8.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero8.textContent) % 2 !== 0){
    if(parseInt(input8.value) === parseInt(casillero8.textContent) * 2) {
        input8.style.backgroundColor = 'green';
    }else{
        input8.style.backgroundColor="red";
    }
   }
        //Casillero9
    if(parseInt(casillero9.textContent) % 2 === 0){
    if(parseInt(input9.value) === parseInt(casillero9.textContent) / 2) {
        input9.style.backgroundColor = 'green';
    }else{
        input9.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero9.textContent) % 2 !== 0){
    if(parseInt(input9.value) === parseInt(casillero9.textContent) * 2) {
        input9.style.backgroundColor = 'green';
    }else{
        input9.style.backgroundColor="red";
    }
   }
     //Casillero10
    if(parseInt(casillero10.textContent) % 2 === 0){
    if(parseInt(input10.value) === parseInt(casillero10.textContent) / 2) {
        input10.style.backgroundColor = 'green';
    }else{
        input10.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero10.textContent) % 2 !== 0){
    if(parseInt(input10.value) === parseInt(casillero10.textContent) * 2) {
        input10.style.backgroundColor = 'green';
    }else{
        input10.style.backgroundColor="red";
    }
   }
    //Casillero11
    if(parseInt(casillero11.textContent) % 2 === 0){
    if(parseInt(input11.value) === parseInt(casillero11.textContent) / 2) {
        input11.style.backgroundColor = 'green';
    }else{
        input11.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero11.textContent) % 2 !== 0){
    if(parseInt(input11.value) === parseInt(casillero11.textContent) * 2) {
        input11.style.backgroundColor = 'green';
    }else{
        input11.style.backgroundColor="red";
    }
   }
    //Casillero12
    if(parseInt(casillero12.textContent) % 2 === 0){
    if(parseInt(input12.value) === parseInt(casillero12.textContent) / 2) {
        input12.style.backgroundColor = 'green';
    }else{
        input12.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero12.textContent) % 2 !== 0){
    if(parseInt(input12.value) === parseInt(casillero12.textContent) * 2) {
        input12.style.backgroundColor = 'green';
    }else{
        input12.style.backgroundColor="red";
    }
   }
    //Casillero13
    if(parseInt(casillero13.textContent) % 2 === 0){
    if(parseInt(input13.value) === parseInt(casillero13.textContent) / 2) {
        input13.style.backgroundColor = 'green';
    }else{
        input13.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero13.textContent) % 2 !== 0){
    if(parseInt(input13.value) === parseInt(casillero13.textContent) * 2) {
        input13.style.backgroundColor = 'green';
    }else{
        input13.style.backgroundColor="red";
    }
   }
           //Casillero14
    if(parseInt(casillero14.textContent) % 2 === 0){
    if(parseInt(input14.value) === parseInt(casillero14.textContent) / 2) {
        input14.style.backgroundColor = 'green';
    }else{
        input14.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero14.textContent) % 2 !== 0){
    if(parseInt(input14.value) === parseInt(casillero14.textContent) * 2) {
        input14.style.backgroundColor = 'green';
    }else{
        input14.style.backgroundColor="red";
    }
   }
        //Casillero15
    if(parseInt(casillero15.textContent) % 2 === 0){
    if(parseInt(input15.value) === parseInt(casillero15.textContent) / 2) {
        input15.style.backgroundColor = 'green';
    }else{
        input15.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero15.textContent) % 2 !== 0){
    if(parseInt(input15.value) === parseInt(casillero15.textContent) * 2) {
        input15.style.backgroundColor = 'green';
    }else{
        input15.style.backgroundColor="red";
    }
   }
        //Casillero16
    if(parseInt(casillero16.textContent) % 2 === 0){
    if(parseInt(input16.value) === parseInt(casillero16.textContent) / 2) {
        input16.style.backgroundColor = 'green';
    }else{
        input16.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero16.textContent) % 2 !== 0){
    if(parseInt(input16.value) === parseInt(casillero16.textContent) * 2) {
        input16.style.backgroundColor = 'green';
    }else{
        input16.style.backgroundColor="red";
    }
   }
           //Casillero17
    if(parseInt(casillero17.textContent) % 2 === 0){
    if(parseInt(input17.value) === parseInt(casillero17.textContent) / 2) {
        input17.style.backgroundColor = 'green';
    }else{
        input17.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero17.textContent) % 2 !== 0){
    if(parseInt(input17.value) === parseInt(casillero17.textContent) * 2) {
        input17.style.backgroundColor = 'green';
    }else{
        input17.style.backgroundColor="red";
    }
   }
          //Casillero18
    if(parseInt(casillero18.textContent) % 2 === 0){
    if(parseInt(input18.value) === parseInt(casillero18.textContent) / 2) {
        input18.style.backgroundColor = 'green';
    }else{
        input18.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero18.textContent) % 2 !== 0){
    if(parseInt(input18.value) === parseInt(casillero18.textContent) * 2) {
        input18.style.backgroundColor = 'green';
    }else{
        input18.style.backgroundColor="red";
    }
   }
          //Casillero19
    if(parseInt(casillero19.textContent) % 2 === 0){
    if(parseInt(input19.value) === parseInt(casillero19.textContent) / 2) {
        input19.style.backgroundColor = 'green';
    }else{
        input19.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero19.textContent) % 2 !== 0){
    if(parseInt(input19.value) === parseInt(casillero19.textContent) * 2) {
        input19.style.backgroundColor = 'green';
    }else{
        input19.style.backgroundColor="red";
    }
   }
          //Casillero20
    if(parseInt(casillero20.textContent) % 2 === 0){
    if(parseInt(input20.value) === parseInt(casillero20.textContent) / 2) {
        input20.style.backgroundColor = 'green';
    }else{
        input20.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero20.textContent) % 2 !== 0){
    if(parseInt(input20.value) === parseInt(casillero20.textContent) * 2) {
        input20.style.backgroundColor = 'green';
    }else{
        input20.style.backgroundColor="red";
    }
   }
   //Casillero21
    if(parseInt(casillero21.textContent) % 2 === 0){
    if(parseInt(input21.value) === parseInt(casillero21.textContent) / 2) {
        input21.style.backgroundColor = 'green';
    }else{
        input21.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero21.textContent) % 2 !== 0){
    if(parseInt(input21.value) === parseInt(casillero21.textContent) * 2) {
        input21.style.backgroundColor = 'green';
    }else{
        input21.style.backgroundColor="red";
    }
   }
   //Casillero22
    if(parseInt(casillero22.textContent) % 2 === 0){
    if(parseInt(input22.value) === parseInt(casillero22.textContent) / 2) {
        input22.style.backgroundColor = 'green';
    }else{
        input22.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero22.textContent) % 2 !== 0){
    if(parseInt(input22.value) === parseInt(casillero22.textContent) * 2) {
        input22.style.backgroundColor = 'green';
    }else{
        input22.style.backgroundColor="red";
    }
   }
   //Casillero23
    if(parseInt(casillero23.textContent) % 2 === 0){
    if(parseInt(input23.value) === parseInt(casillero23.textContent) / 2) {
        input23.style.backgroundColor = 'green';
    }else{
        input23.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero23.textContent) % 2 !== 0){
    if(parseInt(input23.value) === parseInt(casillero23.textContent) * 2) {
        input23.style.backgroundColor = 'green';
    }else{
        input23.style.backgroundColor="red";
    }
   }
   //Casillero24
    if(parseInt(casillero24.textContent) % 2 === 0){
    if(parseInt(input24.value) === parseInt(casillero24.textContent) / 2) {
        input24.style.backgroundColor = 'green';
    }else{
        input24.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero24.textContent) % 2 !== 0){
    if(parseInt(input24.value) === parseInt(casillero24.textContent) * 2) {
        input24.style.backgroundColor = 'green';
    }else{
        input24.style.backgroundColor="red";
    }
   }
   //Casillero25
    if(parseInt(casillero25.textContent) % 2 === 0){
    if(parseInt(input25.value) === parseInt(casillero25.textContent) / 2) {
        input25.style.backgroundColor = 'green';
    }else{
        input25.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero25.textContent) % 2 !== 0){
    if(parseInt(input25.value) === parseInt(casillero25.textContent) * 2) {
        input25.style.backgroundColor = 'green';
    }else{
        input25.style.backgroundColor="red";
    }
   }
   //Casillero26
    if(parseInt(casillero26.textContent) % 2 === 0){
    if(parseInt(input26.value) === parseInt(casillero26.textContent) / 2) {
        input26.style.backgroundColor = 'green';
    }else{
        input26.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero26.textContent) % 2 !== 0){
    if(parseInt(input26.value) === parseInt(casillero26.textContent) * 2) {
        input26.style.backgroundColor = 'green';
    }else{
        input26.style.backgroundColor="red";
    }
   }
   //Casillero27
    if(parseInt(casillero27.textContent) % 2 === 0){
    if(parseInt(input27.value) === parseInt(casillero27.textContent) / 2) {
        input27.style.backgroundColor = 'green';
    }else{
        input27.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero27.textContent) % 2 !== 0){
    if(parseInt(input27.value) === parseInt(casillero27.textContent) * 2) {
        input27.style.backgroundColor = 'green';
    }else{
        input27.style.backgroundColor="red";
    }
   }
   //Casillero28
    if(parseInt(casillero28.textContent) % 2 === 0){
    if(parseInt(input28.value) === parseInt(casillero28.textContent) / 2) {
        input28.style.backgroundColor = 'green';
    }else{
        input28.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero28.textContent) % 2 !== 0){
    if(parseInt(input28.value) === parseInt(casillero28.textContent) * 2) {
        input28.style.backgroundColor = 'green';
    }else{
        input28.style.backgroundColor="red";
    }
   }
   //Casillero29
    if(parseInt(casillero29.textContent) % 2 === 0){
    if(parseInt(input29.value) === parseInt(casillero29.textContent) / 2) {
        input29.style.backgroundColor = 'green';
    }else{
        input29.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero29.textContent) % 2 !== 0){
    if(parseInt(input29.value) === parseInt(casillero29.textContent) * 2) {
        input29.style.backgroundColor = 'green';
    }else{
        input29.style.backgroundColor="red";
    }
   }
   //Casillero30
    if(parseInt(casillero30.textContent) % 2 === 0){
    if(parseInt(input30.value) === parseInt(casillero30.textContent) / 2) {
        input30.style.backgroundColor = 'green';
    }else{
        input30.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero30.textContent) % 2 !== 0){
    if(parseInt(input30.value) === parseInt(casillero30.textContent) * 2) {
        input30.style.backgroundColor = 'green';
    }else{
        input30.style.backgroundColor="red";
    }
   }
   //Casillero31
    if(parseInt(casillero31.textContent) % 2 === 0){
    if(parseInt(input31.value) === parseInt(casillero31.textContent) / 2) {
        input31.style.backgroundColor = 'green';
    }else{
        input31.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero31.textContent) % 2 !== 0){
    if(parseInt(input31.value) === parseInt(casillero31.textContent) * 2) {
        input31.style.backgroundColor = 'green';
    }else{
        input31.style.backgroundColor="red";
    }
   }
   //Casillero32
    if(parseInt(casillero32.textContent) % 2 === 0){
    if(parseInt(input32.value) === parseInt(casillero32.textContent) / 2) {
        input32.style.backgroundColor = 'green';
    }else{
        input32.style.backgroundColor = "red"
    }
   }

    if(parseInt(casillero32.textContent) % 2 !== 0){
    if(parseInt(input32.value) === parseInt(casillero32.textContent) * 2) {
        input32.style.backgroundColor = 'green';
    }else{
        input32.style.backgroundColor="red";
    }
   }
}




