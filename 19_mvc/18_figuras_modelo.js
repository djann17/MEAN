	function calcularDeVerdadAreaTriangulo(ancho, alto) {
        return ancho * alto / 2;
	}
	function calcularDeVerdadVolumenTriangulo(ancho, alto, tridim) {
		return (alto * 2 + ancho * 2 + tridim * 2)/1.5;
    }

var Modelo = {
    Rectangulo: {
        calcularDeVerdadArea: function(ancho, alto) { return ancho * alto; },
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho * 2; },
		calcularDeVerdadVolumen: function(ancho, alto, tridim) { return alto * 2 + ancho * 2 + tridim *2; }
    },
    Elipse: {
        calcularDeVerdadArea: function(ancho, alto) {
            return (ancho / 2) * (alto / 2) * Math.PI;
        },
        calcularDeVerdadPerimetro: function(ancho, alto) {
            return Math.PI * 2 * Math.sqrt((alto * alto + ancho * ancho) / 2);
        },
		calcularDeVerdadVolumen: function(ancho, alto, tridim) { return alto * alto + ancho * ancho + tridim * tridim; }
    },
    TrianguloEquilatero: {
        calcularDeVerdadArea: calcularDeVerdadAreaTriangulo,
		calcularDeVerdadVolumen: calcularDeVerdadVolumenTriangulo,
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 3; }
    },
    TrianguloIsosceles: {
        calcularDeVerdadArea: this.calcularDeVerdadAreaTriangulo,
		calcularDeVerdadVolumen: this.calcularDeVerdadVolumenTriangulo,
        calcularDeVerdadPerimetro: function(ancho, alto) { return alto * 2 + ancho; }
    },
	Cuadrangulo: {
		calcularDeVerdadArea: function(ancho, alto) { return ancho * alto * 2; },
        calcularDeVerdadPerimetro: function(ancho, alto) { return (alto * 2 + ancho * 2)*2; },
		calcularDeVerdadVolumen: function(ancho, alto, tridim) {
			return (alto * 2 + ancho * 2 + tridim * 2)*2; 
		}
	}
};
