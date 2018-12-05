var arr = document.getElementsByTagName( 'pre' )[0].innerText.split('\n');
arr.pop();
var plans;
var parse = function() {
	   for( var i = 0; i < arr.length ; i ++ ) {
	   	var str = arr[i];
	    var time = str.split( ']' )[0].substr(1);
	    plans.push( {
	    	  time: time,
	    	  text: str
	    	})
	   	}
	}
var orderPlans = function( ) {
	  plans.sort( function( a, b ) {
  	   return new Date( a.time ).getTime() - new Date( b.time ).getTime();
  	})
}

var parsePlan = function() {
	   var sleepTime = 0;
	   var person;
	   var sleepLine;
	   for( var i = 0 ; i < plans.length ; i ++ ) {
	   	   var str = plans[i].text;
	   	   if( str.indexOf( '#' ) != -1 ) {
	   	   		var id = parseInt( str.split( '#' )[1] );
	   	   	  	  person = s[id] || { id: id };
	   	   		s[id] = person;
	   	   	} else if( str.indexOf( 'falls asleep' ) != -1 ) {
	   	   		person.sleepLines = person.sleepLines || [];
	   	   		  sleepLine = {};
	   	   		  person.sleepLines.push( sleepLine );
	   	   		  sleepLine.sleepTime = plans[i].time;
	   	   		} else if( str.indexOf( 'wakes up' ) != -1  ) {
	   	   			   sleepLine.wakesUp = plans[i].time;
	   	   			}
	   	   
	   	}
	}

var pickUpPerson = function() {
	   var id = 0;
	   var total = 0;
	   for( var p in s ) {
	   	  var ms = 0;
	  	  var person = s[p];
	  	  for( var i = 0 ; person.sleepLines && i < person.sleepLines.length ; i ++ ) {
	  	  	  ms += new Date( person.sleepLines[i].wakesUp ).getTime() - new Date( person.sleepLines[i].sleepTime );
	  	  	}
	  	  if( ms > total ) {
	  	  	total = ms;
	  	  	   id = p;
	  	  	   s[p].total = ms;
	  	  	}
	  	}
	  	return s[id];
	}
var personMostSleep = function( p ) {
	    var ms = new Date( p.sleepLines[0].wakesUp ).getTime() - new Date( p.sleepLines[0].wakesUp.replace( /\d+:\d+/,'00:00' ) ).getTime();
	    console.info( (ms / 60 / 1000 -1 ) * p.id );
	}
var s = {};
plans = [];
parse();
orderPlans();
parsePlan();
var p = pickUpPerson();
personMostSleep( p );