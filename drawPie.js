/*
	drawPie function
	
	values:	2 dimensional array or json
				field 0: values in numeric format
				field 1: colors in hex (3 or 6 digit)
	scale:	size of the whole chart, optional. If omitted the sum of the values is used to scale the chart
	id:		element id of the outer container, can be used for positioning
	
	by Eisenhut Patrick, Graf Arnold 2014
*/
var drawPie = function(values, scale, id){
		var html = '';
		var state = 0; // actual rotation
		var sum = 0; // sum of all values
		
		values.forEach(function(v){
			sum += v[0];
		});
		
		if ('undefined' === typeof scale) {
			scale = sum;
		}
		if ('undefined' === typeof id) {
			html = '<div class="outer-circle">';
		} else {
			html = '<div class="outer-circle" id=' + id + '>';
		}
		
		if (sum == 0) { // b/w circle dummy with fixed scale, if sum of values is zero
			html += 	'<div style="-webkit-transform: scale(0.2);transform: scale(0.2)" class="circle">'+
							'<div class="slice-outer full">'+
								'<div class="slice" style="background: #000;"></div>'+
							'</div>'+
							'<div style="-webkit-transform: scale(0.5);transform: scale(0.5)" class="slice-outer full">'+
								'<div class="slice" style="background: #fff;"></div>'+
							'</div>'+
						'</div>'+
					'</div>';
		} else {
			html += 	'<div style="-webkit-transform: scale('+scale+');transform: scale('+scale+')" class="circle">';	
			values.forEach(function(v){			
				var deg = v[0]*360/sum;
				if(deg == 360){ // if it is only one slice, dont split; draw a complete circle instead
					html += '<div class="slice-outer full">'+
								'<div class="slice" style="background: #'+v[1]+';"></div>'+
							'</div>';						
				}else if(deg > 180){ // if the slice is greater the 180 deg., then draw a half circle and the rest		
					html += '<div class="slice-outer gt50" style="-webkit-transform: rotate('+state+'deg); transform: rotate('+state+'deg);">'+
								'<div class="slice" style="background: #'+v[1]+'; -webkit-transform: rotate('+deg+'deg); transform:rotate('+deg+'deg);"></div>'+
								'<div class="slice" style="background: #'+v[1]+'; -webkit-transform:rotate(180deg); transform:rotate(180deg);"></div>'+
							'</div>';						
				}else if(deg <= 180){ // normal slice			
					html += '<div class="slice-outer" style="-webkit-transform: rotate('+state+'deg); transform: rotate('+state+'deg);">'+
								'<div class="slice" style="background: #'+v[1]+'; -webkit-transform: rotate('+deg+'deg); transform:rotate('+deg+'deg);"></div>'+
							'</div>';						
				}			
				state += deg; // move on to the next slide
			});
			html += '</div></div>';
		}
	
		return html;	
	};
