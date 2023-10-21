<?php
function computeClosestToZero(array $ts) {
  // Write your code here
  // To debug (equivalent to var_dump): error_log(var_export($var, true));
  $result = $ts[0];
  $temp = abs($ts[0]);
  for($i=1; $i < count($ts); $i++){
    if($ts[i] < $temp){
      $temp = abs($ts[i]);
      $result = $ts[i];
    } else if ($ts[i] == $temp && $ts[i] > $result){
      $temp = abs($ts[i]);
      $result = $ts[i];
    }
    
  };
  
  return $result;
}

?>