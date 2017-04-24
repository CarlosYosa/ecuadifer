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



(lib.tablon = function() {
	this.initialize(img.tablon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,329);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// temaS
	this.text = new cjs.Text("ECUACIONES  EXACTAS", "40px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 344;
	this.text.parent = this;
	this.text.setTransform(250.3,501);

	this.text_1 = new cjs.Text("ECUACIONES SEPARABLES", "40px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 46;
	this.text_1.lineWidth = 366;
	this.text_1.parent = this;
	this.text_1.setTransform(249.3,334.8);

	this.tema1 = new cjs.Text("ECUACIONES LINEALES", "40px 'Times New Roman'");
	this.tema1.name = "tema1";
	this.tema1.textAlign = "center";
	this.tema1.lineHeight = 46;
	this.tema1.lineWidth = 348;
	this.tema1.parent = this;
	this.tema1.setTransform(248.5,196);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUCrIgggJQgYgHgGgBQgGABgDADQgEADgCAMIgJAAIAAhyIAJAAQAHAkAKASQALARAWANQAWALAaAAQAeAAASgQQASgQAAgWQAAgMgHgNQgHgMgOgLQgKgIgpgXQgrgXgRgOQgSgOgKgSQgJgRAAgUQAAgkAbgZQAcgaAqAAQAZAAAeANQAOAGAFAAQAGAAAFgEQAEgDACgMIAJAAIAAByIgJAAQgEghgMgTQgLgUgVgLQgVgLgWAAQgZAAgRAPQgQAPAAAUQAAAPAKANQAPASA4AfQAvAZARAMQARANAJASQAJASAAAUQAAAmgdAbQgdAbguAAQgOAAgMgCg");
	this.shape.setTransform(1005.6,143.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQALABALgGQAIgEADgIQACgIAAgYIAAjWQAAgfgGgIQgJgKgUAAIgMAAIAAgJID+AAIAEBJIgKAAQgFgagGgKQgGgJgNgGQgJgEgZAAIhaAAIAACEIBIAAQAcgBAKgIQANgLABgcIAJAAIAABxIgJAAQgDgXgEgIQgEgIgKgFQgKgFgVAAIhIAAIAABtQAAAWACAFQACAFAFADQAFACAOAAIA3AAQAcAAANgDQAMgFAMgLQAPgPAQgfIAKAAIgdBTg");
	this.shape_1.setTransform(976.1,143.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQAVAAAJgNQAFgIAAgcIAAjVQAAgfgGgIQgKgLgTAAIgMAAIAAgJICVAAIAAAJQgaAAgKAGQgLAEgEAIQgEAIAAAeIAADPQAAAUAEAIQADAEAGADQAGACAfABIAYAAQAngBAPgFQAPgGANgOQANgPAMgeIAIABIgcBag");
	this.shape_2.setTransform(945.6,143.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAtCpIAAgJQAUgBAHgFQAHgGAAgIQAAgLgKgXIgUgwIh/AAIgXA1QgIATAAAJQAAAIAHAGQAHAGAYABIAAAJIhoAAIAAgJQAVgDAGgGQAMgMAQgkIB0kPIAIAAIBzESQAOAhALAKQALAKAVABIAAAJgAhHAoIBxAAIg3iEg");
	this.shape_3.setTransform(912.2,143);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGClIAAgJIAMAAQAUABAJgMQAHgJAAgdIAAjVQAAgZgEgIQgDgHgHgEQgKgFgMgBIgMAAIAAgJICNAAIAAAJIgMAAQgVAAgIANQgHAHAAAeIAADVQAAAZADAIQADAGAHAFQALAFAMAAIAMAAIAAAJg");
	this.shape_4.setTransform(886,143.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhyBwQgiguAAg9QAAgxAXgpQAVgqAngWQAngXAuAAQAjAAAkASQAJAFAFAAQAGAAAGgFQAGgGADgMIAIAAIAHBwIgHAAQgPgygcgWQgdgXgnABQgfAAgbAQQgbARgPAkQgQAlAAA1QAAAuAPAgQAPAiAdARQAcASAkAAQAgAAAZgOQAZgOAdgpIAIAFQgYAsgiAVQghAUguAAQhRAAgtg9g");
	this.shape_5.setTransform(861,143.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AB9CoIjakJIAADKQAAAfAHAHQAJALATAAIAMAAIAAAJIhzAAIAAgJIALAAQAWAAAIgNQAGgIAAgcIAAjlQgPgRgHgFQgHgFgPgFQgHgCgOAAIAAgJIBaAAIDJD3IAAi+QAAgegHgIQgJgKgUAAIgLAAIAAgJIBzAAIAAAJIgLAAQgVAAgJAMQgGAIAAAcIAAEWg");
	this.shape_6.setTransform(825.5,143.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQALABALgGQAIgEADgIQACgIAAgYIAAjWQAAgfgGgIQgJgKgUAAIgMAAIAAgJID+AAIAEBJIgKAAQgFgagGgKQgGgJgNgGQgJgEgZAAIhaAAIAACEIBIAAQAcgBAKgIQANgLABgcIAJAAIAABxIgJAAQgDgXgEgIQgEgIgKgFQgKgFgVAAIhIAAIAABtQAAAWACAFQACAFAFADQAFACAOAAIA3AAQAcAAANgDQAMgFAMgLQAPgPAQgfIAKAAIgdBTg");
	this.shape_7.setTransform(792.8,143.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABMClIhvibIgUABIgHAAIgHgBIAABhQAAAfAGAHQAKAMASgBIANAAIAAAJIiOAAIAAgJIANAAQAVAAAJgNQAFgIAAgcIAAjVQAAgfgHgIQgJgLgTAAIgNAAIAAgJIB5AAQA0ABAZAHQAZAIARAUQASAVAAAdQAAAegUAXQgUAWgqAIIBEBgQAYAgARALQARALAbACIAAAJgAhFiOIAACKIAIAAIAFAAQAwAAAXgUQAYgVAAgfQAAgfgUgTQgTgUgfAAQgOAAgYAEg");
	this.shape_8.setTransform(761.6,143.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQALABALgGQAIgEADgIQACgIAAgYIAAjWQAAgfgGgIQgJgKgUAAIgMAAIAAgJID+AAIAEBJIgKAAQgFgagGgKQgGgJgNgGQgJgEgZAAIhaAAIAACEIBIAAQAcgBAKgIQANgLABgcIAJAAIAABxIgJAAQgDgXgEgIQgEgIgKgFQgKgFgVAAIhIAAIAABtQAAAWACAFQACAFAFADQAFACAOAAIA3AAQAcAAANgDQAMgFAMgLQAPgPAQgfIAKAAIgdBTg");
	this.shape_9.setTransform(728.9,143.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah8ClIAAgJIAMAAQAVABAJgMQAGgJAAgdIAAjVQAAgZgEgIQgCgHgIgEQgKgFgMgBIgMAAIAAgJID2AAIADBJIgJAAQgGgXgIgKQgJgMgMgFQgNgEgZgBIhIAAIAACDIA7AAQAVAAAJgJQAKgKADgbIAJAAIAABvIgJAAQAAgTgFgJQgFgJgIgEQgJgFgQAAIg7AAIAABoQAAAZADAIQACAGAIAFQALAFAKAAIAMAAIAAAJg");
	this.shape_10.setTransform(699.2,143.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhGClIAAgJIAMAAQAUABAJgMQAHgJAAgdIAAjVQgBgZgDgIQgDgHgHgEQgKgFgMgBIgMAAIAAgJICNAAIAAAJIgMAAQgVAAgIANQgHAHAAAeIAADVQAAAZADAIQADAGAHAFQALAFAMAAIAMAAIAAAJg");
	this.shape_11.setTransform(677.6,143.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AimClIAAgJIANAAQAVAAAJgNQAFgIAAgcIAAjVQAAgfgHgIQgJgLgTAAIgNAAIAAgJICHAAQBJAAAnARQAnARAXAoQAYAnAAA0QAABEgqAtQgvA0hgAAgAhHiLIAAEZQAfAGAVAAQA3AAAmgnQAlgoAAhEQAAhEglgnQgmgog5AAQgWAAgcAHg");
	this.shape_12.setTransform(650.7,143.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUCrIgggJQgYgHgGgBQgGABgDADQgEADgCAMIgJAAIAAhyIAJAAQAHAkAKASQALARAWANQAWALAaAAQAeAAASgQQASgQAAgWQAAgMgHgNQgHgMgOgLQgKgIgpgXQgrgXgRgOQgSgOgKgSQgJgRAAgUQAAgkAbgZQAcgaAqAAQAZAAAeANQAOAGAFAAQAGAAAFgEQAEgDACgMIAJAAIAAByIgJAAQgEghgMgTQgLgUgVgLQgVgLgWAAQgZAAgRAPQgQAPAAAUQAAAPAKANQAPASA4AfQAvAZARAMQARANAJASQAJASAAAUQAAAmgdAbQgdAbguAAQgOAAgMgCg");
	this.shape_13.setTransform(607,143.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQALABALgGQAIgEADgIQACgIAAgYIAAjWQAAgfgGgIQgJgKgUAAIgMAAIAAgJID+AAIAEBJIgKAAQgFgagGgKQgGgJgNgGQgJgEgZAAIhaAAIAACEIBIAAQAcgBAKgIQANgLABgcIAJAAIAABxIgJAAQgDgXgEgIQgEgIgKgFQgKgFgVAAIhIAAIAABtQAAAWACAFQACAFAFADQAFACAOAAIA3AAQAcAAANgDQAMgFAMgLQAPgPAQgfIAKAAIgdBTg");
	this.shape_14.setTransform(577.5,143.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AB9CoIjakJIAADKQAAAfAHAHQAJALATAAIAMAAIAAAJIhzAAIAAgJIALAAQAWAAAIgNQAGgIAAgcIAAjlQgPgRgHgFQgHgFgPgFQgHgCgOAAIAAgJIBaAAIDJD3IAAi+QAAgegHgIQgJgKgUAAIgLAAIAAgJIBzAAIAAAJIgLAAQgVAAgJAMQgGAIAAAcIAAEWg");
	this.shape_15.setTransform(543.6,143.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhzB9QgugxAAhMQAAhPA2gyQAugrBAAAQBBAAAvAxQAvAxAABJQAABLgwAyQgvAxhDAAQhEAAgvgwgAhIh6QghApAABQQAABQAiArQAbAiAsgBQAtABAfglQAegkAAhPQAAhTghgqQgbgigvABQgsAAgbAgg");
	this.shape_16.setTransform(508.1,143.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhGClIAAgJIALAAQAVABAKgMQAFgJAAgdIAAjVQABgZgEgIQgCgHgIgEQgLgFgMgBIgLAAIAAgJICNAAIAAAJIgMAAQgVAAgJANQgGAHAAAeIAADVQAAAZAEAIQACAGAIAFQAKAFAMAAIAMAAIAAAJg");
	this.shape_17.setTransform(481.8,143.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhyBwQgiguAAg9QAAgxAWgpQAXgqAngWQAngXAsAAQAlAAAiASQALAFAEAAQAHAAAEgFQAHgGADgMIAIAAIAIBwIgIAAQgPgygcgWQgcgXgnABQghAAgaAQQgbARgPAkQgPAlAAA1QAAAuAOAgQAPAiAcARQAeASAjAAQAhAAAZgOQAYgOAegpIAHAFQgZAsghAVQghAUguAAQhRAAgtg9g");
	this.shape_18.setTransform(456.8,143.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAtCpIAAgJQAUgBAHgFQAHgGAAgIQAAgLgKgXIgUgwIh/AAIgXA1QgIATAAAJQAAAIAHAGQAHAGAYABIAAAJIhoAAIAAgJQAVgDAGgGQAMgMAQgkIB0kPIAIAAIBzESQAOAhALAKQALAKAVABIAAAJgAhHAoIBxAAIg3iEg");
	this.shape_19.setTransform(422,143);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhQCWQgbgSgMggQgIgWAAg8IAAiAQAAgegJgKQgIgKgTAAIgMAAIAAgJICPAAIAAAJIgNAAQgVAAgIAOQgGAIgBAcIAACPQAAATAFAaQADAZAJANQAJAOASAKQARAIAZABQAgAAAZgPQAagOAKgWQAJgWAAg1IAAiFQAAgfgHgIQgJgLgTAAIgMAAIAAgJIB1AAIAAAJIgNAAQgUABgKAQQgFAHAAAcIAACFQAAAygKAcQgJAbgeAUQgcAUgzgBQg1AAgcgTg");
	this.shape_20.setTransform(385.8,143.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhyBwQgiguAAg9QAAgxAWgpQAXgqAmgWQAogXAsAAQAlAAAiASQALAFAEAAQAHAAAEgFQAHgGACgMIAJAAIAHBwIgHAAQgPgygcgWQgcgXgnABQghAAgaAQQgbARgPAkQgPAlAAA1QAAAuAOAgQAOAiAdARQAdASAlAAQAfAAAagOQAYgOAdgpIAIAFQgYAsgiAVQghAUguAAQhRAAgtg9g");
	this.shape_21.setTransform(351.3,143.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQALABALgGQAIgEADgIQACgIAAgYIAAjWQAAgfgGgIQgJgKgUAAIgMAAIAAgJID+AAIAEBJIgKAAQgFgagGgKQgGgJgNgGQgJgEgZAAIhaAAIAACEIBIAAQAcgBAKgIQANgLABgcIAJAAIAABxIgJAAQgDgXgEgIQgEgIgKgFQgKgFgVAAIhIAAIAABtQAAAWACAFQACAFAFADQAFACAOAAIA3AAQAcAAANgDQAMgFAMgLQAPgPAQgfIAKAAIgdBTg");
	this.shape_22.setTransform(319.2,143.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABED+IAAgOQAdgBALgJQAKgIAAgMQAAgQgOgjIgfhIIi+AAIgjBPQgMAdAAAPQAAAKALAJQALAJAjACIAAAOIibAAIAAgOQAfgFAIgJQAUgSAWg1ICumYIANAAICsGcQAWAyAQAPQARAOAeACIAAAOgAhrA8ICqAAIhTjHg");
	this.shape_23.setTransform(1153.5,53.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AC7D8IlGmPIAAExQgBAuALALQAOAQAdAAIARAAIAAANIitAAIAAgNIARAAQAgAAANgTQAIgMAAgqIAAlYQgVgZgLgIQgMgJgVgGQgLgEgWAAIAAgNICHAAIEvFzIAAkdQAAgugLgLQgNgQgdAAIgSAAIAAgNICuAAIAAANIgSAAQgfAAgNATQgJAMAAAqIAAGhg");
	this.shape_24.setTransform(1098.5,54.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABED+IAAgOQAegBAKgJQAKgIAAgMQAAgQgPgjIgehIIi+AAIgiBPQgNAdAAAPQAAAKALAJQALAJAkACIAAAOIicAAIAAgOQAegFAJgJQATgSAXg1ICumYIAMAAICuGcQAUAyASAPQAQAOAeACIAAAOgAhqA8ICqAAIhUjHg");
	this.shape_25.setTransform(1045.2,53.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjeD4IAAgNIASAAQAgAAANgUQAIgNAAgqIAAk/QAAgvgKgMQgOgQgdAAIgSAAIAAgNIDWAAQA7AAAlAIQA3AOAcAhQAdAiAAArQAAAmgWAdQgXAegsAOQAzAKAaAYQAjAiAAAwQAAAlgXAiQgXAigpAQQgpAPhUAAgAg2AGQgQABgKACIAADLQAqAKApAAQBCAAAjgdQAjgeAAgsQAAgdgQgbQgQgbgjgPQgkgQgzAAIgnABgAhQjXIAAC/QANADASABIAmABQA0AAAcgLQAagMAPgYQAOgXAAgdQAAgrgkgfQgjgfhDAAQglAAgdAIg");
	this.shape_26.setTransform(991.8,54.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABED+IAAgOQAdgBALgJQALgIAAgMQgBgQgPgjIgdhIIjAAAIghBPQgNAdAAAPQAAAKALAJQALAJAkACIAAAOIidAAIAAgOQAggFAJgJQASgSAXg1ICvmYIALAAICtGcQAVAyASAPQARAOAeACIAAAOgAhqA8ICqAAIhUjHg");
	this.shape_27.setTransform(941.1,53.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfEAQgMgCgjgLQgkgMgJAAQgJAAgGAGQgFAFgDASIgNAAIAAirIANAAQAJA2ARAbQAQAaAhARQAhASAnAAQAtAAAcgYQAZgYAAghQABgTgKgSQgLgTgUgQQgPgLg/gkQhAgigagWQgbgVgOgaQgOgZAAgfQAAg1ApgnQApgnA/AAQAnAAAsAUQAUAJAJAAQAJAAAHgGQAFgFAFgSIANAAIAACsIgNAAQgHgxgRgeQgSgdgfgRQgggRggAAQgmAAgZAXQgZAXAAAeQAAAWAQATQAWAcBVAtQBFAmAaATQAZAUAOAbQAOAbAAAeQAAA4grApQgsAphGAAQgUAAgTgEg");
	this.shape_28.setTransform(893.6,54.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ABED+IAAgOQAegBAKgJQALgIgBgMQAAgQgOgjIgfhIIi/AAIgiBPQgMAdAAAPQAAAKALAJQALAJAjACIAAAOIicAAIAAgOQAggFAIgJQAUgSAWg1ICumYIANAAICsGcQAWAyAQAPQASAOAeACIAAAOgAhrA8ICqAAIhTjHg");
	this.shape_29.setTransform(826.5,53.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AjVD4IAAgNIATAAQAgAAANgVQAIgMAAgqIAAk/QAAgvgKgMQgOgQgdAAIgTAAIAAgNIDgAAIAAANQgmAAgQAIQgQAHgGAMQgGAMAAAsIAAE3QAAAeAGAMQAEAHAJAEQAKAEAvAAIAkAAQA5AAAXgJQAYgIASgVQATgWATguIANACIgrCHg");
	this.shape_30.setTransform(776.6,54.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AjUD4IAAgNIASAAQARAAAQgJQAMgGAEgLQAEgMAAgkIAAlCQAAgvgJgLQgOgPgeAAIgSAAIAAgNIF+AAIAFBsIgOAAQgIgngJgOQgJgPgTgIQgOgFglAAIiIAAIAADEIBtAAQAqAAAOgNQATgRADgqIANAAIAACsIgNAAQgGgkgFgLQgGgNgPgHQgPgHgfAAIhtAAIAACjQAAAhADAIQADAHAIAEQAHAEAVAAIBTAAQAqAAATgGQATgGASgRQAWgWAYguIAPAAIgrB8g");
	this.shape_31.setTransform(712,54.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Aj5D4IAAgNIATAAQAfAAANgUQAIgNAAgqIAAk/QAAgvgKgMQgOgQgcAAIgTAAIAAgNIDKAAQBuAAA7AZQA5AZAkA7QAjA7AABNQAABng/BGQhHBNiQAAgAhsjRIAAGlQAvALAgAAQBTAAA5g8QA4g8AAhmQAAhmg4g7Qg5g7hWAAQgiAAgqAKg");
	this.shape_32.setTransform(661.3,54.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Aj5D4IAAgNIATAAQAfAAANgUQAIgNAAgqIAAk/QAAgvgKgMQgOgQgcAAIgTAAIAAgNIDKAAQBuAAA7AZQA5AZAkA7QAjA7AABNQAABng/BGQhHBNiQAAgAhsjRIAAGlQAvALAgAAQBTAAA5g8QA4g8AAhmQAAhmg4g7Qg5g7hWAAQgiAAgqAKg");
	this.shape_33.setTransform(588.4,54.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("ABED+IAAgOQAegBAKgJQALgIAAgMQgBgQgPgjIgdhIIi/AAIgiBPQgNAdAAAPQAAAKALAJQALAJAkACIAAAOIicAAIAAgOQAegFAJgJQATgSAXg1ICumYIAMAAICuGcQAUAyASAPQAQAOAeACIAAAOgAhqA8ICqAAIhUjHg");
	this.shape_34.setTransform(534.9,53.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Aj5D4IAAgNIASAAQAgAAANgUQAIgNAAgqIAAk/QAAgvgKgMQgPgQgcAAIgSAAIAAgNIDKAAQBuAAA6AZQA7AZAjA7QAjA7AABNQAABng/BGQhHBNiPAAgAhrjRIAAGlQAuALAgAAQBTAAA4g8QA4g8AAhmQAAhmg4g7Qg3g7hYAAQggAAgqAKg");
	this.shape_35.setTransform(480.1,54.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhqD4IAAgNIASAAQAfAAAOgSQAJgMAAgtIAAk/QgBgmgEgMQgDgJgMgHQgQgJgSAAIgSAAIAAgNIDVAAIAAANIgSAAQgfAAgOASQgJAMAAAtIAAE/QAAAmAFAMQAEAJALAHQAQAJASAAIASAAIAAANg");
	this.shape_36.setTransform(441.3,54.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgfEAQgLgCgkgLQgkgMgKAAQgIAAgGAGQgFAFgDASIgOAAIAAirIAOAAQAKA2AQAbQAQAaAhARQAhASAnAAQAtAAAbgYQAagYAAghQAAgTgJgSQgLgTgUgQQgPgLg+gkQhBgigagWQgcgVgNgaQgOgZAAgfQAAg1ApgnQApgnBAAAQAmAAAsAUQAUAJAJAAQAJAAAHgGQAFgFAEgSIAOAAIAACsIgOAAQgHgxgQgeQgSgdgfgRQgggRggAAQgmAAgZAXQgZAXAAAeQAAAWAQATQAWAcBVAtQBFAmAaATQAaAUANAbQAOAbAAAeQAAA4grApQgtAphFAAQgUAAgTgEg");
	this.shape_37.setTransform(408.3,54.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("ABzD4IiojoIgeABIgLAAIgLgBIAACQQAAAvAKAMQAOAQAcAAIATAAIAAANIjUAAIAAgNIATAAQAfAAAOgVQAHgLAAgrIAAk/QAAgvgKgMQgOgQgcAAIgTAAIAAgNIC1AAQBOAAAmALQAlAMAbAfQAaAfAAAqQgBAugeAiQgdAig/ANIBmCOQAkAxAZAQQAZAQApAFIAAANgAhpjVIAADPIANAAIAHAAQBIAAAjgeQAkgfAAgwQAAgugdgdQgdgdgvAAQgWAAgkAGg");
	this.shape_38.setTransform(363.1,54.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AjUD4IAAgNIASAAQARAAAQgJQAMgGAEgLQAEgMAAgkIAAlCQAAgvgJgLQgOgPgeAAIgSAAIAAgNIF+AAIAFBsIgOAAQgIgngJgOQgJgPgTgIQgOgFglAAIiIAAIAADEIBtAAQAqAAAOgNQATgRADgqIANAAIAACsIgNAAQgGgkgFgLQgGgNgPgHQgPgHgfAAIhtAAIAACjQAAAhADAIQADAHAIAEQAHAEAVAAIBTAAQAqAAATgGQATgGASgRQAWgWAYguIAPAAIgrB8g");
	this.shape_39.setTransform(314.1,54.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AACD+Ii5mrQgOghgHgHQgIgMgNgGQgOgGgXgCIAAgOIDLAAIAAAOQgjADgKAIQgKAJAAANQAAASARAnIB9EiIB1kfQARgqABgQQgBgLgKgKQgKgJgagEIgGgBIAAgOICZAAIAAAOQgaAEgOANQgTARgPAlIitGmg");
	this.shape_40.setTransform(264.1,54.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhpD4IAAgNIASAAQAeAAAOgSQAJgMAAgtIAAk/QAAgmgFgMQgEgJgLgHQgQgJgRAAIgSAAIAAgNIDTAAIAAANIgSAAQgeAAgOASQgJAMAAAtIAAE/QAAAmAFAMQADAJAMAHQAQAJARAAIASAAIAAANg");
	this.shape_41.setTransform(224.7,54.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AC7D8IlGmPIAAExQgBAuAKALQAPAQAdAAIARAAIAAANIitAAIAAgNIARAAQAgAAANgTQAIgMAAgqIAAlYQgVgZgLgIQgMgJgVgGQgLgEgWAAIAAgNICHAAIEvFzIAAkdQAAgugKgLQgOgQgdAAIgSAAIAAgNICuAAIAAANIgSAAQgfAAgNATQgJAMAAAqIAAGhg");
	this.shape_42.setTransform(184.1,54.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ah4DiQgqgcgSgwQgMggAAhaIAAjBQAAgugMgOQgNgOgcAAIgTAAIAAgOIDXAAIAAAOIgTAAQgfAAgNATQgJANAAAqIAADXQAAAdAFAlQAFAmAOAVQAOAVAbANQAaANAlAAQAwAAAngUQAmgWAPggQANgiAAhPIAAjIQAAgvgKgMQgOgPgcAAIgTAAIAAgOICwAAIAAAOIgTAAQgdAAgQAYQgIAMAAAoIAADJQAABLgOApQgPAqgrAdQgsAdhLAAQhQAAgqgcg");
	this.shape_43.setTransform(130.7,54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.tema1},{t:this.text_1},{t:this.text}]}).wait(1));

	// tablon
	this.instance = new lib.tablon();
	this.instance.parent = this;
	this.instance.setTransform(-92,-98,4.593,2.653);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(548,262,1469.8,872.8);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/tablon.png", id:"tablon"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;