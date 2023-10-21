
// Appeler plusieurs fonctions sur 1 Event

onPress={() => { 
	this.functionOne(); 
	this.functionTwo();
}}

// or

func = () => {
   this.functionOne(); 
   this.functionTwo();
}
onPress={this.func}

// or

onPress=[this.functionOne, this.functionTwo]