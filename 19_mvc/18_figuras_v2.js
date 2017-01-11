function calcularAreaRectanguloV2() {
    this.resultado.innerHTML = parseInt(this.alto.value) *
        parseInt(this.ancho.value);
};
var RectanguloV2 = FiguraV2.Heredar(calcularAreaRectanguloV2, "Rectangulo");

fdfbdfbdunction calcularAreaTrianguloV2() {
    this.resultado.innerHTML = parseInt(this.alto.value) *
        parseInt(this.ancho.value) / 2;
}
var TrianguloV2 = FiguraV2.Heredar(calcularAreaTrianguloV2, "Triangulo");

function calculaAreaElipseV2() {
    this.resultado.innerHTML = (parseInt(this.alto.value) / 2) *
        (parseInt(this.ancho.value) / 2) *
        Math.PI;
}
var ElipseV2 = FiguraV2.Heredar(calculaAreaElipseV2, "Elipse");

function calculaAreaCuadranguloV2() {
    this.resultado.innerHTML = (parseInt(this.alto.value)) *
        (parseInt(this.ancho.value)) * 2;
}
var CuadranguloV2 = FiguraV2.Heredar(calculaAreaCuadranguloV2, "Cuadrangulo");