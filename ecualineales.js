(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"ecualineales_atlas_", frames: [[0,789,1211,396],[0,1406,1441,182],[0,1187,1315,217],[656,1590,758,150],[0,1590,654,287],[0,0,1516,787]]}
];


// symbols:



(lib.e1 = function() {
	this.spriteSheet = ss["ecualineales_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.e2 = function() {
	this.spriteSheet = ss["ecualineales_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.e3 = function() {
	this.spriteSheet = ss["ecualineales_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.e4 = function() {
	this.spriteSheet = ss["ecualineales_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.e4e = function() {
	this.spriteSheet = ss["ecualineales_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.titulo = function() {
	this.spriteSheet = ss["ecualineales_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.titulo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.776,0.654);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,1176,515), null);


(lib.Interpolación23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.e1();
	this.instance.parent = this;
	this.instance.setTransform(-605.5,-198);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-605.5,-198,1211,396);


(lib.Interpolación11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.definic = new cjs.Text("DEFINICIÓN ", "40px 'Times New Roman'", "#0000FF");
	this.definic.name = "definic";
	this.definic.textAlign = "center";
	this.definic.lineHeight = 46;
	this.definic.lineWidth = 246;
	this.definic.parent = this;
	this.definic.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get(this.definic).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-30,250,60);


(lib.Interpolación9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.ejem1 = new cjs.Text("EJEMPLO 1", "40px 'Times New Roman'", "#0000FF");
	this.ejem1.name = "ejem1";
	this.ejem1.textAlign = "center";
	this.ejem1.lineHeight = 46;
	this.ejem1.lineWidth = 246;
	this.ejem1.parent = this;
	this.ejem1.setTransform(0,-17.1);

	this.timeline.addTween(cjs.Tween.get(this.ejem1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-19.1,250,60);


(lib.Interpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.ejem2 = new cjs.Text("EJEMPLO 2", "40px 'Times New Roman'", "#0000FF");
	this.ejem2.name = "ejem2";
	this.ejem2.textAlign = "center";
	this.ejem2.lineHeight = 46;
	this.ejem2.lineWidth = 246;
	this.ejem2.parent = this;
	this.ejem2.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get(this.ejem2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-30,250,60);


(lib.Interpolación5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.soluc = new cjs.Text("SOLUCIÓN ", "40px 'Times New Roman'", "#0000FF");
	this.soluc.name = "soluc";
	this.soluc.textAlign = "center";
	this.soluc.lineHeight = 46;
	this.soluc.lineWidth = 246;
	this.soluc.parent = this;
	this.soluc.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get(this.soluc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-30,250,60);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.ejerc = new cjs.Text("EJERCICIOS", "40px 'Times New Roman'", "#0000FF");
	this.ejerc.name = "ejerc";
	this.ejerc.textAlign = "center";
	this.ejerc.lineHeight = 46;
	this.ejerc.lineWidth = 246;
	this.ejerc.parent = this;
	this.ejerc.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get(this.ejerc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-30,250,60);


(lib.flecha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("A46gdITEuOIAAKyIexAAIAAJXI+TAAIAAJOg");
	this.shape.setTransform(1.5,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("A46gdITEuOIAAKyIexAAIAAJXI+TAAIAAJOg");
	this.shape_1.setTransform(1.5,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("Av8gdIMNuOIAAKyITsAAIAAJXIzZAAIAAJOg");
	this.shape_2.setTransform(-175.9,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Av8gdIMNuOIAAKyITsAAIAAJXIzZAAIAAJOg");
	this.shape_3.setTransform(-175.9,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:1.5}},{t:this.shape,p:{x:1.5}}]}).to({state:[{t:this.shape_1,p:{x:-118.5}},{t:this.shape,p:{x:-118.5}}]},9).to({state:[{t:this.shape_3},{t:this.shape_2}]},10).to({state:[{t:this.shape_1,p:{x:-118.5}},{t:this.shape,p:{x:-118.5}}]},10).to({state:[{t:this.shape_1,p:{x:1.5}},{t:this.shape,p:{x:1.5}}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-93.9,321,190);


(lib.definbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("A5EobMAyJAAAIAAQ3MgyJAAAg");
	this.shape.setTransform(8.5,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A5EIcIAAw3MAyJAAAIAAQ3g");
	this.shape_1.setTransform(8.5,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("A5EobMAyJAAAIAAQ3MgyJAAAg");
	this.shape_2.setTransform(8.5,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("A5EIcIAAw3MAyJAAAIAAQ3g");
	this.shape_3.setTransform(8.5,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-53.9,323,110);


(lib.titulo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Símbolo1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,588,257.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-588,-257.5,1176,515);


(lib.Interpolación22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.ejerctx = new lib.Interpolación3();
	this.ejerctx.parent = this;
	this.ejerctx.setTransform(0.6,-0.8);

	this.ejercbtn = new lib.definbtn();
	this.ejercbtn.parent = this;
	this.ejercbtn.setTransform(-7.2,-0.6,0.779,0.648,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.ejercbtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ejercbtn},{t:this.ejerctx}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.6,-36,252.2,72);


(lib.Interpolación21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.ejerctx = new lib.Interpolación3();
	this.ejerctx.parent = this;
	this.ejerctx.setTransform(0.6,-0.8);

	this.ejercbtn = new lib.definbtn();
	this.ejercbtn.parent = this;
	this.ejercbtn.setTransform(-7.2,-0.6,0.779,0.648,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.ejercbtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ejercbtn},{t:this.ejerctx}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.6,-36,252.2,72);


(lib.Interpolación20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.soluctx = new lib.Interpolación5();
	this.soluctx.parent = this;
	this.soluctx.setTransform(340,8.3);

	this.solucbtn = new lib.definbtn();
	this.solucbtn.parent = this;
	this.solucbtn.setTransform(333.4,8.7,0.779,0.648,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.solucbtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.solucbtn},{t:this.soluctx}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(214,-26.6,252,72);


(lib.Interpolación19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.soluctx = new lib.Interpolación5();
	this.soluctx.parent = this;

	this.solucbtn = new lib.definbtn();
	this.solucbtn.parent = this;
	this.solucbtn.setTransform(-6.6,-0.6,0.779,0.648,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.solucbtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.solucbtn},{t:this.soluctx}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-36,252,72);


(lib.Interpolación18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.ejem2tx = new lib.Interpolación7();
	this.ejem2tx.parent = this;
	this.ejem2tx.setTransform(0,-0.1);

	this.ejem2btn = new lib.definbtn();
	this.ejem2btn.parent = this;
	this.ejem2btn.setTransform(-6.6,-0.6,0.779,0.648,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.ejem2btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ejem2btn},{t:this.ejem2tx}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-36,252,72);


(lib.Interpolación17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.ejem2tx = new lib.Interpolación7();
	this.ejem2tx.parent = this;
	this.ejem2tx.setTransform(0,-0.1);

	this.ejem2btn = new lib.definbtn();
	this.ejem2btn.parent = this;
	this.ejem2btn.setTransform(-6.6,-0.6,0.779,0.648,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.ejem2btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ejem2btn},{t:this.ejem2tx}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-36,252,72);


(lib.Interpolación16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.ejem1 = new lib.Interpolación9();
	this.ejem1.parent = this;
	this.ejem1.setTransform(0,-10.2);

	this.ejem1btn = new lib.definbtn();
	this.ejem1btn.parent = this;
	this.ejem1btn.setTransform(-6.6,-0.6,0.779,0.648,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.ejem1btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ejem1btn},{t:this.ejem1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-36,252,72);


(lib.Interpolación15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.ejem1 = new lib.Interpolación9();
	this.ejem1.parent = this;
	this.ejem1.setTransform(0,-10.2);

	this.ejem1btn = new lib.definbtn();
	this.ejem1btn.parent = this;
	this.ejem1btn.setTransform(-6.6,-0.6,0.779,0.648,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.ejem1btn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ejem1btn},{t:this.ejem1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-36,252,72);


(lib.Interpolación14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.defintx = new lib.Interpolación11();
	this.defintx.parent = this;
	this.defintx.setTransform(-0.9,0.9);

	this.definbtn = new lib.definbtn();
	this.definbtn.parent = this;
	this.definbtn.setTransform(-5.6,-0.6,0.779,0.648,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.definbtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.definbtn},{t:this.defintx}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.9,-36,253,72);


(lib.Interpolación13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.defintx = new lib.Interpolación11();
	this.defintx.parent = this;
	this.defintx.setTransform(0,-0.3);

	this.definbtn = new lib.definbtn();
	this.definbtn.parent = this;
	this.definbtn.setTransform(-6.6,-0.6,0.779,0.648,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.definbtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.definbtn},{t:this.defintx}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-36,252,72);


// stage content:
(lib.ecualineales = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.definbtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(5);
		}
	}
	this.frame_125 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(125).call(this.frame_125).wait(1));

	// Definicion
	this.definbtn = new lib.Interpolación13();
	this.definbtn.parent = this;
	this.definbtn.setTransform(257.8,549.6);

	this.instance = new lib.Interpolación14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(584.2,69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.definbtn}]}).to({state:[{t:this.definbtn}]},1).to({state:[{t:this.instance}]},40).to({state:[]},64).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.definbtn).wait(1).to({x:265.8,y:537.9},0).to({_off:true,x:584.2,y:69,mode:"synched",startPosition:0},40).wait(85));

	// Texto
	this.instance_1 = new lib.Interpolación23("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(434.5,182.1,0.676,0.495,0,0,0,0,0.1);

	this.instance_2 = new lib.e2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67,265,0.587,0.604);

	this.instance_3 = new lib.e3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(192,375,0.586,0.631);

	this.instance_4 = new lib.e4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(192,512,0.515,0.627);

	this.instance_5 = new lib.flecha();
	this.instance_5.parent = this;
	this.instance_5.setTransform(630.2,556.4,0.278,0.387,0,0,0,-157.8,1.1);

	this.instance_6 = new lib.e4e();
	this.instance_6.parent = this;
	this.instance_6.setTransform(723,502,0.447,0.499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{regX:0,regY:0.1,x:434.5,y:182.1}}]},41).to({state:[{t:this.instance_1,p:{regX:-605.5,regY:-197.3,x:24.9,y:84.4}},{t:this.instance_2}]},23).to({state:[{t:this.instance_1,p:{regX:-605.5,regY:-197.3,x:24.9,y:84.4}},{t:this.instance_2},{t:this.instance_3}]},20).to({state:[{t:this.instance_1,p:{regX:-605.5,regY:-197.3,x:24.9,y:84.4}},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4}]},20).to({state:[{t:this.instance_1,p:{regX:-605.5,regY:-197.3,x:24.9,y:84.4}},{t:this.instance_2},{t:this.instance_3},{t:this.instance_4},{t:this.instance_6},{t:this.instance_5}]},21).wait(1));

	// Ejemplo1
	this.instance_7 = new lib.Interpolación15("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(961.7,549.3);

	this.instance_8 = new lib.Interpolación16("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1547.2,619.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},41).to({state:[]},1).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,x:1547.2,y:619.3},41).wait(85));

	// Ejemplo2
	this.instance_9 = new lib.Interpolación17("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(426.9,645.8);

	this.instance_10 = new lib.Interpolación18("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-191.9,614.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},41).to({state:[]},1).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,x:-191.9,y:614.2},41).wait(85));

	// Solucion
	this.instance_11 = new lib.Interpolación19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(637.3,549.3);

	this.instance_12 = new lib.Interpolación20("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-531.9,414.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},41).to({state:[]},1).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true,x:-531.9,y:414.2},41).wait(85));

	// ejercicios
	this.instance_13 = new lib.Interpolación21("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(832.7,643.4);

	this.instance_14 = new lib.Interpolación22("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-191.3,517.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},41).to({state:[]},1).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true,x:-191.3,y:517.6},41).wait(85));

	// Titulo
	this.instance_15 = new lib.titulo_1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(638.1,305.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:1899.4},41).to({_off:true},1).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(690.1,408,1176,633.8);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ecualineales_atlas_.png?1498064289507", id:"ecualineales_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;