(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"burbujas_atlas_", frames: [[61,122,58,54],[0,123,56,51],[0,61,59,60],[63,0,60,59],[61,61,59,59],[0,0,61,59]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._2 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["burbujas_atlas_"];
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
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-29,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-29,-27,58,54), null);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib._6();
	this.instance.parent = this;
	this.instance.setTransform(-30.5,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,-29.5,61,59);


(lib.burbujas_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(5);
		}
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// burbujas
	this.movieClip_1 = new lib.Símbolo1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(1,-1);

	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-29,-25);

	this.instance_1 = new lib._3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30,-32);

	this.instance_2 = new lib._4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36,-31);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-27,-29);

	this.instance_4 = new lib.Interpolación1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[]},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-28,58,54);


// stage content:
(lib.burbujas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Actions
	this.instance = new lib.burbujas_1();
	this.instance.parent = this;
	this.instance.setTransform(303.4,445.5,2.704,2.704,0,0,0,1.2,-0.8);

	this.instance_1 = new lib.burbujas_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(690.2,553.7,1,1,0,0,0,1,-1);

	this.instance_2 = new lib.burbujas_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(99,119.1,1,1,0,0,0,1,-1);

	this.instance_3 = new lib.burbujas_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(909.5,262.1,1,1,0,0,0,1,-1);

	this.instance_4 = new lib.burbujas_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(762.5,424.9,2.448,2.448,0,0,0,1.1,-1);

	this.instance_5 = new lib.burbujas_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(663.1,208.1,1,1,0,0,0,1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Capa 1
	this.instance_6 = new lib.burbujas_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(477.6,636.2,1,1,0,0,0,1,-1);

	this.instance_7 = new lib.burbujas_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(510,287.5,1,1,0,0,0,1,-1);

	this.burbuja1 = new lib.burbujas_1();
	this.burbuja1.parent = this;
	this.burbuja1.setTransform(569.2,80.9,2.085,2.085,0,0,0,-1.1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.burbuja1},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(710,384.6,868.5,638.6);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#66FFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/burbujas_atlas_.png", id:"burbujas_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;