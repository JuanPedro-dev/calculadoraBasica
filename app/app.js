let calculate = "";

const press = (num)=>{
    calculate += num;
    document.getElementById("display__current").innerHTML = calculate
}

const equal = ()=>{
    document.getElementById("display__log").innerHTML = `${calculate} = `;
    document.getElementById("display__current").innerHTML = eval(calculate);
}
console.log("gola");

const eraseAll = ()=>{
    calculate="";
    document.getElementById("display__log").innerHTML = "Calcular";
    document.getElementById("display__current").innerHTML = 0;
}

const erase = ()=>{
    calculate = calculate.slice(0,-1);
    document.getElementById("display__log").innerHTML = `${calculate} = `;
    document.getElementById("display__current").innerHTML = calculate;
}


