function $$(){
	if(typeof arguments[0] == "string"){
		if(arguments[0][0] == '#'){
			var arr = arguments[0].slice(1);
			this.element = document.getElementById(arr);

			this.element.attr = function(){
				if(arguments[1] == undefined){
					return this.getAttribute(arguments[0]);
				}
				else{
					this.setAttribute(arguments[0], arguments[1]);
				}
			}
			return this.element;
		}
		else if(arguments[0][0] == '.'){
			var arr = arguments[0].slice(1);
			this.element = document.getElementsByClassName(arr);
			
		}
		else{
			var arr = arguments[0];
			this.element = document.getElementsByTagName(arr);	
		}
		var arra = this.element;
		var i;
		for(i = 0; i < arra.length; i++){
			arra[i].attr = function(){
				if(arguments[1] == undefined){
					return this.getAttribute(arguments[0]);
				}
				else{
					this.setAttribute(arguments[0], arguments[1]);
				}

			}
	    }
	    
		return this.element;
	}
	
	else{
		return [];
	}
}

