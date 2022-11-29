function calcularAnios(day,moth,year){
    let actual = new Date();
    let actual_anio = actual.getFullYear();
    let actual_mes = actual.getMonth()+1;
    let actial_dia = actual.getDate();
    let edad = (actual_anio - year);
    if (actual_mes < moth){
        edad--;
    }
    if( moth == actual_mes && actial_dia < day){
        edad--;
    }
    return edad

}
function calcular_mes(day,moth){
    let actual = new Date();
    let actual_anio = actual.getFullYear();
    let actual_mes = actual.getMonth()+1;
    let actial_dia = actual.getDate();
    let meses =0;
    if(actual_mes > moth){
        meses = actual_mes - moth;
    }
    if (actual_mes < moth){
        meses =  12 -(moth-actual_mes);
    }
    if((actual_mes== moth)&&(day>actial_dia)){
        meses=11
    }
    return meses
    
}

function calcular_dia(day){
    let actual = new Date();
    let actual_anio = actual.getFullYear();
    let actual_mes = actual.getMonth()+1;
    let actial_dia = actual.getDate();
    let dias =0;
    if (actial_dia > day){
        dias= actial_dia -day;
    }
    if (actial_dia < day){
        ultimo_dia_mes = new Date(actial_dia, actual_mes, 0);
        dias = ultimo_dia_mes.getDate() - (day-actial_dia);
    }
    return dias;
}

function presentar(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;
    var edad_anios = calcularAnios(dia, mes, anio);
    var meses = calcular_mes(dia,mes);
    var dias = calcular_dia(dia);
    let ubuR = document.getElementById("resultado_edad");
    ubuR.innerHTML = `<p> tiene ${edad_anios} años con ${meses} meses y ${dias} dias </p>`;
    
    
}