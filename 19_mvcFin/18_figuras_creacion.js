/*var padreCalcRectangulo = document.getElementById("padre-Calc-Rectangulo");
var padreCalcTriangulo = document.getElementById("padre-Calc-Triangulo");
var padreCalcElipse = document.getElementById("padre-Calc-Elipse");
var padreCalcHuevo = document.getElementById("padre-Calc-Huevo");

var vistaElipse = new FiguraVista(padreCalcElipse, "Elipse");
var vistaElipse2 = new FiguraVistaV2(padreCalcElipse, "Elipse");

var controlElipse = new FiguraControlador(vistaElipse, Modelo.Elipse);
var controlElipse2 = new FiguraControlador(vistaElipse2, Modelo.Elipse);
*/

var miFactoria = new FactoriaFiguras();

var controlRectangulo = miFactoria.crearFigura({ padreDom: "padre-Calc-Rectangulo", vista: "v1", tipo: "rectangulo" });