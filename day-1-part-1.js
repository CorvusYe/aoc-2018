var arr = document.getElementsByTagName( 'pre' )[0].innerText.split('\n');
arr.pop();
var valueArr = {};
var sum = 0;
for( var i = 0; i < arr.length; i++) {
  sum += parseInt( arr[i] );
}
console.info( sum );