// 获取文本
var arr = document.getElementsByTagName( 'pre' )[0].innerText.split('\n');
arr.pop();
// 解析单行文本，转数字，形成长度跟偏移量
var closeRange = []
var parseOne = function( str ) {
		var range = str.split( '@' )[1];
		var rangePart = range.split(':');
		var rangeTotal = rangePart[0].split( ',' );
		var rangeSingle = rangePart[1].split( 'x' );
		return [[
							parseInt(rangeTotal[0]), parseInt(rangeTotal[1])
							],[
							parseInt(rangeSingle[0]), 
							parseInt(rangeSingle[1])
							]
							]
	}
// 解析所有行的文本，至数值
for( var i = 0 ; i < arr.length; i ++ ) {
		closeRange.push( parseOne( arr[i] ));
	}

// 针织布数组
var closePaint = [];
// 重叠计数
var repeatCount = 0;

for( var i = 0; i < closeRange.length ; i ++ ) {
		var single = closeRange[i];
		var offsetX = single[0][0];
		var offsetY = single[0][1];
		var zoneX = single[1][0];
		var zoneY = single[1][1];
		// 绘制整张针织布
		for( var y = offsetY; y < (offsetY + zoneY) ; y ++ ) {
			for( var x = offsetX ; x < (offsetX+ zoneX) ; x ++ ) {
			   	if( closePaint[y] && closePaint[y][x] ) {
			   	   	   repeatCount ++;
			   	   	   closePaint[y][x]='X'
	   	   	} else {
	   	   		   if( !closePaint[y] ) {
	   	   		   	   closePaint[y] = []
	   	   		   	}
	   	   		   	closePaint[y][x] = i + 1;
	   	   		}
			   	}
			} 
	}
console.info( repeatCount );