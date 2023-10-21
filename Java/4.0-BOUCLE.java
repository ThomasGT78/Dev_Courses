
/**  FOR  **/
for(int i = 0; i < 10; i++){
	System.out.println("i = " + i + " !")
}

// Continue
for ( int i=0; i <10; i++) {
   if(i == 2 ||i == 5) {
   continue;
   }
System.out.println(“Valeur de i : “ + i + “.”);
}

// Break
for ( int i=0; i <10; i++) {
   if(i == 18/2) {
   break;
   }
System.out.println(“Valeur de i : “ + i + “.”);
}

/// COLLECTIONS
int[] myArray = new int[]{7,2,4};

for (int i=0; i<myArray.length; i++) {
    System.out.println(myArray[i]);
}

/**   FOR EACH  **/
for (int number: myArray){
   System.out.println(number);
}

/**  WHILE  **/
int numberOfTrees = 0;

while (numberOfTrees < 10) {
   numberOfTrees += 1;
   System.out.println("I planted " + numberOfTrees + " trees");
}

System.out.println("I have a forest!");


/**  WHILE DO  **/
int pushUpGoal = 10;
do{
   print ("Push up!");
   pushUpGoal -= 1;
} while(pushUpGoal > 0);