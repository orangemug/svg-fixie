var test     = require('tape');
var SVGFixie = require("../");
var template = require("./template.hbs");

test('stylesheet 1', function (t) {
  var container = document.createElement("div");
  container.innerHTML = template();
  document.body.appendChild(container);

	var el = container.querySelector("svg");
	var fixie = new SVGFixie(el);

	el.style.width = "50px";
	fixie.fixScale();
	t.equal(el.querySelector(".c1").getBoundingClientRect().width, 10);
	t.equal(el.querySelector(".c2").getBoundingClientRect().width, 15);
	t.equal(el.querySelector(".c3").getBoundingClientRect().width, 20);

	el.style.width = "200px";
	fixie.fixScale();
	t.equal(el.querySelector(".c1").getBoundingClientRect().width, 40);
	t.equal(el.querySelector(".c2").getBoundingClientRect().width, 60);
	t.equal(el.querySelector(".c3").getBoundingClientRect().width, 80);

	t.end();
});

