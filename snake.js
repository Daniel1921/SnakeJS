//variables globales
var velocidad = 80;
var tamano = 10;
//var camilo = 100;

class objeto {
	constructor(){
		this.tamano = tamano;

	}
	choque(objeto){
		var difx = math.abs(this.x - obj.x);
		var dify = math.abs(this.y - obj.y);
		if(difx >= 0 && difx < tamano && dify >=0 && dify < tamano){
			return true;
		} else {
			return false;
		}
	}
}


class Cola  extends  objeto{
	constructor(x,y){
		super();
		this.x = x;
		this.y = y;

	}
// por aqui quedamos 
	dibujar(ctx){
		ctx.fillStyle="#dc0bf9";
		ctx.fillRect(this.x, this.y, this.tamano,this.tamano);
	}

	setxy(x,y){
		this.x = x;
		this.y = y;
	}

}



class Comida extends objeto {

	constructor(){
		super();
		this.x = this.generar();
		this.y = this.generar();
	}

 	generar(){
 		var num = (Math.floor(Math.random() * 59 ))*10;
 		return num;
 	}

 	colocar(){
 		this.x = this.generar();
 		this.y = this.generar();
 	}

 	dibujar(ctx){
 		ctx.fillStyle="#996633";
		ctx.fillRect(this.x, this.y, this.tamano,this.tamano);
 	}

}
//objetos del juego

var cabeza = new Cola(20,20);
var comida = new Comida();
var ejex = true;
var ejey = true;
var xdir = 0;
var ydir = 0;

function movimiento(){
	var nx = cabeza.x+xdir;
	var ny = cabeza.y+ydir;
	cabeza.setxy(nx,ny)

}

function control(event){
	var cod = event.keyCode;

	if(ejex){
		if( cod == 38) {
			ydir = -tamano;
			xdir = 0;
			ejex = false;
			ejey = true;
			}

		if ( cod == 40){
			ydir = tamano;
			xdir = 0;
			ejex = false;
			ejey = true;
		}

	}
	if(ejey){

		if (cod == 37){
			xdir = - tamano;
			ydir = 0;
			ejey = false;
			ejex = true;
		}
	 	
	 if(cod == 39){

	 	xdir = tamano;
	 	ydir = 0;
	 	ejey = false;
	 	ejex = true;

	 }
	}

}


function dibujar(){


	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0, canvas.width, canvas.height);
	//dibujamos
	//ctx.fillRect(tamano,tamano,tamano,tamano);
	//ctx.fillRect(camilo,camilo,camilo,camilo);
	cabeza.dibujar(ctx);
	comida.dibujar(ctx);


}

function main(){
	dibujar();
	movimiento();
	

}


setInterval("main()", velocidad);
