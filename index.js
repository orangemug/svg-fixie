var Edna = require("edna");

function SvgFixie(el, selector) {
  this.el = el;
  this._selector = selector || ".-svg-fixed";
  this._sheet = new Edna();
  this._ruleRef;
  this._scaleCache = null;
}

/**
 * Helper to prevent DOM thrashing
 */
SvgFixie.prototype.read = function() {
  var svg = this.el;
  this._scale = svg.viewBox.baseVal.width / svg.offsetWidth;
};

SvgFixie.prototype.write = function() {
  var svg, scale, rules = {};

  svg = this.el;

  if(this._scale === null) {
    this.read();
  }

  scale = this._scale;

  // Remove any rules added previously
  if(this._ruleRef) {
    this._sheet.remove(this._ruleRef);
  }

  svg.setAttribute("data-svg-fixie", true);
  selector = "svg[data-svg-fixie] "+this._selector;

  rules[selector] = {
    "-webkit-transform": "scale("+scale+")",
    "-moz-transform":    "scale("+scale+")",
    "-o-transform":      "scale("+scale+")",
    "transform":         "scale("+scale+")"
  };

  this._scale = null;
  this._ruleRef = this._sheet.add(rules);

  this._sheet.append();
};

SvgFixie.prototype.fixScale = SvgFixie.prototype.write;

SvgFixie.prototype.remove = function() {
  this._sheet.destroy();
};

module.exports = SvgFixie;
