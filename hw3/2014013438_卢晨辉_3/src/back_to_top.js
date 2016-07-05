function Back_to_top(){
	var id = "btn";
	var css = 'background-image:url("0.jpg");background-size:cover;width:100px;height:100px;border:1px black solid;position:fixed;display:none;';
	var x = 0;
	var y = 0;
	Back_to_top.prototype.init = function(){
		if(arguments[0].x != undefined && arguments[0].y != undefined){
			x = arguments[0].x;
			y = arguments[0].y;
			var sx = x.toString();
			var sy = y.toString();
			css = css + 'left:' +sx + 'px;';
			css = css + 'top:'+sy +'px;';
			return;
		}
		if(arguments[0].LeftUp == true){
			x = 0;
			y = 0;
			var sx = x.toString();
			var sy = y.toString();
			css = css + 'left:' +sx + 'px;';
			css = css + 'top:'+sy +'px;';
			return;
		}
		if(arguments[0].LeftDown == true){
			x = 0;
			y = 0;
			var sx = x.toString();
			var sy = y.toString();
			css = css + 'left:' +sx + 'px;';
			css = css + 'bottom:'+sy +'px;';
			return;
		}
		if(arguments[0].RightDown == true){
			x = 0;
			y = 0;
			var sx = x.toString();
			var sy = y.toString();
			css = css + 'right:' +sx + 'px;';
			css = css + 'bottom:'+sy +'px;';
			return;
		}
		if(arguments[0].RightUp == true){
			x = 0;
			y = 0;
			var sx = x.toString();
			var sy = y.toString();
			css = css + 'right:' +sx + 'px;';
			css = css + 'top:'+sy +'px;';
			return;
		}
	}
	
	
	function getScrollTop(){  
        var scroll;  
        if (window.pageYOffset){  
        	scroll = window.pageYOffset; 
        }  
        else if (document.compatMode && document.compatMode != 'BackCompat')  { 
     		scroll = document.documentElement.scrollTop; 
     	}  
        else if (document.body){ 
        	scroll = document.body.scrollTop; 
        }   
        return scroll;   
	}    

	window.addEventListener('load', function(){
		var icon = document.createElement('DIV');
		icon.id = id;
		icon.style.cssText = css;
		document.body.appendChild(icon);


		icon.addEventListener('click', function(){
			(function(){
				var top = getScrollTop();
				if(top > 0){
				window.scrollTo(0, top/1.2);
				setTimeout(arguments.callee, 10); }
			})();
		})
	})
	window.addEventListener('scroll', function(){
		var top = getScrollTop();
		var display = 'none';
		if(top > 0){
			display = 'block';
		}
		document.getElementById(id).style.display = display;
	})
	window.addEventListener('keydown',function(event){
		if(event.keyCode == 27){
			(function(){
				var top = getScrollTop();
				if(top > 0){
				window.scrollTo(0, top/1.5);
				setTimeout(arguments.callee, 10); }
			})();
		}
	})
}

var btp = new Back_to_top();
btp.init({RightDown:true});