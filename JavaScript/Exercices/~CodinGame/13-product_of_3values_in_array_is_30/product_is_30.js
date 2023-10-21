let tab = [5, 7, 1, 6, 3, 10];

function findThirtiy (tab){
	for(let i = 0; i<tab.length-2; i++){
		for(let k = i+1; k<tab.length-1; k++){
			for(let l = k+1; l<tab.length; l++){
				if(tab[i]*tab[k]*tab[l] == 30){
					console.log(`${tab[i]} * ${tab[k]} * ${tab[l]} ========= 30`);
				} else {
					console.log(`${tab[i]} * ${tab[k]} * ${tab[l]} NOT 30`);
				}
			}
		}
	}
}

findThirtiy (tab)