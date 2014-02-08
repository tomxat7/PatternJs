/* 
	* PatternJs library
	* Copyright 2014, tomxat7(tomxat7@gmail.com)
	* licensed under the MIT licenses. 
*/
var PatternJs = {
	status : 0,
		
	Core: function (_C,_Type,_Type2){ 
		
	if(!this.status) return 0;
			
		var i, _N1 = 0, _N2 = 0;
					
		switch(this.status){
					
			case "Pattern1" :	
						
				for(i = 0; i < _C.length; ){
							
					for(var q = 0; (parseInt(_C.charCodeAt( i++ ), 10) > 47 && parseInt(_C.charCodeAt( i-1 ), 10) < 58) || 
								
					(parseInt(_C.charCodeAt( i-1 ), 10) >64 && parseInt(_C.charCodeAt( i-1 ), 10) < 91) ||
								
					(parseInt(_C.charCodeAt( i-1), 10) >96 && parseInt(_C.charCodeAt( i-1 ), 10) < 123) ; q++);
								
						if(q > 0) _N1++;
								
						if(parseInt(_C.charCodeAt(i-1),10) === parseInt(_Type.charCodeAt(0), 10)) _N2++;
				}
							
				if( _N1>1 && _N1-1 === _N2 ) return true;
							
				else  return false;
							
			case "Pattern2" : 
						
				var first = false;
							
				var second = false;
							
				for(i = 0; i < _C.length; ){
							
					for(var q = 0; (parseInt(_C.charCodeAt( i++ ), 10) > 47 && parseInt(_C.charCodeAt( i-1 ), 10) < 58) || 
								
					(parseInt(_C.charCodeAt( i-1 ), 10) >64 && parseInt(_C.charCodeAt( i-1 ), 10) < 91) || 
								
					(parseInt(_C.charCodeAt( i-1), 10) >96 && parseInt(_C.charCodeAt( i-1 ), 10) < 123) ; q++);
								
						if(q > 0){
								
							if(!first) first = i-1;
									
							else if(!second) second = i-1;
									
							_N1++;
						}
								
						if(((parseInt(_C.charCodeAt( i-1 ),10) === parseInt(_Type.charCodeAt(0), 10) ||
								
						parseInt(_C.charCodeAt( i-1 ),10) === parseInt(_Type2.charCodeAt(0), 10)) && !(first && second)) || 
								
						((first === i-1 && parseInt(_C.charCodeAt(first), 10) === parseInt(_Type.charCodeAt(0), 10)) ||
								
						(second === i-1 && parseInt(_C.charCodeAt(second),10) === parseInt(_Type2.charCodeAt(0), 10)))) _N2++;
								
				}
								
				if( _N1 === 3 && _N1-1 === _N2) return true;
							
				else  return false;
							
			default : //Bad selection 
						 
				return 0;
		}
					
	},	
				
	Pattern1: function (_C,_Type){
		
		if(!_C || !_Type) return false;
			
			this.status = "Pattern1";
			
			if(this.Core(_C,_Type)) return true;
			
			else return false;
			
	},
		
	Pattern2: function (_C,_Type,_Type2){
		
		if(!_C || !_Type  || !_Type2) return false;
			
			this.status = "Pattern2";
			
			if(this.Core(_C,_Type,_Type2)) return true;
			
			else return false;
			
	}
		
};
