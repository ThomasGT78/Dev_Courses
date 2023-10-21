<?php // "http://localhost:8081/Stock_Price.php"

$stocks = ["AMZN", "CACC", "GOOG", "TESL", "APLE"];
$prices = [["10.34", "12.14", "11.78", "10.53", "12.94"],["12.89", "11.36", "9.52", "10.28", "10.34"],["11.25", "12.21", "9.87", "10.97", "10.46"]];

function bestStockMarket($stocks, $prices){
    $result = [];
    $assoArray = [];

    for ($i = 0; $i < count($stocks); $i++){
        $sum = 0;
        for ($k = 0; $k < count($prices); $k++){
            $sum += $prices[$k][$i];
        }
        $average = strval(round($sum/count($prices),2));
        $assoArray += [$average => $stocks[$i]];
    }

    krsort($assoArray);
    $index = 0;
    while ($index < 3) {
        array_push($result, current($assoArray));
        next($assoArray);
        $index++;
    }

    return print_r($result);
}

bestStockMarket($stocks, $prices)

?>