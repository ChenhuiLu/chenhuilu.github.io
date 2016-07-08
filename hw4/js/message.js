window.onload = function(){
	var socket = io.connect("https://wall.cgcgbcbc.com");

	var text1 = document.getElementById("box1");
	var text2 = document.getElementById("box2");
	var text3 = document.getElementById("box3");
	var mm;
	var flag = false;
	var flag1 = true;
	function changeDisplay(message){

		var text1 = document.getElementById("box1");
		var text2 = document.getElementById("box2");
		var text3 = document.getElementById("box3");

		if(flag1 == true){
			text2.id = "box1";
		text3.id = "box2";


		text1.parentNode.removeChild(text1);

		
		var msgEle = document.createElement('div');
		
		msgEle.id = "box3";
		msgEle.className = 'msg';


		var leftEle = document.createElement('div');
		leftEle.className = 'left';
		leftEle.id = 'le';
		var imageEle = document.createElement('div');
		imageEle.className = 'image';
		imageEle.id = 'im';
		var imgEle = document.createElement('img');
		imgEle.src = message.headimgurl;
		
		if(message.nickname.length > 10){
			var nameEle = document.createElement('marquee');
		}
		else{
			var nameEle = document.createElement('div');
			
		}
		nameEle.className = 'name';
		nameEle.innerText = message.nickname;
		
		if(message.content.length > 23){
			var rightEle = document.createElement('marquee');
			msgEle.scrollamount = 1;
		}
		else{
			var rightEle = document.createElement('div');
		}
		rightEle.className = 'right';
		rightEle.innerText = message.content;
		

		text2.parentNode.appendChild(msgEle);
		var tt = document.getElementById('box3');
		tt.appendChild(leftEle);
		tt.appendChild(rightEle);
		tt.firstChild.appendChild(imageEle);
		tt.firstChild.appendChild(nameEle);
		tt.firstChild.firstChild.appendChild(imgEle);
		}
		else{
		$("#box1").addClass("mimove");
		setTimeout(function(){
			$("#box1").removeClass("mimove");
		text2.id = "box1";
		text3.id = "box2";


		text1.parentNode.removeChild(text1);

		
		var msgEle = document.createElement('div');
		
		msgEle.id = "box3";
		msgEle.className = 'msg';


		var leftEle = document.createElement('div');
		leftEle.className = 'left';
		leftEle.id = 'le';
		var imageEle = document.createElement('div');
		imageEle.className = 'image';
		imageEle.id = 'im';
		var imgEle = document.createElement('img');
		imgEle.src = message.headimgurl;
		
		if(message.nickname.length > 10){
			var nameEle = document.createElement('marquee');
		}
		else{
			var nameEle = document.createElement('div');
			
		}
		nameEle.className = 'name';
		nameEle.innerText = message.nickname;
		
		if(message.content.length > 23){
			var rightEle = document.createElement('marquee');
			msgEle.scrollamount = 1;
		}
		else{
			var rightEle = document.createElement('div');
		}
		rightEle.className = 'right';
		rightEle.innerText = message.content;
		

		text2.parentNode.appendChild(msgEle);
		var tt = document.getElementById('box3');
		tt.appendChild(leftEle);
		tt.appendChild(rightEle);
		tt.firstChild.appendChild(imageEle);
		tt.firstChild.appendChild(nameEle);
		tt.firstChild.firstChild.appendChild(imgEle);
	},600);
	}

		

	}

	function adminDisplay(){
		flag = true;
		var ad = document.getElementById('abox');
		var ar = document.getElementsByClassName('aright');
		var an = document.getElementsByClassName('aname');
		an[0].innerText = 'administer';
		ad.style.display = 'block';
		ar[0].innerText = mm.content;

		var time;
		clearTimeout(time);
        time = setTimeout(function(){
        	
        		ad.style.display = 'none';
        
            
            flag = false;
            
        }, 10000);
	}

	function createXHR(){
	    if (typeof XMLHttpRequest != "undefined"){
	            return new XMLHttpRequest();
	    } 
	    else {
	            throw new Error("No XHR object available.");
	    } 
	}
	var xhr = createXHR();
	xhr.onreadystatechange = function(event){ 
		if (xhr.readyState == 4){      
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
			    var temp = eval(xhr.responseText);
			    for(var i = 2; i >= 0; i--){
			    	changeDisplay(temp[i]);
			    }
			    flag1 = false;
			} 
			else{    
			    salert("Request was unsuccessful: " + xhr.status); 
			} 
		} 
	}; 
	xhr.open("GET", "https://wall.cgcgbcbc.com/api/messages?num=3", true); 
	xhr.send(null);

	socket.on('new message', function(message){
		changeDisplay(message);
	});

	socket.on('admin', function(message){
		mm = message;
		adminDisplay();
	});

}