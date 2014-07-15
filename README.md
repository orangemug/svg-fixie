# svg-fixie
Fix the sizes of some SVG elements so they won't scale when the SVG scales


## API
Just tell it what svg or SVGElement to fix the sizes for

    var SVGFixie = require("svg-fixie");
    var fixie = SVGFixie(svgEl, ".some-selector");

Then fix the scale

    fixie.fixScale();

You'll probably also want to `#fixScale` on resize. 

To remove the scale handler again

    fixie.destroy();


## License
MIT

