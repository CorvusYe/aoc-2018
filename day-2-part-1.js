var find = function( str, len )  {
  var map = {};
  var mapAdd = function( c ) {
     if( map[c] ) {
         map[c] = map[c] + 1;
     } else {
         map[c] = 1;
     }
  }
  var countMap = function() {
     var twice = 0;
     var thible = 0;
     for( var p in map ) {
        if( map[p] == len ) {
           return true;
        }
     }
     return false;
  }
  var charArr = str.split('');
  for( var i = 0 ; i < charArr.length; i ++ ) {
    mapAdd( charArr[i] );
  }
  return countMap();
}

var sum = 0;
var twi = 0 ;
var tri = 0;
var arr = document.getElementsByTagName( 'pre' )[0].innerText.split('\n');
arr.pop();
for( var i = 0 ; i < arr.length ; i ++ ) {
    if( find( arr[i],2) ) {
        twi++;
    }
    if( find( arr[i],3 ) ) {
        tri ++;
    }
}
console.info( twi*tri );