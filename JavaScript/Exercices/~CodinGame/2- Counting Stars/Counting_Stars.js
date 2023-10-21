
 const N = Math.floor(Math.random()*50);
 console.log(N);
 for (let i = 0; i < N; i++) {
     var line1 = ''

     for (let j = 0; j < N; j++) {
         
         if (i%2 == 0){
             if (j%2 == 0){
                 line1 += '* ';
             } 
         } else {
             if (j%2 == 0){
                 line1 += ' *';
             }
         }
     }
     console.log(line1);
 
 }
 