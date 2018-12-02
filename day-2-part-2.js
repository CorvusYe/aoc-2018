var samePath = function( str1, str2) {
  var str1Arr = str1.split( '' );
  var str2Arr = str2.split( '' );
  var sameArr = [];
  for( var i = 0 ; i < str1Arr.length ; i ++ ) {
    if( str1Arr[i] == str2Arr[i] ) {
	  sameArr.push( str1Arr[i] );
    }
  }
  return sameArr;
}
var arr = document.getElementsByTagName( 'pre' )[0].innerText.split('\n');
arr.pop();
var maxLen = 0;
var  maxStr;
for( var i = 0 ; i < arr.length ; i ++ ) {
   for( var j = 0 ; j < arr.length ; j ++ ) {
      var sameArr = samePath( arr[i], arr[j] );
      if( sameArr.length > maxLen && j != i ) {
        maxStr = sameArr;
      }
   }
}
console.info( maxStr.join( '' ) );