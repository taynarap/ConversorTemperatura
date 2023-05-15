// ---------- BTN CALCULADORA ---------- 

function digitar(btn){
    let ecra = document.getElementById("valor");

    if(ecra.innerHTML.length < 10){
        if (btn == "."){
            if(!ecra.innerHTML.includes(".")){
                ecra.innerHTML += btn;
            }
        } else {
            ecra.innerHTML += btn;
        }
    }

    resultado(parseFloat(ecra.innerHTML));
}

// ---------- CALCULOS PARA K E F ---------- 

function resultado(valor){
    let resultado = document.getElementById("resultado");
    let celsius = parseFloat(valor);
    
    
    if(!isNaN(celsius)){
        let k = celsius + 273;
        let f = (celsius * 1.8 )+32;
        resultado.innerHTML= celsius+ " ºC = " + f.toFixed(2) + " ºF <br><br>";
        resultado.innerHTML+= celsius + " ºC = " + k.toFixed(2) + " ºK <br>";
    }
    else{
        resultado.innerHTML="";
    }
}

// ---------- BTN AC ---------- 

function limparTudo(){
    document.getElementById("valor").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
}

// ---------- BTN DE ---------- 

function limparUltimo(){
    let ecra = document.getElementById("valor");

    ecra.innerHTML = ecra.innerHTML.toString().slice(0,-1);
    resultado(parseFloat(ecra.innerHTML));
}