var infomation = [
	{
		name: "qwe" ,
		age: 10,
		hometown: "iop"
	},
	{
		name: "asd",
		age: 20,
		hometown: "jkl"
	},
	{
		name: "zxc",
		age: 20,
		hometown: "bnm"
	},
	{
		name: "qwe",
		age: 20,
		hometown: "jkl"
	}
]

function search(){
	if(typeof arguments[1] == "number"){
		var result = [];
		var count = 0;
		for(var i = 0; i < arguments[0].length; i++){
			if(arguments[0][i].age == arguments[1]){
				result[count] = arguments[0][i];
				count++;
			}
		}
		if(count == 0){
			return false;
		}
		else{
			return result;
		}
	}
	else if(typeof arguments[1] == "string"){
		var i;
		for(i = 0; i < arguments[0].length; i++){
			if(arguments[0][i].name == arguments[1]){
				return arguments[0][i];
			}
		}
		if(i == arguments[0].length){
			return false;
		}
	}
	else if(typeof arguments[1] == "object"){
		var result = [];
		var count = 0;
		for(var i = 0; i < arguments[0].length; i++){
			var flag_r = false;
			if(arguments[1].name == undefined || arguments[1].name == arguments[0][i].name){
				if(arguments[1].age == undefined || arguments[1].age == arguments[0][i].age){
					if(arguments[1].hometown == undefined || arguments[1].hometown == arguments[0][i].hometown){
						flag_r = true;
					}
				}
			}
			if(flag_r == true){
				result[count] = arguments[0][i];
				count++;
			}
		}
		if(count == 0){
			return false;
		}
		else{
			return result;
		}
	}
}

console.log(search(infomation, {name:"qwe"}));