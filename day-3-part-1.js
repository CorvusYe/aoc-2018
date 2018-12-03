var closePaint = [];
// 重叠计数
var repeatCount = 0;

for( var i = 0; i < closeRange.length ; i ++ ) {
		var single = closeRange[i];
		var zoneX = single[1][0];
		var zoneY = single[1][1];
		var offsetX = single[0][0];
		var offsetY = single[0][1];
		// 绘制整张针织布
		for( var y = offsetY; y < (offsetY + zoneY) ; y ++ ) {
			for( var x = offsetX ; x < (offsetX+ zoneX) ; x ++ ) {
			   	if( closePaint[y] && closePaint[y][x] ) {
			   	   	   if( closePaint[y][x] != 'X') repeatCount ++;
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