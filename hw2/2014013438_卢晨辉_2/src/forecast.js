var teams = [
	"Switzerland",
	"Poland",
	"Croatia",
	"Portugal",
	"Wales",
	"Northern_Ireland",
	"Hungary",
	"Belgium",
	"Germany",
	"Slovakia",
	"Italy",
	"Spain",
	"France",
	"Ireland",
	"England",
	"Iceland"
]

var list = {
	"Switzerland" : 0,
	"Poland" : 0,
	"Croatia" : 50,
	"Portugal" : 50,
	"Wales" : 50,
	"Northern_Ireland" : 60,
	"Hungary" : 80,
	"Belgium" : 90,
	"Germany" : 100,
	"Slovakia" : 10,
	"Italy" : 20,
	"Spain" : 30,
	"France" : 40,
	"Ireland" : 50,
	"England" : 50,
	"Iceland" : 60
}

function probility(a, b){
	var result;
	if(a == 0){
		if(b == 0){
			result = 0.5;
		}
		else{
			result = 0;
		}
	}
	else{
		if(b == 0){
			result = 1;
		}
		else{
			result = a / (a+b);
		}
	}
	return result;
}

function calculate(){
	var table = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	
	if(arguments.length == 1){
		for(var i = 0; i < 16; i++){
			if(teams[i] == arguments[0]){
				table[i] = 1;
			}
		}
		return table;
	}
	else if(arguments.length == 3){
		for(var i = 0; i < 16; i++){
			for(var j = 0; j < 16; j++){
				table[i] = table[i] + arguments[0][i]*(arguments[1][j] * probility(arguments[2][teams[i]], arguments[2][teams[j]]));
				table[j] = table[j] + arguments[1][j]*(arguments[0][i] * (1-probility(arguments[2][teams[i]], arguments[2][teams[j]])));
			}
		}
		return table;
	}
}

function forecast(strength, country){
	var t1 = calculate(
		calculate(calculate(calculate("Switzerland"),calculate("Poland"),strength),calculate(calculate("Croatia"),calculate("Portugal"),strength),strength)
	   ,calculate(calculate(calculate("Wales"),calculate("Northern_Ireland"),strength),calculate(calculate("Hungary"),calculate("Belgium"),strength),strength),strength);
	var t2 = calculate(
		calculate(calculate(calculate("Germany"),calculate("Slovakia"),strength),calculate(calculate("Italy"),calculate("Spain"),strength),strength)
	   ,calculate(calculate(calculate("France"),calculate("Ireland"),strength),calculate(calculate("England"),calculate("Iceland"),strength),strength),strength);
	var t3 = calculate(t1, t2, strength);
	for(var i = 0; i < 16; i++){
		if(teams[i] == country){
			return t3[i];
		}
	}
}

console.log(forecast(list, "Switzerland"));