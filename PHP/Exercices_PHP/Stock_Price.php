<?php // "http://localhost:8081/Stock_Price.php"

$stocks = ["AMZN", "CACC", "GOOG", "TESL", "APLE"];
$prices = [["10.34", "12.14", "11.78", "10.53", "12.94"],["12.89", "11.36", "9.52", "10.28", "10.34"],["11.25", "12.21", "9.87", "10.97", "10.46"]];

function bestStockMarket($stocks, $prices){
    $result = [];       // final result returning the 3 stocks with the highest average price
    $assoArray = [];    // associative array keeping stock's name and their average prices

    for ($i = 0; $i < count($stocks); $i++){
        $sum = 0;

        for ($k = 0; $k < count($prices); $k++){
            $sum += $prices[$k][$i]; // Calculate sum of each price's Stock
        }
        
        // calculate the average price for each Stock, round it up and convert it in string
        $average = strval(round($sum/count($prices),2));

        //Add average value as key and stock name as value in the associative array
        $assoArray += [$average => $stocks[$i]];
    }

    krsort($assoArray);     // Sort the associative array in Descending order by keys(average price)

    $index = 0; // index of iteration in the foreach loop
    while ($index < 3) {    // count 3 iterations to keep only the 3 best stocks
        array_push($result, current($assoArray)); // Add the name of the 3 stocks with the highest average price
        next($assoArray);
        $index++;
    }

    return print_r($result);
}

bestStockMarket($stocks, $prices)

?>