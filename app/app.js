let calculate = ""; // inicializar contador
const arrayKey = ["0","1","2","3","4","5","6","7","8","9","/","*","+","-","(",")"]; // filtrar valores del teclado

const displayTop = document.getElementById('display__log');
const displayBot = document.getElementById('display__current')
const ac = document.querySelector('.btn__ac');
const erase = document.querySelector('.btn__erase');
const equal = document.querySelector('.btn__equal');
const teclado = document.querySelector('.container__buttons');


// funciones
const resolve = ()=> {
    displayTop.textContent = `${calculate} = `;
    displayBot.innerHTML = eval(calculate)
}
const deleteAll = () =>{
    calculate ="";
    displayTop.textContent = "Calcular";
    displayBot.textContent = "0";
}
const deleteOne = () => {
    calculate = calculate.slice(0,-1);
    // displayTop.textContent = `${calculate} = `;
    (calculate.length == 0) ? calculate = "0" : false;
    displayBot.textContent = calculate;
}
const press = (num)=>{
    (calculate == 0) ? calculate ="": false;
    calculate += num;
    displayBot.textContent = calculate
}
// Event Listener teclado 
window.addEventListener("keydown",(event)=>{
    arrayKey.includes(event.key)
    ? press(event.key)
    : event.key == "Enter"
    ? resolve()
    : event.code == "Backspace"
    ? deleteOne()
    : event.code == "Delete"
    ? deleteAll()
    : false
})

// Event Listener mouse o tactil
ac.addEventListener("click", ()=> deleteAll())
erase.addEventListener("click", ()=> deleteOne())
equal.addEventListener("click", ()=> resolve())
teclado.addEventListener("click", (event)=>{
    if (arrayKey.includes(event.target.textContent)){
        console.log(event.target.textContent)
        press(event.target.textContent)
    }
})


