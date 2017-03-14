(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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

	// Capa 2
	this.HOMBRE = new cjs.Text("HOMBRE", "63px 'Times New Roman'", "#66FF00");
	this.HOMBRE.name = "HOMBRE";
	this.HOMBRE.lineHeight = 72;
	this.HOMBRE.lineWidth = 276;
	this.HOMBRE.parent = this;
	this.HOMBRE.setTransform(-138.9,-34.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CCFF").s().p("A13FxIAArhMArvAAAIAALhg");
	this.shape.setTransform(-1,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.HOMBRE}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-141,-36.4,280,73.8), null);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("AsGFoIHCAAIAA5TIHzAAIAAZJIJYAAIspOOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-126,155,252);


(lib.DAclick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AAbDQIAAgLQARAAAIgGQAIgGAAgHQAAgIgDgGQgDgFgQgQIiPiPIAACGQAAAgAEALQADAHAKAFQANAIAPAAIAOAAIAAALIiyAAIAAgLIAPAAQAaAAAMgPQAHgKAAgmIAAkMQAAgggEgKQgDgIgKgFQgNgHgPAAIgPAAIAAgLICyAAIAAALIgOAAQgPAAgNAHQgKAFgDAKQgEAJAAAfIAACAIAqgnQBahUAUgcQAIgMAAgKQAAgGgHgFQgGgGgPAAIgKAAIAAgLICZAAIAAALQgNAAgLAEQgLADgQAJQgQAKgYAVIg+BAIg/A/ICZCYQAmAmAaANQAbAOAbACIAAALg");
	this.shape.setTransform(119.8,-156.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("AiRCNQgqg5AAhNQAAg+Acg1QAcgzAxgdQAxgdA5AAQAtAAAsAWQANAHAGAAQAIAAAGgGQAIgJAEgOIALAAIAJCOIgJAAQgUhAgjgcQgjgcgyAAQgoAAgiAVQghAVgTAuQgUAvAABDQAAA5ASApQASAqAlAWQAkAWAuAAQApAAAfgSQAfgRAlgzIAKAFQggA4gqAaQgpAag6AAQhnAAg5hNg");
	this.shape_1.setTransform(75.4,-156.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399FF").s().p("AhZDQIAAgLIAQAAQAaAAALgPQAHgKABgmIAAkMQAAgggFgKQgDgHgJgGQgOgHgOAAIgQAAIAAgLICyAAIAAALIgPAAQgZAAgMAPQgIAKAAAlIAAEMQABAgAEALQADAHAJAFQANAIAPAAIAPAAIAAALg");
	this.shape_2.setTransform(43.8,-156.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399FF").s().p("AizDQIAAgLIARAAQAaAAALgRQAGgKABgkIAAkMQAAgngJgJQgMgOgXAAIgRAAIAAgLIC8AAIAAALQgfAAgOAGQgOAGgEAKQgFAKgBAmIAAEEQABAaAFAKQADAGAIADQAHADAoAAIAfAAQAvAAAUgHQATgHAQgSQAQgSAQgnIALADIgkBwg");
	this.shape_3.setTransform(14,-156.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399FF").s().p("AiRCNQgqg5AAhNQAAg+Acg1QAcgzAxgdQAxgdA5AAQAtAAAsAWQANAHAGAAQAIAAAGgGQAIgJAEgOIALAAIAJCOIgJAAQgUhAgjgcQgjgcgyAAQgoAAgiAVQghAVgTAuQgUAvAABDQAAA5ASApQASAqAlAWQAkAWAuAAQApAAAfgSQAfgRAlgzIAKAFQggA4gqAaQgpAag6AAQhnAAg5hNg");
	this.shape_4.setTransform(-26.1,-156.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399FF").s().p("AA5DVIAAgLQAYgBAJgHQAKgIgBgKQAAgNgMgdIgZg8IihAAIgcBBQgKAZAAAMQAAAJAJAIQAIAHAfACIAAALIiEAAIAAgLQAbgFAHgHQAQgPATgtICTlWIAKAAICRFaQARApAOANQAPAMAaACIAAALgAhZAzICOAAIhGiog");
	this.shape_5.setTransform(-82.3,-156.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399FF").s().p("AjRDQIAAgLIAQAAQAaAAALgRQAHgKAAgkIAAkMQAAgngJgJQgMgOgXAAIgQAAIAAgLICqAAQBcAAAxAUQAxAWAdAxQAeAyAABBQAABWg1A6Qg7BCh5gBgAhaiwIAAFjQAnAIAbAAQBGAAAvgyQAvgzAAhVQAAhWgvgyQgvgxhJAAQgcAAgjAIg");
	this.shape_6.setTransform(-128.3,-156.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).wait(1));

	// Flecha
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(6.5,18,1,0.992);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:211.1},9).to({regY:0.1,scaleY:0.65,y:252.1},4).to({regY:0,scaleY:0.99,y:211.1},4).to({y:18},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.4,-193.4,300,336.4);


// stage content:
(lib.Diego = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
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
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Hombre
	this.movieClip_1 = new lib.Símbolo1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(155.6,223.3,0.852,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("ABLDRIhtjEIgUABIgHAAIgHgBIAAB6QAAAnAGAKQAKANASAAIANAAIAAAMIiLAAIAAgMIAMAAQAUAAAJgRQAFgKABgjIAAkNQgBgngGgKQgJgNgTAAIgMAAIAAgMIB2AAQAzAAAYAKQAYAKASAaQAQAaAAAjQAAAngTAdQgUAcgoAKIBCB4QAYApAQAOQAQAOAbADIAAAMgAhEiyIAACtIAIAAIAFAAQAvAAAXgaQAXgZAAgoQAAgngTgYQgTgZgeAAQgOAAgYAGg");
	this.shape.setTransform(526.8,224.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AhwCdQgug9AAhhQAAhjA1g/QAug2A+AAQA/AAAvA9QAuA+AABcQAABegvBAQgvA+hBAAQhDAAgtg9gAhGiZQghAzAABkQAABlAiA4QAaApArAAQAsAAAeguQAegtAAhjQAAhqghg1QgagpgtAAQgsAAgaApg");
	this.shape_1.setTransform(492.1,224.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AhFDRIAAgMIAMAAQAUAAAJgQQAFgJAAgkIAAk+IgnAAQgXAAgJAFQgNAGgIAQQgJARgCAcIgJAAIAEhiIEHAAIAEBiIgJAAQgDgZgEgMQgIgSgMgIQgMgJgUAAIguAAIAAE+QAAAmAGAKQAJANATAAIAMAAIAAAMg");
	this.shape_2.setTransform(460.6,224.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FF00").s().p("AhwCNQghg5AAhOQAAg9AWg0QAVg1AngcQAmgdAsAAQAjAAAiAWQALAHADAAQAHAAAFgGQAGgIADgPIAIAAIAHCNIgHAAQgPg/gbgcQgcgcgmAAQgfAAgbAVQgZAVgQAvQgPAtABBEQgBA5AOApQAPApAcAXQAdAWAiAAQAgAAAYgRQAYgSAdg0IAIAHQgYA4ghAZQggAagtAAQhQAAgshNg");
	this.shape_3.setTransform(429.3,224.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF00").s().p("AhOC9QgbgXgMgoQgIgbAAhMIAAiiQAAgngIgLQgIgMgSAAIgNAAIAAgMICMAAIAAAMIgMAAQgUAAgJAQQgGALAAAjIAAC1QAAAZAEAeQADAgAJARQAJASASAMQARALAXAAQAgAAAZgSQAZgSAKgbQAJgcAAhDIAAioQAAgngHgKQgJgNgTAAIgMAAIAAgMIBzAAIAAAMIgMAAQgUAAgKAVQgFAJAAAjIAACoQAAA/gJAjQgKAigcAYQgdAagxAAQg0AAgbgZg");
	this.shape_4.setTransform(395.1,224.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00FF00").s().p("AiiDRIAAgMIAMAAQAVAAAIgRQAGgKgBgjIAAkNQAAgngGgKQgKgNgSAAIgMAAIAAgMICEAAQBHAAAmAWQAmAVAXAyQAXAxAABBQAABWgpA7QguBAheABgAhGivIAAFhQAfAJAUAAQA3AAAkgyQAkgyAAhWQAAhWgkgxQglgyg3AAQgWAAgcAJg");
	this.shape_5.setTransform(359.4,224.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AiKDRIAAgMIAMAAQALAAAKgHQAIgFADgKQADgKAAgeIAAkOQAAgogHgJQgIgMgUAAIgMAAIAAgMID5AAIADBcIgJAAQgFghgGgMQgGgNgMgHQgKgEgYAAIhYAAIAAClIBHAAQAbAAAKgLQAMgOACgjIAIAAIAACQIgIAAQgEgfgDgJQgEgKgKgHQgKgFgUAAIhHAAIAACJQAAAcACAGQACAGAFAEQAFACANAAIA2AAQAcABAMgFQAMgFAMgOQAPgTAPgnIAKAAIgcBpg");
	this.shape_6.setTransform(327.2,224.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00FF00").s().p("AgUDYIgfgMQgXgKgGAAQgGABgDAEQgEAFgCAOIgJAAIAAiPIAJAAQAGAtALAWQAKAWAWAQQAWAOAZAAQAdAAASgUQARgVAAgbQAAgQgGgQQgHgPgOgNQgJgKgpgdQgpgegSgSQgSgRgJgWQgJgWAAgZQAAguAbggQAbggApAAQAZAAAdAQQANAIAGAAQAGAAAEgFQAEgEACgPIAJAAIAACQIgJAAQgEgqgLgYQgLgZgVgOQgUgPgVAAQgZAAgQAUQgRATAAAZQAAATALAQQAOAXA3AnQAtAfARAQQARAQAJAYQAJAWAAAZQAAAwgdAiQgdAigsAAQgOAAgMgCg");
	this.shape_7.setTransform(298.9,224.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.movieClip_1}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.movieClip_1}]},14).wait(1));

	// INSTRUCCION 
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AivDkQgjgPAAgVQAAgWAjgPQAkgPAyAAQAzAAAjAPQAjAPAAAWQAAAVgjAPQgjAPgzAAQgyAAgkgPgAh6gzQg5ghAAguQAAgvA5ghQA6ggBQAAQBRAAA5AgQA5AhAAAvQAAAug5AhQg5AhhRAAQhQAAg6ghg");
	this.shape_8.setTransform(136.4,162.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AhVAkQgkgOABgWQgBgUAkgPQAkgPAxgBQAyABAkAPQAkAPAAAUQAAAWgkAOQgkAQgyAAQgxAAgkgQg");
	this.shape_9.setTransform(127.4,181.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AN0AAQAAEKkDC9QkDC9luAAQltAAkDi9QkDi9AAkKQAAkKEDi8QEDi9FtAAQFuAAEDC9QEDC8AAEKg");
	this.shape_10.setTransform(224.4,73.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF33").s().p("ApwHHQkDi8AAkLQAAkKEDi8QEDi8FtgBQFuABEDC8QECC8AAEKQAAELkCC8QkDC9lugBQltABkDi9g");
	this.shape_11.setTransform(224.4,73.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbAxQgIgVAAgbQAAgSAFgTQAGgTAHgJQAJgJAIAAQARAAAKAYQAJAUAAAbQAAASgFATQgFATgIAKQgJAKgJAAQgQAAgLgZgAgKg7QgFAFgCAMQgDAMAAATQAAAeAHAWQAGAWAKAAQAIAAAFgMQAFgMAAgeQAAgkgIgWQgGgOgJAAQgDAAgFAEg");
	this.shape_12.setTransform(291,91.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAEBnIAAgFIACAAQAFAAACgDQACgDABgGIAAgOIAAg6QAAgSgDgIQgCgJgHAAQgIAAgKAUIAABJQAAAOABAEQABAEACACQACACAGAAIAAAFIglAAIAAgFIACAAQAGAAACgFQACgGAAgPIAAg0IgBgeQAAgGgCgBQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgCAAgEADIgBgGIAXgRIADAAIAAAeQANgdALgBQAGABAFAFQAEAGADANQABAJAAASIAAA8QAAANACAFQAAADACADQACACAGAAIAAAFgAgEhLIgHgIIgEgBQgDAAgCAGIgCAPIgDAAQAAgVAFgKQAEgJAGAAQAEAAACACQAEADAGAJQAGAHAEAAQACAAACgDQACgEABgOIADAAQAAAOgCAJQgCAIgEAFQgEAFgEAAQgGAAgIgNg");
	this.shape_13.setTransform(282.6,88.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAKBEQgCgFAAgMQgLAQgDACQgEAEgFAAQgIAAgFgKQgFgJAAgRQAAgKADgIQADgKAIgJQAIgIATgNIAAgGQAAgUgEgJQgDgIgGAAQgFABgDAFQgDAFAAAHIAAAJQAAAHgCADQgCAFgDAAQgDAAgCgFQgCgDAAgHQAAgOAHgLQAHgKANgBQAJAAAHAHQAEAFADAJQABAHAAAUIAAAvIABAYIABAGQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAAAIACgBIAHgLIAAAJQgJAXgJgBQgEABgCgGgAgHAAQgHAHgCAHQgDAHAAAJQAAALADAIQAEAGAEAAQAHAAAJgOIAAg1QgMAJgDADg");
	this.shape_14.setTransform(275,91.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQBtIAAgGQAEAAACgCIAEgGIABgSIAAh+IgBgdIgCgIQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQgCAAgCADIgCgFIAVgSIAEAAIAAC5IABASQABAEACACQACACAGAAIAAAGg");
	this.shape_15.setTransform(264.7,87.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUA3QgLgUABghQgBgjALgUQAKgUANAAQAMAAAJAPQAIAQAAAaIgzAAQAAAeAIARQAJATAJgBQAIABAFgIQAGgIADgSIADADQgCAVgIARQgIARgNAAQgMAAgJgTgAgMg0QgGAKgBARIAiAAQgBgNgBgGQgCgIgEgGQgEgEgEAAQgGgBgFALg");
	this.shape_16.setTransform(258.7,91.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAxQgJgVAAgbQAAgSAFgTQAFgTAJgJQAIgJAIAAQARAAALAYQAIAUAAAbQAAASgFATQgEATgJAKQgIAKgKAAQgQAAgKgZgAgKg7QgEAFgDAMQgDAMAAATQAAAeAHAWQAGAWAKAAQAHAAAGgMQAFgMAAgeQAAgkgJgWQgGgOgHAAQgEAAgFAEg");
	this.shape_17.setTransform(246.6,91.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQBtIAAgGQAFAAACgCIADgGIABgSIAAg2QAAgXgBgFIgBgHQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgCAAgDACIgBgFIAVgRIAEAAIAABvIABASQABAEABACQADACAFAAIAAAGgAgEhRQgCgFgBgGQABgHACgEQACgFADAAQADAAADAFQACAEAAAHQAAAGgCAFQgDAEgDAAQgDAAgCgEg");
	this.shape_18.setTransform(240.2,87.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAOBvIAAgUQgGAKgFAFQgFAFgGAAQgLAAgKgUQgJgTAAgdQAAgfAKgXQAKgaAQAAQAJAAAHAMIAAgaIgBgeIgCgHQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDACIgBgEIAWgSIAEAAIAAChIAAAeQABAFACACQAAABAAABQAAAAABAAQAAABABAAQAAAAAAAAQACAAAFgDIAAAGIgWARgAgPgPQgIAPAAAeQAAAfAHARQAHAQAJAAQAGAAAIgOIAAhIQgBgKgCgIQgDgJgEgEQgEgEgDgBQgHAAgFANg");
	this.shape_19.setTransform(233.9,88);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaBIIAAgGQAGAAADgDQACgDAAgEIABgQIAAg1IgBgdQAAgFgCgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgDAAgDACIgBgFIAXgRIADAAIAAAfQAJgfAJAAQAFAAADAFQADAFAAAHQAAAGgCAEQgCAEgDAAQgDAAgEgFQgDgFgCAAIgDACQgEAHgDAOIAABDQAAALABAGQABAEADADQACACAFAAIAAAGg");
	this.shape_20.setTransform(226.8,91.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVA3QgJgUgBghQABgjAJgUQAKgUAOAAQAMAAAIAPQAJAQgBAaIgyAAQAAAeAIARQAJATAKgBQAGABAGgIQAGgIADgSIACADQgBAVgIARQgJARgMAAQgMAAgKgTgAgNg0QgFAKgBARIAhAAQAAgNgBgGQgCgIgEgGQgEgEgDAAQgHgBgGALg");
	this.shape_21.setTransform(220.3,91.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmBqIAAgGIACAAQAFAAADgDIACgGQABgEAAgPIAAiDQAAgOgBgEIgCgFQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgCADIgBgGIAWgRIAEAAIAAAhQAFgTAGgHQAFgHAGgBQALAAAIARQAJAUAAAhQAAAjgLAXQgJAUgOAAQgFAAgFgEQgDgBgDgIIAAArQAAAPABADQAAAEACADQADACAFAAIAAAGgAgChPQgDADgGAOIAAA0IAAAVQABAJAEAHQAFAHAGAAQAIAAAFgNQAGgPABgbQAAghgIgQQgFgMgHAAQgEAAgDADg");
	this.shape_22.setTransform(212,94.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAKBEQgCgFAAgMQgLAQgDACQgEAEgFAAQgIAAgFgKQgFgJAAgRQAAgKADgIQADgKAIgJQAIgIATgNIAAgGQAAgUgEgJQgDgIgGAAQgFABgDAFQgDAFAAAHIAAAJQAAAHgCADQgCAFgDAAQgDAAgCgFQgCgDAAgHQAAgOAHgLQAHgKANgBQAJAAAHAHQAEAFADAJQABAHAAAUIAAAvIABAYIABAGQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAAAIACgBIAHgLIAAAJQgJAXgJgBQgEABgCgGgAgHAAQgHAHgCAHQgDAHAAAJQAAALADAIQAEAGAEAAQAHAAAJgOIAAg1QgMAJgDADg");
	this.shape_23.setTransform(200.6,91.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghBjQgDgGAAgGQAAgHACgEQADgEADAAQADAAAFAEIAEACQACAAADgFQADgEADgOIAFgYIgbhpIgDgMIgEgHQgCgCgEgCIAAgGIAjAAIAAAGIgCAAQgDAAgCADQgCADAAAEQAAAGADALIARBGIAQhNIACgMIgBgEIgCgDIgFgBIAAgGIAZAAIAAAGIgFACIgEAHIgCAMIgeCLQgEAUgHAKQgHALgHAAQgFAAgDgFg");
	this.shape_24.setTransform(192.5,95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgaAxQgJgVAAgbQAAgSAFgTQAFgTAIgJQAJgJAIAAQARAAAKAYQAJAUAAAbQAAASgFATQgEATgJAKQgIAKgKAAQgQAAgKgZgAgKg7QgEAFgDAMQgDAMAAATQAAAeAHAWQAGAWAKAAQAHAAAGgMQAFgMAAgeQAAgkgJgWQgGgOgHAAQgEAAgFAEg");
	this.shape_25.setTransform(180,91.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AANBvIAAgUQgFAKgFAFQgFAFgFAAQgNAAgJgUQgJgTAAgdQAAgfAKgXQAKgaAQAAQAJAAAGAMIAAgaIAAgeIgCgHQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgCAAgDACIgBgEIAWgSIAEAAIAAChIABAeQAAAFACACQAAABAAABQAAAAABAAQAAABABAAQAAAAAAAAQACAAAFgDIAAAGIgWARgAgPgPQgIAPAAAeQAAAfAHARQAHAQAJAAQAGAAAHgOIAAhIQAAgKgCgIQgDgJgEgEQgEgEgDgBQgHAAgFANg");
	this.shape_26.setTransform(171.9,88);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAKBEQgCgFAAgMQgLAQgDACQgEAEgFAAQgIAAgFgKQgFgJAAgRQAAgKADgIQADgKAIgJQAIgIATgNIAAgGQAAgUgEgJQgDgIgGAAQgFABgDAFQgDAFAAAHIAAAJQAAAHgCADQgCAFgDAAQgDAAgCgFQgCgDAAgHQAAgOAHgLQAHgKANgBQAJAAAHAHQAEAFADAJQABAHAAAUIAAAvIABAYIABAGQAAABAAAAQABAAAAABQAAAAABAAQAAAAAAAAIACgBIAHgLIAAAJQgJAXgJgBQgEABgCgGgAgHAAQgHAHgCAHQgDAHAAAJQAAALADAIQAEAGAEAAQAHAAAJgOIAAg1QgMAJgDADg");
	this.shape_27.setTransform(164,91.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRBtIAAgGQAGAAABgCIAEgGIABgSIAAh+IgBgdIgCgIQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAgEADIgBgFIAVgSIAEAAIAAC5IABASQABAEACACQACACAGAAIAAAGg");
	this.shape_28.setTransform(157.9,87.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUA2QgLgTAAghQAAgjALgUQAJgVAOAAQANABAIAQQAHAPAAAZIgyAAQAAAfAJASQAHARALABQAGgBAGgHQAFgIAEgSIACADQgBAVgIARQgJASgMAAQgMAAgJgVgAgNg1QgFALgBARIAiAAQAAgOgCgFQgCgJgEgEQgEgFgDgBQgHABgGAJg");
	this.shape_29.setTransform(292.9,54.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDBaQgDgEgCgHQgBgHAAgPIAAheIgNAAIAAgFQAFgDAFgIQAFgIADgLIAFgVIACAAIAAAuIARAAIAAAKIgRAAIAABaQAAAOACAFQACAEADAAQADAAADgDQACgDABgGIADAAQgCAPgGAIQgEAHgHAAQgDAAgDgEg");
	this.shape_30.setTransform(287,52.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgOBFIgFgBQgBAAgBAEIgDAAIAAgyIADAAQACAVAHALQAGALAGAAQAGAAAEgGQAEgGAAgJQAAgLgFgHQgDgHgLgLQgMgKgDgJQgFgJAAgNQAAgRAHgMQAGgLAKAAQAEAAAGADIAGACIACgBIABgEIADAAIAAAvIgDAAQgDgWgFgIQgEgIgHAAQgGAAgDAFQgEAGAAAHQAAAIADAHQACAGAIAHIALALQAQAOAAAZQAAATgHALQgIAMgKAAQgFAAgJgFg");
	this.shape_31.setTransform(281.4,54.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUA2QgLgTABghQgBgjALgUQAKgVANAAQAMABAJAQQAIAPAAAZIgzAAQAAAfAIASQAJARAJABQAIgBAFgHQAGgIADgSIADADQgCAVgIARQgIASgNAAQgMAAgJgVgAgMg1QgGALgBARIAiAAQgBgOgBgFQgCgJgEgEQgEgFgEgBQgGABgFAJg");
	this.shape_32.setTransform(274.4,54.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgaBIIAAgFQAGAAADgEQACgDAAgFIABgOIAAg1IgBgeQAAgEgCgCQAAgBgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgDAAgDADIgBgGIAXgRIADAAIAAAgQAJggAJAAQAFAAADAFQADAFAAAHQAAAGgCAEQgCAEgDAAQgDAAgEgFQgDgGgCAAIgDAEQgEAGgDAOIAABDQAAALABAGQABAEADACQACADAFABIAAAFg");
	this.shape_33.setTransform(263.8,54.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgbAxQgIgVAAgbQAAgSAFgTQAGgTAHgJQAJgJAIAAQARAAAKAYQAJAUAAAbQAAASgFATQgFATgIAKQgJAKgJAAQgQAAgLgZgAgKg7QgFAFgCAMQgDAMAAATQAAAeAHAWQAGAWAKAAQAIAAAFgMQAFgMAAgeQAAgkgIgWQgHgOgIAAQgDAAgFAEg");
	this.shape_34.setTransform(256.8,54.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgmBpIAAgFIACAAQAFAAADgEIACgFQABgDAAgQIAAiDQAAgOgBgDIgCgGQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgDACIAAgEIAWgSIAEAAIAAAgQAFgSAGgHQAFgIAGABQALAAAIAQQAJAUAAAgQAAAkgLAXQgJAUgOAAQgFAAgEgDQgEgDgDgGIAAAqQAAAOABAFQAAADACACQADADAFAAIAAAFgAgChPQgDADgGANIAAA1IAAAWQABAIAEAHQAFAGAGAAQAIABAFgMQAGgQABgbQgBgggHgSQgFgLgHgBQgEABgDADg");
	this.shape_35.setTransform(248.1,57.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgbAxQgIgVAAgbQAAgSAFgTQAGgTAHgJQAJgJAIAAQARAAAKAYQAJAUAAAbQAAASgFATQgFATgIAKQgIAKgKAAQgQAAgLgZgAgKg7QgEAFgDAMQgDAMAAATQAAAeAHAWQAGAWAKAAQAIAAAFgMQAFgMAAgeQAAgkgIgWQgGgOgIAAQgEAAgFAEg");
	this.shape_36.setTransform(236,54.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgfBcQgGgHAAgIIABgIQABgFAFgKIAIgRQgEgFgCgDQgCgEAAgFQAAgFADgHQACgIAIgMQgGgGgEgLQgEgMAAgNQAAgVAJgPQAIgPANAAQAKAAAHAKIAQAAIAEAAIABACIABAEIgBAGIgBABIgEABIgKAAQAFALAAARQAAATgIAOQgIAOgMAAQgGAAgGgDQgDAGgBADIgCAIIACAFQABACAEABIALABIAVACQAIACAEAJQAFAJAAAMQAAARgJAPQgNAXgTAAQgQAAgLgOgAgXA1QgCAGAAAGQAAAHAFAGQAIAJAOAAQAPAAAHgJQAHgKAAgLQAAgIgFgDQgEgEgMAAQgSgBgJgDIgGAPgAgNhZQgEAKAAASQAAAYAGAOQAEAKAHAAQAFAAAEgJQAEgJAAgSQAAgZgGgNQgEgLgFAAQgGAAgFAJg");
	this.shape_37.setTransform(227.7,57.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgVA2QgJgTgBghQABgjAJgUQAKgVAOAAQAMABAIAQQAJAPgBAZIgyAAQAAAfAIASQAJARAKABQAGgBAGgHQAGgIADgSIACADQgBAVgIARQgJASgMAAQgMAAgKgVgAgNg1QgFALgBARIAhAAQAAgOgBgFQgCgJgEgEQgEgFgDgBQgHABgGAJg");
	this.shape_38.setTransform(219.8,54.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgRBtIAAgGQAGAAACgCIADgGIABgSIAAg2QAAgXgBgFIgCgHQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgCAAgEACIgBgFIAWgRIAEAAIAABvIAAASQABAEACACQACACAFAAIAAAGgAgEhRQgCgFgBgGQABgHACgEQACgFACAAQAEAAADAFQACAEAAAHQAAAGgCAFQgDAEgEAAQgCAAgCgEg");
	this.shape_39.setTransform(213.8,50.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag2BoIAAgGIADAAQAIAAACgJQACgFAAgRIAAiFQAAgUgCgFQgDgGgHAAIgDAAIAAgFIAsAAQAYAAANAKQANAKAHAZQAJAYgBAhQABAqgOAdQgQAhggAAgAgXhXIAACvQAKAFAHAAQASAAANgZQAMgZAAgrQAAgpgMgZQgNgZgTAAQgHAAgJAEg");
	this.shape_40.setTransform(205.3,51);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgOBFIgEgBQgCAAgCAEIgCAAIAAgyIACAAQADAVAGALQAHALAGAAQAGAAAEgGQADgGAAgJQAAgLgDgHQgEgHgLgLQgMgKgDgJQgFgJAAgNQABgRAGgMQAGgLAKAAQADAAAHADIAFACIADgBIABgEIADAAIAAAvIgDAAQgDgWgEgIQgFgIgHAAQgGAAgDAFQgEAGAAAHQAAAIADAHQADAGAHAHIALALQARAOAAAZQAAATgIALQgIAMgKAAQgFAAgJgFg");
	this.shape_41.setTransform(192.1,54.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKBEQgCgFAAgNQgLARgDADQgEADgFAAQgIABgFgKQgFgLAAgQQAAgKADgHQADgLAIgJQAIgIATgOIAAgFQAAgUgEgIQgDgIgGAAQgFgBgDAGQgDAFAAAHIAAAJQAAAGgCAFQgCADgDAAQgDAAgCgDQgCgFAAgGQAAgNAHgLQAHgLANAAQAJAAAHAFQAEAGADAJQABAHAAAVIAAAuIABAZIABAGQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIACgBIAHgLIAAAIQgJAXgJAAQgEAAgCgFgAgHAAQgHAHgCAHQgDAHAAAJQAAALADAHQAEAIAEgBQAHAAAJgPIAAg0QgMAJgDADg");
	this.shape_42.setTransform(185.3,54.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRBtIAAgGQAFAAADgCIACgGIABgSIAAh+IAAgdIgCgIQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgCAAgEADIgBgFIAVgSIAEAAIAAC5IABASQABAEACACQACACAGAAIAAAGg");
	this.shape_43.setTransform(179.2,50.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQBtIAAgGQAFAAACgCIADgGIABgSIAAg2QAAgXgBgFIgBgHQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgCAAgDACIgBgFIAVgRIAEAAIAABvIABASQABAEABACQADACAFAAIAAAGgAgEhRQgCgFgBgGQABgHACgEQACgFADAAQADAAADAFQACAEAAAHQAAAGgCAFQgDAEgDAAQgDAAgCgEg");
	this.shape_44.setTransform(174.5,50.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAKBEQgCgFAAgNQgLARgDADQgEADgFAAQgIABgFgKQgFgLAAgQQAAgKADgHQADgLAIgJQAIgIATgOIAAgFQAAgUgEgIQgDgIgGAAQgFgBgDAGQgDAFAAAHIAAAJQAAAGgCAFQgCADgDAAQgDAAgCgDQgCgFAAgGQAAgNAHgLQAHgLANAAQAJAAAHAFQAEAGADAJQABAHAAAVIAAAuIABAZIABAGQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIACgBIAHgLIAAAIQgJAXgJAAQgEAAgCgFgAgHAAQgHAHgCAHQgDAHAAAJQAAALADAHQAEAIAEgBQAHAAAJgPIAAg0QgMAJgDADg");
	this.shape_45.setTransform(168.7,54.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgpBoIAAgGIAEAAQAHAAADgJQABgFABgRIAAiFQAAgUgCgFQgEgGgGAAIgEAAIAAgFIAoAAQAOgBAIAGQAJAFAGAOQAGAOAAASQAAAagJAQQgJAOgQAAIgIgBIgKgCIAAA8QAAATADAFQADAHAFAAIAEAAIAAAGgAgKhYIAABXIAIABIAEABQAJAAAGgLQAGgNAAgUQAAgNgCgLQgDgMgGgFQgFgHgHAAQgEAAgGADg");
	this.shape_46.setTransform(160,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},4).to({state:[{t:this.shape_8},{t:this.shape_11},{t:this.shape_10}]},4).to({state:[{t:this.shape_11},{t:this.shape_8},{t:this.shape_10},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).wait(1));

	// click
	this.instance = new lib.DAclick();
	this.instance.parent = this;
	this.instance.setTransform(147.6,84.6,0.39,0.298);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(310.4,226.9,528.1,233.8);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#33CCFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;