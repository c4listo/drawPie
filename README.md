drawPie
=======

## Overview
This is a lightweight bundle for drawing pie charts with css3. No other libraries needed.

## Code Example
```html
...
<link rel="stylesheet" href="drawPie.css" />
...
<script src="drawPie.js"></script>
<script>
...
document.write(drawPie([[ 3, "f00"], [ 4, "0f0"], [ 2, "00f"] ], 1.7));
...
```

## Reference
Take a look at the example html-file, all files are inline-documented.
Call the drawPie function in js and it returns a html-div as string containing the pie-chart.

The function accepts three parameters:

````
  drawPie (values, [scale], [id])
	
	values:	2 dimensional array
				field 0: values in numeric format
				field 1: colors in hex (3 or 6 digit)
	scale:	optional, scaling of the whole chart. If omitted the sum of the values is used
	id:		optional, element id of the outer container, can be used for positioning
```	
The default size of the chart is 30x30 px (see drawPie.css). The scale is applied to that size, that means if size is e.g. 3 the pie will be 90x90 px.

## Authors

done by Patrick Eisenhut and Arnold Graf

inspired by this blogpost: http://atomicnoggin.ca/blog/2010/02/20/pure-css3-pie-charts/
