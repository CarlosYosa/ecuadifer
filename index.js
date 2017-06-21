(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.ecualine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("A3WmKMAutAAAIAAMVMgutAAAg");
	this.shape.setTransform(-4.5,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3WGLIAAsVMAutAAAIAAMVg");
	this.shape_1.setTransform(-4.5,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("A3WmKMAutAAAIAAMVMgutAAAg");
	this.shape_2.setTransform(-4.5,-1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("A3WGLIAAsVMAutAAAIAAMVg");
	this.shape_3.setTransform(-4.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-41.9,301,81);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.tema1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://carlosyosa.github.io/ecuadifer/ecualineales");
		}
		
		
		this.ecualine.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://carlosyosa.github.io/ecuadifer/ecualineales");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// temaS
	this.tema1 = new cjs.Text("ECUACIONES LINEALES", "40px 'Times New Roman'");
	this.tema1.name = "tema1";
	this.tema1.textAlign = "center";
	this.tema1.lineHeight = 46;
	this.tema1.lineWidth = 366;
	this.tema1.parent = this;
	this.tema1.setTransform(257.8,278.9);

	this.ecualine = new lib.ecualine();
	this.ecualine.parent = this;
	this.ecualine.setTransform(252.1,319.8,1.237,1.215);
	new cjs.ButtonHelper(this.ecualine, 0, 1, 2);

	this.text = new cjs.Text("ECUACIONES  EXACTAS", "40px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 366;
	this.text.parent = this;
	this.text.setTransform(252.1,530.3);

	this.text_1 = new cjs.Text("ECUACIONES SEPARABLES", "40px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 46;
	this.text_1.lineWidth = 366;
	this.text_1.parent = this;
	this.text_1.setTransform(249.5,401.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUCrIgggJQgYgHgGgBQgGABgDADQgEADgCAMIgJAAIAAhyIAJAAQAHAkAKASQALARAWANQAWALAaAAQAeAAASgQQASgQAAgWQAAgMgHgNQgHgMgOgLQgKgIgpgXQgrgXgRgOQgSgOgKgSQgJgRAAgUQAAgkAbgZQAcgaAqAAQAZAAAeANQAOAGAFAAQAGAAAFgEQAEgDACgMIAJAAIAAByIgJAAQgEghgMgTQgLgUgVgLQgVgLgWAAQgZAAgRAPQgQAPAAAUQAAAPAKANQAPASA4AfQAvAZARAMQARANAJASQAJASAAAUQAAAmgdAbQgdAbguAAQgOAAgMgCg");
	this.shape.setTransform(1005.6,166.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQALABALgGQAIgEADgIQACgIAAgYIAAjWQAAgfgGgIQgJgKgUAAIgMAAIAAgJID+AAIAEBJIgKAAQgFgagGgKQgGgJgNgGQgJgEgZAAIhaAAIAACDIBIAAQAcAAAKgIQANgLABgcIAJAAIAABxIgJAAQgDgXgEgIQgEgIgKgFQgKgFgVAAIhIAAIAABtQAAAWACAFQACAFAFADQAFACAOAAIA3AAQAcAAANgDQAMgFAMgLQAPgPAQgeIAKAAIgdBSg");
	this.shape_1.setTransform(976.1,166.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQAVAAAJgNQAFgIAAgcIAAjVQAAgfgGgIQgKgLgTAAIgMAAIAAgJICVAAIAAAJQgaAAgKAFQgLAFgEAIQgEAIAAAeIAADPQAAAUAEAIQADAEAGADQAGACAfABIAYAAQAngBAPgFQAPgGANgOQANgPAMgeIAIABIgcBag");
	this.shape_2.setTransform(945.6,166.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAtCpIAAgJQAUgBAHgFQAHgGAAgIQAAgLgKgXIgUgwIh/AAIgXA1QgIATAAAJQAAAIAHAGQAHAGAYABIAAAJIhoAAIAAgJQAVgDAGgGQAMgMAQgkIB0kPIAIAAIBzESQAOAhALAKQALAKAVABIAAAJgAhHAoIBxAAIg3iEg");
	this.shape_3.setTransform(912.2,166.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGClIAAgJIAMAAQAUABAJgMQAHgJAAgdIAAjVQAAgZgEgIQgDgHgHgEQgKgFgMgBIgMAAIAAgJICNAAIAAAJIgMAAQgVAAgIANQgHAHAAAeIAADVQAAAZADAIQADAGAHAFQALAFAMAAIAMAAIAAAJg");
	this.shape_4.setTransform(886,166.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhyBwQgiguAAg9QAAgxAXgpQAVgqAngWQAngXAuAAQAjAAAkASQAJAFAFAAQAGAAAGgFQAGgGADgMIAIAAIAHBwIgHAAQgPgygcgXQgdgWgnABQgfAAgbAQQgbARgPAkQgQAlAAA1QAAAuAPAgQAPAiAdARQAcASAkAAQAgAAAZgOQAZgOAdgpIAIAFQgYAsgiAVQghAUguAAQhRAAgtg9g");
	this.shape_5.setTransform(861,166.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AB9CoIjakJIAADKQAAAfAHAHQAJALATAAIAMAAIAAAJIhzAAIAAgJIALAAQAWAAAIgNQAGgIAAgcIAAjlQgPgRgHgFQgHgFgPgFQgHgCgOAAIAAgJIBaAAIDJD3IAAi+QAAgegHgIQgJgKgUAAIgLAAIAAgJIBzAAIAAAJIgLAAQgVAAgJAMQgGAIAAAcIAAEWg");
	this.shape_6.setTransform(825.5,167.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQALABALgGQAIgEADgIQACgIAAgYIAAjWQAAgfgGgIQgJgKgUAAIgMAAIAAgJID+AAIAEBJIgKAAQgFgagGgKQgGgJgNgGQgJgEgZAAIhaAAIAACDIBIAAQAcAAAKgIQANgLABgcIAJAAIAABxIgJAAQgDgXgEgIQgEgIgKgFQgKgFgVAAIhIAAIAABtQAAAWACAFQACAFAFADQAFACAOAAIA3AAQAcAAANgDQAMgFAMgLQAPgPAQgeIAKAAIgdBSg");
	this.shape_7.setTransform(792.8,166.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABMClIhvibIgUABIgHAAIgHgBIAABhQAAAfAGAHQAKAMASgBIANAAIAAAJIiOAAIAAgJIANAAQAVAAAJgNQAFgIAAgcIAAjVQAAgfgHgIQgJgLgTAAIgNAAIAAgJIB5AAQA0ABAZAHQAZAIARAUQASAVAAAdQAAAegUAXQgUAWgqAIIBEBgQAYAgARALQARALAbACIAAAJgAhFiNIAACJIAIAAIAFAAQAwAAAXgUQAYgVAAgfQAAgfgUgTQgTgUgfAAQgOAAgYAFg");
	this.shape_8.setTransform(761.6,166.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQALABALgGQAIgEADgIQACgIAAgYIAAjWQAAgfgGgIQgJgKgUAAIgMAAIAAgJID+AAIAEBJIgKAAQgFgagGgKQgGgJgNgGQgJgEgZAAIhaAAIAACDIBIAAQAcAAAKgIQANgLABgcIAJAAIAABxIgJAAQgDgXgEgIQgEgIgKgFQgKgFgVAAIhIAAIAABtQAAAWACAFQACAFAFADQAFACAOAAIA3AAQAcAAANgDQAMgFAMgLQAPgPAQgeIAKAAIgdBSg");
	this.shape_9.setTransform(728.9,166.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah8ClIAAgJIAMAAQAVABAJgMQAGgJAAgdIAAjVQAAgZgEgIQgCgHgIgEQgKgFgMgBIgMAAIAAgJID2AAIADBJIgJAAQgGgXgIgKQgJgMgMgEQgNgFgZgBIhIAAIAACDIA7AAQAVAAAJgJQAKgKADgbIAJAAIAABvIgJAAQAAgTgFgJQgFgJgIgEQgJgFgQAAIg7AAIAABoQAAAZADAIQACAGAIAFQALAFAKAAIAMAAIAAAJg");
	this.shape_10.setTransform(699.2,166.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhGClIAAgJIAMAAQAUABAJgMQAHgJAAgdIAAjVQgBgZgDgIQgDgHgHgEQgKgFgMgBIgMAAIAAgJICNAAIAAAJIgMAAQgVAAgIANQgHAHAAAeIAADVQAAAZADAIQADAGAHAFQALAFAMAAIAMAAIAAAJg");
	this.shape_11.setTransform(677.6,166.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AimClIAAgJIANAAQAVAAAJgNQAFgIAAgcIAAjVQAAgfgHgIQgJgLgTAAIgNAAIAAgJICHAAQBJAAAnARQAnARAXAoQAYAnAAA0QAABEgqAtQgvA0hgAAgAhHiLIAAEZQAfAGAVAAQA3AAAmgnQAlgoAAhEQAAhEglgnQgmgog5AAQgWAAgcAHg");
	this.shape_12.setTransform(650.7,166.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUCrIgggJQgYgHgGgBQgGABgDADQgEADgCAMIgJAAIAAhyIAJAAQAHAkAKASQALARAWANQAWALAaAAQAeAAASgQQASgQAAgWQAAgMgHgNQgHgMgOgLQgKgIgpgXQgrgXgRgOQgSgOgKgSQgJgRAAgUQAAgkAbgZQAcgaAqAAQAZAAAeANQAOAGAFAAQAGAAAFgEQAEgDACgMIAJAAIAAByIgJAAQgEghgMgTQgLgUgVgLQgVgLgWAAQgZAAgRAPQgQAPAAAUQAAAPAKANQAPASA4AfQAvAZARAMQARANAJASQAJASAAAUQAAAmgdAbQgdAbguAAQgOAAgMgCg");
	this.shape_13.setTransform(607,166.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQALABALgGQAIgEADgIQACgIAAgYIAAjWQAAgfgGgIQgJgKgUAAIgMAAIAAgJID+AAIAEBJIgKAAQgFgagGgKQgGgJgNgGQgJgEgZAAIhaAAIAACDIBIAAQAcAAAKgIQANgLABgcIAJAAIAABxIgJAAQgDgXgEgIQgEgIgKgFQgKgFgVAAIhIAAIAABtQAAAWACAFQACAFAFADQAFACAOAAIA3AAQAcAAANgDQAMgFAMgLQAPgPAQgeIAKAAIgdBSg");
	this.shape_14.setTransform(577.5,166.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AB9CoIjakJIAADKQAAAfAHAHQAJALATAAIAMAAIAAAJIhzAAIAAgJIALAAQAWAAAIgNQAGgIAAgcIAAjlQgPgRgHgFQgHgFgPgFQgHgCgOAAIAAgJIBaAAIDJD3IAAi+QAAgegHgIQgJgKgUAAIgLAAIAAgJIBzAAIAAAJIgLAAQgVAAgJAMQgGAIAAAcIAAEWg");
	this.shape_15.setTransform(543.6,167.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhzB9QgugxAAhMQAAhPA2gyQAugrBAAAQBBAAAvAxQAvAxAABJQAABLgwAyQgvAxhDAAQhEAAgvgwgAhIh6QghApAABQQAABQAiArQAbAiAsgBQAtABAfglQAegkAAhPQAAhTghgqQgbgigvABQgsAAgbAgg");
	this.shape_16.setTransform(508.1,166.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhGClIAAgJIALAAQAVABAKgMQAFgJAAgdIAAjVQABgZgEgIQgCgHgIgEQgLgFgMgBIgLAAIAAgJICNAAIAAAJIgMAAQgVAAgJANQgGAHAAAeIAADVQAAAZAEAIQACAGAIAFQAKAFAMAAIAMAAIAAAJg");
	this.shape_17.setTransform(481.8,166.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhyBwQgiguAAg9QAAgxAWgpQAXgqAngWQAngXAsAAQAlAAAiASQALAFAEAAQAHAAAEgFQAHgGADgMIAIAAIAIBwIgIAAQgPgygcgXQgcgWgnABQghAAgaAQQgbARgPAkQgPAlAAA1QAAAuAOAgQAPAiAcARQAeASAjAAQAhAAAZgOQAYgOAegpIAHAFQgZAsghAVQghAUguAAQhRAAgtg9g");
	this.shape_18.setTransform(456.8,166.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAtCpIAAgJQAUgBAHgFQAHgGAAgIQAAgLgKgXIgUgwIh/AAIgXA1QgIATAAAJQAAAIAHAGQAHAGAYABIAAAJIhoAAIAAgJQAVgDAGgGQAMgMAQgkIB0kPIAIAAIBzESQAOAhALAKQALAKAVABIAAAJgAhHAoIBxAAIg3iEg");
	this.shape_19.setTransform(422,166.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhQCXQgbgTgMggQgIgWAAg8IAAiAQAAgegJgKQgIgKgTAAIgMAAIAAgJICPAAIAAAJIgNAAQgVAAgIAOQgGAIgBAcIAACQQAAASAFAaQADAZAJANQAJAOASAKQARAIAZABQAgAAAZgPQAagOAKgWQAJgWAAg1IAAiFQAAgfgHgIQgJgLgTAAIgMAAIAAgJIB1AAIAAAJIgNAAQgUABgKAQQgFAHAAAcIAACFQAAAygKAcQgJAbgeAUQgcAUgzgBQg1AAgcgSg");
	this.shape_20.setTransform(385.8,167.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhyBwQgiguAAg9QAAgxAWgpQAXgqAmgWQAogXAsAAQAlAAAiASQALAFAEAAQAHAAAEgFQAHgGACgMIAJAAIAHBwIgHAAQgPgygcgXQgcgWgnABQghAAgaAQQgbARgPAkQgPAlAAA1QAAAuAOAgQAOAiAdARQAdASAlAAQAfAAAagOQAYgOAdgpIAIAFQgYAsgiAVQghAUguAAQhRAAgtg9g");
	this.shape_21.setTransform(351.3,166.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AiNClIAAgJIAMAAQALABALgGQAIgEADgIQACgIAAgYIAAjWQAAgfgGgIQgJgKgUAAIgMAAIAAgJID+AAIAEBJIgKAAQgFgagGgKQgGgJgNgGQgJgEgZAAIhaAAIAACDIBIAAQAcAAAKgIQANgLABgcIAJAAIAABxIgJAAQgDgXgEgIQgEgIgKgFQgKgFgVAAIhIAAIAABtQAAAWACAFQACAFAFADQAFACAOAAIA3AAQAcAAANgDQAMgFAMgLQAPgPAQgeIAKAAIgdBSg");
	this.shape_22.setTransform(319.2,166.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABED+IAAgNQAdgCALgIQAKgJAAgMQAAgQgOgjIgfhHIi+AAIgjBOQgMAdAAAOQAAAMALAIQALAJAjADIAAANIibAAIAAgNQAfgGAIgJQAUgSAWg1ICumYIANAAICsGcQAWAyAQAPQARAPAeACIAAANgAhrA9ICqAAIhTjIg");
	this.shape_23.setTransform(1153.5,81);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AC7D8IlGmPIAAExQgBAuALALQAOAQAdAAIARAAIAAANIitAAIAAgNIARAAQAgAAANgTQAIgMAAgqIAAlYQgVgZgLgIQgMgJgVgGQgLgEgWAAIAAgNICHAAIEvFzIAAkdQAAgugLgLQgNgQgdAAIgSAAIAAgNICuAAIAAANIgSAAQgfAAgNATQgJAMAAAqIAAGhg");
	this.shape_24.setTransform(1098.5,81.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABED+IAAgNQAegCAKgIQAKgJAAgMQAAgQgPgjIgehHIi+AAIgiBOQgNAdAAAOQAAAMALAIQALAJAkADIAAANIicAAIAAgNQAegGAJgJQATgSAXg1ICumYIAMAAICuGcQAUAyASAPQAQAPAeACIAAANgAhqA9ICqAAIhUjIg");
	this.shape_25.setTransform(1045.2,81);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjeD4IAAgNIASAAQAgAAANgUQAIgNAAgqIAAk/QAAgvgKgMQgOgQgdAAIgSAAIAAgNIDWAAQA7AAAlAIQA3AOAcAhQAdAiAAArQAAAmgWAdQgXAegsAOQAzAKAaAYQAjAiAAAwQAAAlgXAiQgXAigpAQQgpAPhUAAgAg2AGQgQABgKACIAADLQAqAKApAAQBCAAAjgdQAjgeAAgsQAAgdgQgbQgQgbgjgPQgkgQgzAAIgnABgAhQjXIAAC/QANADASABIAmABQA0AAAcgLQAagMAPgYQAOgXAAgdQAAgrgkgfQgjgfhDAAQglAAgdAIg");
	this.shape_26.setTransform(991.8,81.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABED+IAAgNQAdgCALgIQALgJAAgMQgBgQgPgjIgdhHIjAAAIghBOQgNAdAAAOQAAAMALAIQALAJAkADIAAANIidAAIAAgNQAggGAJgJQASgSAXg1ICvmYIALAAICtGcQAVAyASAPQARAPAeACIAAANgAhqA9ICqAAIhUjIg");
	this.shape_27.setTransform(941.1,81);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfEAQgMgCgjgLQgkgMgJAAQgJAAgGAGQgFAFgDASIgNAAIAAirIANAAQAJA2ARAbQAQAaAhARQAhASAnAAQAtAAAcgYQAZgYAAghQABgTgKgSQgLgTgUgQQgPgLg/gkQhAgigagWQgbgVgOgaQgOgZAAgfQAAg1ApgnQApgnA/AAQAnAAAsAUQAUAJAJAAQAJAAAHgGQAFgFAFgSIANAAIAACsIgNAAQgHgxgRgeQgSgdgfgRQgggRggAAQgmAAgZAXQgZAXAAAeQAAAWAQATQAWAcBVAtQBFAmAaATQAZAUAOAbQAOAbAAAeQAAA4grApQgsAphGAAQgUAAgTgEg");
	this.shape_28.setTransform(893.6,81.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ABED+IAAgNQAegCAKgIQALgJgBgMQAAgQgOgjIgfhHIi/AAIgiBOQgMAdAAAOQAAAMALAIQALAJAjADIAAANIicAAIAAgNQAggGAIgJQAUgSAWg1ICumYIANAAICsGcQAWAyAQAPQASAPAeACIAAANgAhrA9ICqAAIhTjIg");
	this.shape_29.setTransform(826.5,81);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AjVD4IAAgNIATAAQAgAAANgVQAIgMAAgqIAAk/QAAgvgKgMQgOgQgdAAIgTAAIAAgNIDgAAIAAANQgmAAgQAIQgQAHgGAMQgGAMAAAsIAAE3QAAAeAGAMQAEAHAJAEQAKAEAvAAIAkAAQA5AAAXgJQAYgIASgVQATgWATguIANACIgrCHg");
	this.shape_30.setTransform(776.6,81.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AjUD4IAAgNIASAAQARAAAQgJQAMgGAEgLQAEgMAAgkIAAlCQAAgvgJgLQgOgPgeAAIgSAAIAAgNIF+AAIAFBsIgOAAQgIgngJgOQgJgPgTgIQgOgFglAAIiIAAIAADEIBtAAQAqAAAOgNQATgRADgqIANAAIAACsIgNAAQgGgkgFgLQgGgNgPgHQgPgHgfAAIhtAAIAACjQAAAhADAIQADAHAIAEQAHAEAVAAIBTAAQAqAAATgGQATgGASgRQAWgWAYguIAPAAIgrB8g");
	this.shape_31.setTransform(712,81.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Aj5D4IAAgNIATAAQAfAAANgUQAIgNAAgqIAAk/QAAgvgKgMQgOgQgcAAIgTAAIAAgNIDKAAQBuAAA7AZQA5AZAkA7QAjA7AABNQAABng/BGQhHBNiQAAgAhsjRIAAGlQAvALAgAAQBTAAA5g8QA4g8AAhmQAAhmg4g7Qg5g7hWAAQgiAAgqAKg");
	this.shape_32.setTransform(661.3,81.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Aj5D4IAAgNIATAAQAfAAANgUQAIgNAAgqIAAk/QAAgvgKgMQgOgQgcAAIgTAAIAAgNIDKAAQBuAAA7AZQA5AZAkA7QAjA7AABNQAABng/BGQhHBNiQAAgAhsjRIAAGlQAvALAgAAQBTAAA5g8QA4g8AAhmQAAhmg4g7Qg5g7hWAAQgiAAgqAKg");
	this.shape_33.setTransform(588.4,81.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("ABED+IAAgNQAegCAKgIQALgJAAgMQgBgQgPgjIgdhHIi/AAIgiBOQgNAdAAAOQAAAMALAIQALAJAkADIAAANIicAAIAAgNQAegGAJgJQATgSAXg1ICumYIAMAAICuGcQAUAyASAPQAQAPAeACIAAANgAhqA9ICqAAIhUjIg");
	this.shape_34.setTransform(534.9,81);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Aj5D4IAAgNIASAAQAgAAANgUQAIgNAAgqIAAk/QAAgvgKgMQgPgQgcAAIgSAAIAAgNIDKAAQBuAAA6AZQA7AZAjA7QAjA7AABNQAABng/BGQhHBNiPAAgAhrjRIAAGlQAuALAgAAQBTAAA4g8QA4g8AAhmQAAhmg4g7Qg3g7hYAAQggAAgqAKg");
	this.shape_35.setTransform(480.1,81.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhqD4IAAgNIASAAQAfAAAOgSQAJgMAAgtIAAk/QgBgmgEgMQgDgJgMgHQgQgJgSAAIgSAAIAAgNIDVAAIAAANIgSAAQgfAAgOASQgJAMAAAtIAAE/QAAAmAFAMQAEAJALAHQAQAJASAAIASAAIAAANg");
	this.shape_36.setTransform(441.3,81.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgfEAQgLgCgkgLQgkgMgKAAQgIAAgGAGQgFAFgDASIgOAAIAAirIAOAAQAKA2AQAbQAQAaAhARQAhASAnAAQAtAAAbgYQAagYAAghQAAgTgJgSQgLgTgUgQQgPgLg+gkQhBgigagWQgcgVgNgaQgOgZAAgfQAAg1ApgnQApgnBAAAQAmAAAsAUQAUAJAJAAQAJAAAHgGQAFgFAEgSIAOAAIAACsIgOAAQgHgxgQgeQgSgdgfgRQgggRggAAQgmAAgZAXQgZAXAAAeQAAAWAQATQAWAcBVAtQBFAmAaATQAaAUANAbQAOAbAAAeQAAA4grApQgtAphFAAQgUAAgTgEg");
	this.shape_37.setTransform(408.3,81.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("ABzD4IiojoIgeABIgLAAIgLgBIAACQQAAAvAKAMQAOAQAcAAIATAAIAAANIjUAAIAAgNIATAAQAfAAAOgVQAHgLAAgrIAAk/QAAgvgKgMQgOgQgcAAIgTAAIAAgNIC1AAQBOAAAmALQAlAMAbAfQAaAfAAAqQgBAugeAiQgdAig/ANIBmCOQAkAxAZAQQAZAQApAFIAAANgAhpjVIAADPIANAAIAHAAQBIAAAjgeQAkgfAAgwQAAgugdgdQgdgdgvAAQgWAAgkAGg");
	this.shape_38.setTransform(363.1,81.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AjUD4IAAgNIASAAQARAAAQgJQAMgGAEgLQAEgMAAgkIAAlCQAAgvgJgLQgOgPgeAAIgSAAIAAgNIF+AAIAFBsIgOAAQgIgngJgOQgJgPgTgIQgOgFglAAIiIAAIAADEIBtAAQAqAAAOgNQATgRADgqIANAAIAACsIgNAAQgGgkgFgLQgGgNgPgHQgPgHgfAAIhtAAIAACjQAAAhADAIQADAHAIAEQAHAEAVAAIBTAAQAqAAATgGQATgGASgRQAWgWAYguIAPAAIgrB8g");
	this.shape_39.setTransform(314.1,81.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AACD+Ii5mrQgOghgHgHQgIgMgNgGQgOgGgXgDIAAgNIDLAAIAAANQgjAEgKAIQgKAIAAAOQAAASARAnIB9EiIB1kfQARgqABgQQgBgLgKgJQgKgLgagEIgGgBIAAgNICZAAIAAANQgaAFgOANQgTASgPAkIitGmg");
	this.shape_40.setTransform(264.1,82.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhpD4IAAgNIASAAQAeAAAOgSQAJgMAAgtIAAk/QAAgmgFgMQgEgJgLgHQgQgJgRAAIgSAAIAAgNIDTAAIAAANIgSAAQgeAAgOASQgJAMAAAtIAAE/QAAAmAFAMQADAJAMAHQAQAJARAAIASAAIAAANg");
	this.shape_41.setTransform(224.7,81.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AC7D8IlGmPIAAExQgBAuAKALQAPAQAdAAIARAAIAAANIitAAIAAgNIARAAQAgAAANgTQAIgMAAgqIAAlYQgVgZgLgIQgMgJgVgGQgLgEgWAAIAAgNICHAAIEvFzIAAkdQAAgugKgLQgOgQgdAAIgSAAIAAgNICuAAIAAANIgSAAQgfAAgNATQgJAMAAAqIAAGhg");
	this.shape_42.setTransform(184.1,81.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ah4DiQgqgcgSgwQgMghAAhZIAAjBQAAgugMgOQgNgPgcAAIgTAAIAAgNIDXAAIAAANIgTAAQgfAAgNAUQgJANAAAqIAADXQAAAdAFAmQAFAlAOAVQAOAUAbAOQAaANAlAAQAwABAngWQAmgVAPghQANghAAhPIAAjIQAAgvgKgLQgOgQgcgBIgTAAIAAgNICwAAIAAANIgTAAQgdAAgQAZQgIAMAAApIAADIQAABLgOApQgPApgrAeQgsAdhLAAQhQAAgqgcg");
	this.shape_43.setTransform(130.7,82.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.ecualine},{t:this.tema1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(665.5,397.5,1233.7,586.8);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;