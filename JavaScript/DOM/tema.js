export default function tema(btnTema){
    const d = document,
        $style = d.documentElement.style;
    let temp = 0;
    d.addEventListener("click", e=>{
        const $btnTema = d.querySelector(btnTema);
        if (e.target.matches(btnTema)) {
            temp++;
            if (temp === 1) {
                $btnTema.classList.toggle("contenido__div--btnTemaTraslate100");
                $style.setProperty("--primer-color-fondo","rgb(224, 224, 226)");
                $style.setProperty("--primer-color-secundario", "rgb(189, 187, 187)");
                $style.setProperty("--Primer-color-igual", "rgb(231, 114, 78)");
                $style.setProperty("--primer-color-sombra-numeros", "rgb(192, 183, 183)");
                $style.setProperty("--primer-color-sombra-DelReset", "rgb(54, 151, 106)");
                $style.setProperty("--primer-color-sombra-igual", "rgb(202, 98, 66)");
                $style.setProperty("--primer-color-letras", "rgb(0, 0, 0)");
                $style.setProperty("--color-letraBtn", "rgb(0, 0, 0)");
                $style.setProperty("--color-DR", "rgb(22, 163, 140)");
                $style.setProperty("--color-panel", "rgb(255, 255, 255)");
            }
            else if (temp === 2) {
                $btnTema.classList.remove("contenido__div--btnTemaTraslate100");
                $btnTema.classList.toggle("contenido__div--btnTemaTraslate180");
                $style.setProperty("--primer-color-fondo", "rgb(42, 0, 82)");
                $style.setProperty("--primer-color-secundario", "rgb(62, 0, 121)");
                $style.setProperty("--Primer-color-igual", "rgb(0, 238, 255)");
                $style.setProperty("--primer-color-sombra-numeros", "rgb(117, 8, 219)");
                $style.setProperty("--primer-color-sombra-DelReset", "rgb(117, 8, 219)");
                $style.setProperty("--primer-color-sombra-igual", "rgb(107, 245, 255)");
                $style.setProperty("--primer-color-letras", "rgb(228, 224, 0)");
                $style.setProperty("--color-letraBtn", "rgb(228, 224, 0)");
                $style.setProperty("--color-DR", "rgb(92, 0, 179)");
                $style.setProperty("--color-panel", "rgb(92, 0, 179)");
                $style.setProperty("--color-btnNumeros", "rgb(82, 17, 143)");
                $style.setProperty("--color-letraIgual", "rgb(0, 0, 0)");
            }
            else if (temp === 3) {
                $btnTema.classList.remove("contenido__div--btnTemaTraslate180");
                temp = 0;
                $style.setProperty("--primer-color-fondo", "rgb(90, 101, 153)");
                $style.setProperty("--primer-color-secundario", "rgb(59, 68, 116)");
                $style.setProperty("--Primer-color-igual", "rgb(230, 49, 49)");
                $style.setProperty("--primer-color-sombra-numeros", "rgb(192, 183, 183)");
                $style.setProperty("--primer-color-sombra-DelReset", "rgb(112, 117, 153)");
                $style.setProperty("--primer-color-sombra-igual", "rgb(151, 0, 0)");
                $style.setProperty("--primer-color-letras", "rgb(255, 255, 255)");
                $style.setProperty("--color-letraBtn", "rgb(90, 101, 153)");
                $style.setProperty("--color-DR", "rgb(90, 101, 153)");
                $style.setProperty("--color-panel", "rgb(41, 49, 92)");
                $style.setProperty("--color-btnNumeros", "rgb(255, 255, 255)");
                $style.setProperty("--color-letraIgual", "rgb(255, 255, 255)");
                $style.setProperty("--color-letraDRI", "rgb(255, 255, 255)");
            }
        }
    })
}