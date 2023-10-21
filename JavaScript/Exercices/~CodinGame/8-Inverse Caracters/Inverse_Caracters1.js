 const s = 'AAB'
 const array1 = [];
 const array2 = [];
 let newValue = "";
 
 const arrayS = s.split('')
 
 for (i=0; i< arrayS.length; i++){
     if(i==0){
         array1.push(arrayS[i])
     } else if (arrayS[i] != array1){
         array2.push(arrayS[i])
         break ;
     }
 }
 
 for (i=0; i<arrayS.length; i++){
     if (arrayS[i] == array1){
         newValue += array2[0]
     } else {
         newValue += array1[0]
     }
 }
 

 console.log(newValue);
 