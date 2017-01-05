calculaAreaRectangulo = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value);
    this.metodoCompartido("EEEEEAH!");
}
calculaAreaTriangulo = function() {
    this.resultado.value = parseInt(this.alto.value) *
        parseInt(this.ancho.value) / 2;
    this.metodoCompartido("OOOOOH!");
}
calculaAreaElipse = function() {
        this.resultado.value = (parseInt(this.alto.value) / 2) *
            (parseInt(this.ancho.value) / 2) * Math.PI;
        this.metodoCompartido("OOOOOH!");
    }
    // Rectangulo
var Rectangulo = Figura.Heredar(calculaAreaRectangulo, "Rectangulo");
// Triangulo
var Triangulo = Figura.Heredar(calculaAreaTriangulo, "Triangulo");

var Elipse = Figura.Heredar(calculaAreaElipse, "Elipse");