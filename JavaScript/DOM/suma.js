const d = document;

export default function suma(valor, panel){
    let $valor = d.querySelectorAll(valor),
        $panel = d.getElementById(panel),
        cont = 0;
    d.addEventListener("click", (e)=>{
        $panel.innerText += e.target.innerText;
    })
}