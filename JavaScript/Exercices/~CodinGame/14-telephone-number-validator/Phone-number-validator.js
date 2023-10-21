function telephoneCheck(str) {
  let arr = str.split('')
  let result = false;

  /**
   * FUNCTION CHECK if is separator or digit
   */
  let separator = function (char, index){
    return arr[index] === char? true : false;
  }
  let isDigit = function (index){
    return /\d/.test(arr[index]) ? true : false;
  }

  /**  
   * TEST CONDITIONS to validate the format 
   **/
   
  if (arr[0] === "1" && arr[1] === " "){
    arr.splice(0,2)
  } else 
  if (arr[0] === "1"){
    arr.splice(0,1)
  }
  

  if (arr.includes('(')){ // (555)555-5555 OR (555) 555-5555  
    result = separator('(', 0) && separator(')', 4) ? true : false;


    // if (555)555-5555
    if(result && arr.length == 13){ 
      result = separator('-', 8) ? true : false;
      for (let i = 0; i < arr.length; i++){
        if (!result) { break }
        i !== 0 && i !== 4 && i !== 8 ? result = isDigit(i) : '';
      } // end for
    } // end (555)555-5555


    // if (555) 555-5555
    else if (result) { 
      result = separator(' ', 5) && separator('-', 9) ? true : false;
      for (let i = 0; i < arr.length; i++){
        if (!result) { break }
        i !== 0 && i !== 4 && i !== 5 && i !== 9 ? result = isDigit(i) : '';
      } // end for
    }// end (555) 555-5555
  } // end (555)555-5555 OR (555) 555-5555


  // if 5555555555
  else if (arr.length === 10){ 
    for (let i = 0; i < arr.length; i++){
      result = isDigit(i)
      if (!result) { break }
    }
  } // end 5555555555
  
  
  // 555 555 5555 && 555-555-5555
  else if (arr.length === 12){ 
      let sep = '';
    for (let i = 0; i < arr.length; i++){
      
      if (i == 3) { 
        sep = arr[i]
        result = separator('-', i) || separator(' ', i)
      } 
      else if (i == 7) { 
        arr[i] != sep ? result = false : result = true
        if (!result) { break }
        // result = separator('-', i) || separator(' ', i)
      } 
      else {
      result = isDigit(i);
      }

      if (!result) { break }
    }
  } // end 555 555 5555 && 555-555-5555
  

  console.log(str);
  return result;
}

// telephoneCheck("555-555-5555");