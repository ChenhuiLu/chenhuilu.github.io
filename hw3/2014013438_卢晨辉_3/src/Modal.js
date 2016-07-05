function Modal(){
	var bt = document.getElementById('btn');
	var ct = document.getElementById('content');
	var Dragable = true;
	var visible = false;
	var ck = 27;
	var css = "display: none;position: absolute;top:200px;left:200px;width: 500px;height: 300px;background-color: white;"
	ct.style.cssText = css;
	Modal.prototype.init = function(){
		if(arguments[0].content != undefined){
			ct.innerText = arguments[0].content;
		}
		if(arguments[0].draggable == false){
			Dragable = false;
		}
		if(arguments[0].closeKey != undefined){
			ck = arguments[0].closeKey;
		}
	}
	bt.addEventListener('click',function(){
		ct.style.display = 'block';
		visible = true;
		
	})


	window.addEventListener('keydown',function(e){
		if(e.keyCode == ck){
			ct.style.display = 'none';
			visible = false;
		}
	})

	if(Dragable == true){
		var isPressed = false;
		var oleft, otop;
		var dx, dy;
		
		oleft = parseInt(ct.style.left);
		otop = parseInt(ct.style.top);
		
		ct.onmousedown = function(e){
			isPressed = true;
			dx = e.clientX;
			dy = e.clientY;

		}
		ct.onmouseout = function(){
			oleft = parseInt(ct.style.left);
			otop = parseInt(ct.style.top);
			isPressed = false;
		}
		document.onmousemove = function(e){
			if(isPressed){
				ct.style.top = e.clientY - dy + otop + "px";
				ct.style.left = e.clientX - dx + oleft + "px";
			}
		}
		document.onmouseup = function(){
			oleft = parseInt(ct.style.left);
			otop = parseInt(ct.style.top);
			isPressed = false;
		}
	}
}

var m = new Modal();
m.init({content:"dgajgdja"});