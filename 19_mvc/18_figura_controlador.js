var FiguraControlador = function(vistaFigura, modeloCalculador) {
    vistaFigura.controlador = this;
    this.vista = vistaFigura;
    this.modelo = modeloCalculador;
}
FiguraControlador.prototype.calculaArea = function(ancho, alto) {
    var areaCalculada = this.modelo.calcularDeVerdadArea(ancho, alto);
    this.vista.mostrarArea(areaCalculada);
}
FiguraControlador.prototype.calculaPerimetro = function(ancho, alto) {
    var perimetroCalculado = this.modelo.calcularDeVerdadPerimetro(ancho, alto);
    this.vista.mostrarPerimetro(perimetroCalculado);
}
FiguraControlador.prototype.calculaVolumen = function(ancho, alto, tridim) {
    var volumenCalculado = this.modelo.calcularDeVerdadVolumen(ancho, alto, tridim);
    this.vista.mostrarVolumen(volumenCalculado);
}