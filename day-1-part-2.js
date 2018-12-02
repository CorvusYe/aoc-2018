var arr = document.getElementsByTagName( 'pre' )[0].innerText.split('\n');
arr.pop();
var valueArr = {},  sum = 0;
for( var i = 0; true; i++) {
  var j = i % arr.length;
  arr[j] && (sum += parseInt( arr[j] ));
  if( valueArr[sum] ) {
    console.info( sum );
    break;
  } else {
    valueArr[sum] = 1;
  }
}