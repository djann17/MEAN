var padreCalcRectangulo = document.getElementById("padre-Calc-Rectangulo");
var padreCalcTriangulo = document.getElementById("padre-Calc-Triangulo");
var padreCalcElipse = document.getElementById("padre-Calc-Elipse");
var padreCalcCuadrangulo = document.getElementById("padre-Calc-Cuadrangulo");


var vistaRectangulo = new FiguraVistaV2(padreCalcRectangulo, "Rectangulo");
var vistaTriangulo = new FiguraVistaV2(padreCalcTriangulo, "Triangulo");
var vistaElipse = new FiguraVistaV2(padreCalcElipse, "Elipse");
var vistaCuadrangulo = new FiguraVistaV2(padreCalcCuadrangulo, "Cuadrangulo");

var controlRectangulo = new FiguraControlador(vistaRectangulo, Modelo.Rectangulo);
var controlTriangulo = new FiguraControlador(vistaTriangulo, Modelo.TrianguloEquilatero);
var controlElipse = new FiguraControlador(vistaElipse, Modelo.Elipse);
var controlCuadrangulo = new FiguraControlador(vistaCuadrangulo, Modelo.Cuadrangulo);