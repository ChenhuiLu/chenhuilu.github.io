window.onload = function(){
    
    var player1 = document.getElementById("player1")
    var player2 = document.getElementById("player2")
    var ball = document.getElementById("ball")
    
    var score1 = document.getElementById("score1")
    var score2 = document.getElementById("score2")

    var top1 = document.getElementById("top1")
    var top2 = document.getElementById("top2")
    
    var player_move_speed = 1
    var ball_move_speed_x = 0 //左正右负
    var ball_move_speed_y = 0 //上正下负
    var player1_move_speed_x = 0  //左正右负
    var player1_move_speed_y = 0  //上正下负
    var player2_move_speed_x = 0  //左正右负
    var player2_move_speed_y = 0  //上正下负
    var ball_move_flag_x = 0  //左0右1
    //左正右负 上正下负
    var player1_addspeed_x = 0
    var player1_addspeed_y = 0
    var player2_addspeed_x = 0
    var player2_addspeed_y = 0
    
    var player1_height = 10
    var player2_height = 10
    var ball_size = 4
    
    var isBegin = 1;
    var moveable = true;
    
    player1.style.top = "27vh";
    player1.style.left = "5vh";
    
    player2.style.top = "27vh";
    player2.style.left = "126vh";
    
    ball.style.top = "30vh";
    ball.style.left = "20vh";
    
    score1.innerText = "0";
    score2.innerText = "0";
    
    
    if(isBegin == 1){
        
        ball_move_speed_x = 0;
        ball_move_speed_y = 0;
        
        var timer = setInterval(move, 30)
    }
    
    var flag1 = false;
    var flag2 = false;

    $("#top1").addClass("topmove");
    setTimeout(function(){
        $("#top1").removeClass("topmove");
        top1.style.marginTop = "0vh";
        flag1 = true;
    },60000)

    $("#top2").addClass("topmove");
    setTimeout(function(){
        $("#top2").removeClass("topmove");
        top2.style.marginTop = "0vh";
        flag2 = true;
    },60000)


    document.onkeydown = function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        
        if(e && e.keyCode === 87){
            player1_move_speed_y = 1;
            player1_addspeed_y = 1;
        }
        else if(e && e.keyCode === 83){
           player1_move_speed_y = -1;
            player1_addspeed_y = -1;
        }
        else if(e && e.keyCode === 65){
           player1_move_speed_x = 1;
            player1_addspeed_x = 1;
        }
        else if(e && e.keyCode === 68){
           player1_move_speed_x = -1;
            player1_addspeed_x = -1;
        }
        else if(e && e.keyCode === 38){    
           player2_move_speed_y = 1;
            player2_addspeed_y = 1;
        }
        else if(e && e.keyCode === 40){
           player2_move_speed_y = -1;
            player2_addspeed_y = -1;
        }
        else if(e && e.keyCode === 37){
           player2_move_speed_x = 1;
            player2_addspeed_x = 1;
        }
        else if(e && e.keyCode === 39){
           player2_move_speed_x = -1;
            player2_addspeed_x = -1;
        }
        else if(e && e.keyCode == 32){
            if(moveable == false){
                moveable = true;
                if(flag1 == false){
                    $("#top1").removeClass("topmove");
                    top1.style.marginTop = "63vh";
                    setTimeout(function(){
                    $("#top1").addClass("topmove");
                    setTimeout(function(){
                        $("#top1").removeClass("topmove");
                        top1.style.marginTop = "0vh";
                        flag1 = true;
                    },60000)},10)
                }
                else{
                    top1.style.marginTop = "63vh";
                    flag1 = false;
                    setTimeout(function(){
                    $("#top1").addClass("topmove");
                    setTimeout(function(){
                        $("#top1").removeClass("topmove");
                        top1.style.marginTop = "0vh";
                        flag1 = true;
                    },60000)},10)
                }
                if(flag2 == false){
                    $("#top2").removeClass("topmove");
                    top2.style.marginTop = "63vh";
                    setTimeout(function(){
                    $("#top2").addClass("topmove");
                    setTimeout(function(){
                        $("#top2").removeClass("topmove");
                        top2.style.marginTop = "0vh";
                        flag2 = true;
                    },60000)},10)
                }
                else{
                    top2.style.marginTop = "63vh";
                    flag2 == false;
                    setTimeout(function(){
                    $("#top2").addClass("topmove");
                    setTimeout(function(){
                        $("#top2").removeClass("topmove");
                        top2.style.marginTop = "0vh";
                        flag2 = true;
                    },60000)},10)
                }
                var pp1 = document.getElementById("p1_win");
                var pp2 = document.getElementById("p2_win");
                pp1.style.left = "-68%";
                pp2.style.left = "-68%";
                score1.innerText = 0 + "";
                score2.innerText = 0 + "";
            }
            
        }
        else if(e && e.keyCode === 17){
            if(flag1 == true){
                flag1 = false;
                player1.style.height = "20vh";
                player1_height = 20;
                if(parseInt(player1.style.top) > (63-player1_height)){
                    player1.style.top = 63 - player1_height + "vh";
                }
                setTimeout(function(){
                    player1.style.height = "10vh";
                    player1_height = 10;
                    top1.style.marginTop = "63vh";
                    $("#top1").addClass("topmove");
                    setTimeout(function(){
                        $("#top1").removeClass("topmove");
                        top1.style.marginTop = "0vh";
                        flag1 = true;
                    },60000)
                },3000)
            }
        }
        else if(e && e.keyCode === 16){
            if(flag2 == true){
                flag2 = false;
                player2.style.height = "20vh";
                player2_height = 20;
                if(parseInt(player2.style.top) > (63-player2_height)){
                    player2.style.top = 63 - player2_height + "vh";
                }
                setTimeout(function(){
                    player2.style.height = "10vh";
                    player2_height = 10;
                    top2.style.marginTop = "63vh";
                    $("#top2").addClass("topmove");
                    setTimeout(function(){
                        $("#top2").removeClass("topmove");
                        top2.style.marginTop = "0vh";
                        flag2 = true;
                    },60000)
                },3000)
            }
        }
    }
    
    document.onkeyup = function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];

        if(e && e.keyCode == 87){
            player1_move_speed_y = 0;
            player1_addspeed_y = 0;
            
        }
        else if(e && e.keyCode == 83){
           player1_move_speed_y = 0;
            player1_addspeed_y = 0;
        }
        else if(e && e.keyCode == 65){
           player1_move_speed_x = 0;
            player1_addspeed_x = 0;
        }
        else if(e && e.keyCode == 68){
           player1_move_speed_x = 0;
            player1_addspeed_x = 0
        }
        else if(e && e.keyCode == 38){    
           player2_move_speed_y = 0;
            player2_addspeed_y = 0
        }
        else if(e && e.keyCode == 40){
           player2_move_speed_y = 0;
            player2_addspeed_y = 0;
        }
        else if(e && e.keyCode == 37){
           player2_move_speed_x = 0;
            player2_addspeed_x = 0;
        }
        else if(e && e.keyCode == 39){
           player2_move_speed_x = 0;
            player2_addspeed_x = 0;
        }
    }
    
    
    
    
    
    
    
   
    
    function move(){
       
        if(moveable == true){
        //player1的移动
        if(parseInt(player1.style.left) > 0 && parseInt(player1.style.left) < 62 || (parseInt(player1.style.left) === 0 && player1_move_speed_x < 0) || (parseInt(player1.style.left) === 62 && player1_move_speed_x > 0)){
            player1.style.left = parseInt(player1.style.left) - player1_move_speed_x + "vh";
            //console.log(player1.style.left);
        }
        
        if(parseInt(player1.style.top) > 0 && parseInt(player1.style.top) < (63-player1_height) || (parseInt(player1.style.top) === 0 && player1_move_speed_y < 0) || (parseInt(player1.style.top) === (63-player1_height) && player1_move_speed_y > 0)){
            player1.style.top = parseInt(player1.style.top) - player1_move_speed_y + "vh";
        }
        //player2的移动
        if(parseInt(player2.style.left) > 69 && parseInt(player2.style.left) < 131 || (parseInt(player2.style.left) === 69 && player2_move_speed_x < 0) || (parseInt(player2.style.left) === 131 && player2_move_speed_x > 0)){
            player2.style.left = parseInt(player2.style.left) - player2_move_speed_x + "vh";
        }
        if(parseInt(player2.style.top) > 0 && parseInt(player2.style.top) < (63-player2_height) || (parseInt(player2.style.top) === 0 && player2_move_speed_y < 0) || (parseInt(player2.style.top) === (63-player2_height) && player2_move_speed_y > 0)){
            player2.style.top = parseInt(player2.style.top) - player2_move_speed_y + "vh";
        }
        
        //球的碰撞
        
        /*与player1右侧碰撞 */
        if(parseInt(ball.style.top) > (parseInt(player1.style.top) - ball_size) && parseInt(ball.style.top) < (parseInt(player1.style.top) + player1_height) && parseInt(ball.style.left) <= parseInt(player1.style.left) + (ball_size / 2) && parseInt(ball.style.left) >= parseInt(player1.style.left) - ball_size && ball_move_flag_x === 0){
            ball_move_speed_x = (ball_move_speed_x * -1) + player1_addspeed_x;
            //控制最大球速
            if(ball_move_speed_x < -5){
                ball_move_speed_x = -5;
            }
            if(ball_move_speed_x > -2){
                ball_move_speed_x = -2;
            }
            ball_move_speed_y = ball_move_speed_y + player1_addspeed_y;
            //控制最大球速
            if(ball_move_speed_y > 3){
                ball_move_speed_y = 3;
            }
            if(ball_move_speed_y < -3){
                ball_move_speed_y = -3;
            }
            
            ball_move_flag_x = 1;
        }
        
        /*与player2左侧碰撞 */
        if(parseInt(ball.style.top) > (parseInt(player2.style.top) - ball_size) && parseInt(ball.style.top) < (parseInt(player2.style.top) + player2_height) && parseInt(ball.style.left) >= (parseInt(player2.style.left) - ball_size) && parseInt(ball.style.left) <= (parseInt(player2.style.left) + (ball_size/2)) &&
          ball_move_flag_x === 1){
            ball_move_speed_x = (ball_move_speed_x * -1) + player2_addspeed_x;
            //控制最大球速
            if(ball_move_speed_x > 5){
                ball_move_speed_x = 5;
            }
            if(ball_move_speed_x < 2){
                ball_move_speed_x = 2;
            }
            
            
            ball_move_speed_y = ball_move_speed_y + player2_addspeed_y;
            //控制最大球速
            if(ball_move_speed_y > 3){
                ball_move_speed_y = 3;
            }
            if(ball_move_speed_y < -3){
                ball_move_speed_y = -3;
            }
            
            ball_move_flag_x = 0;
        }
        
        
        /*和上侧边界碰撞*/
        if(parseInt(ball.style.top) <= 0){
            ball_move_speed_y = ball_move_speed_y * -1;
        }
        /*和下侧边界碰撞*/
        if(parseInt(ball.style.top) >= 59){
            ball_move_speed_y = ball_move_speed_y * -1;
        }
        /*和左侧边界碰撞*/
        if(parseInt(ball.style.left) <= 0 && (parseInt(ball.style.top) < 18 || parseInt(ball.style.top) > 42) && ball_move_flag_x === 0){
            ball_move_speed_x = ball_move_speed_x * -1;
            ball_move_flag_x = 1;
        }
        else if(parseInt(ball.style.left) <= -4 && parseInt(ball.style.top) >= 18 && parseInt(ball.style.top) <= 42){
            //player2进球
            score2.innerText = parseInt(score2.innerText) + 1 + "";
            reset();
            if(parseInt(score2.innerText) == 5){
                var pp2 = document.getElementById("p2_win");
                $("#p2_win").addClass("moveright");
                setTimeout(function(){
                    $("p2_win").removeClass("moveright");
                    pp2.style.left = "16%";
                    moveable = false;
                },500);
            }
            
        }
            
        /*和右侧边界碰撞*/
        if(parseInt(ball.style.left) >= 129&& (parseInt(ball.style.top) < 18 || parseInt(ball.style.top) > 42 && ball_move_flag_x === 1)){
            ball_move_speed_x = ball_move_speed_x * -1;
            ball_move_flag_x = 0;
        }
        else if(parseInt(ball.style.left) >= 133 && parseInt(ball.style.top) >= 18 && parseInt(ball.style.top) <= 42){
            //player1进球
            score1.innerText = parseInt(score1.innerText) + 1 + "";
            reset();
            if(parseInt(score1.innerText) == 5){
                var pp1 = document.getElementById("p1_win");
                $("#p1_win").addClass("moveright");
                setTimeout(function(){
                    $("p1_win").removeClass("moveright");
                    pp1.style.left = "16%";
                    moveable = false;
                },500);
            }
            
        }
        
        
        
        
         //球的移动
        ball.style.left = parseInt(ball.style.left) - ball_move_speed_x + "vh";
        ball.style.top = parseInt(ball.style.top) - ball_move_speed_y + "vh";
        }
    }
    
    function reset(){
        player1.style.top = "27vh";
        player1.style.left = "5vh";
    
        player2.style.top = "27vh";
        player2.style.left = "126vh";
    
        ball.style.top = "30vh";
        ball.style.left = "20vh";
        
        ball_move_speed_x = 0;
        ball_move_speed_y = 0;
        
        ball_move_flag_x = 0;
        
    }
    
    function modal(){
	   var bt = document.getElementById("button");
	   var ct = document.getElementById("introduction");
	   bt.onmousedown = function(){
		  ct.style.display = 'block';
	   }
	   window.addEventListener('keydown',function(e){
		  if(e.keyCode == 27){
			ct.style.display = 'none';
		  }
	   })
    }
    var m = new modal();

   
}