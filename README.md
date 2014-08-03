# svg-fixie [![Build Status](https://travis-ci.org/orangemug/svg-fixie.svg?branch=master)](https://travis-ci.org/orangemug/svg-fixie)
Fix the sizes of some SVG elements so they won't scale when the SVG scales

[![browser support](https://ci.testling.com/orangemug/svg-fixie.png)](https://ci.testling.com/orangemug/svg-fixie)


## Install

    npm install git://github.com/orangemug/svg-fixie.git


## API
Just pass it a reference to an SVGElement and a selector. The selector will be used to search for elements to fix.

    var SVGFixie = require("svg-fixie");
    var fixie = SVGFixie(svgEl, ".some-selector");

Then fix the scale

    fixie.fixScale();

You'll probably also want to call `#fixScale` on resize. 

To remove the scale from the element

    fixie.remove();

It also exposes `read`/`write` methods for use with [fastdom](https://github.com/wilsonpage/fastdom)


## License
MIT

