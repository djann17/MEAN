function FactoriaFiguras() {}

FactoriaFiguras.prototype.vistaFigura = FiguraVista;
FactoriaFiguras.prototype.modeloFigura = Modelo.Rectangulo;

FactoriaFiguras.prototype.crearFigura = function(opc) {
    switch (opc.vista) {
        case "v2":
            this.vistaFigura = FiguraVistaV2;
            break;
        default:
            this.vistaFigura = FiguraVista;
    }
    var padreDom = document.getElementById(opc.padreDom);
    var nVista = new this.vistaFigura(padreDom, opc.tipo);

    switch (opc.tipo) {
        case "rectangulo":
            this.modeloFigura = Modelo.Rectangulo;
            break;
        case "triangulo":
            this.modeloFigura = Modelo.Triangulo;
            break;
        case "elipse":
            this.modeloFigura = Modelo.Elipse;
            break;
        case "huevo":
            this.modeloFigura = Modelo.Huevo;
            break;
    }
    return new FiguraControlador(nVista, this.modeloFigura);
}