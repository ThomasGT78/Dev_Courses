/* 
 * TableauNiveauAvance.js
 * Recherche dans tableau à valeurs multiples
 * Recherche multiple
 */

/*
 * LES FONCTIONS
 */
/**
 * 
 * @param {type} search
 * @param {type} dataArray
 * @returns {Array|multipleSearch.positions}
 */
function multiplePositionsSearch(search, dataArray)
{
    var positions = new Array();
    var find = false;

    for (var i = 0; i < dataArray.length; i++) {
        if (dataArray[i] === search) {
            find = true;
            positions.push(i + 1);
        }
    }

    if (!find) {
        positions.push(-1);
    }

    return positions;
} /// multiplePositionsSearch

/**
 * 
 * @param {type} searchArray
 * @param {type} dataArray
 * @returns {Array|multipleSearch.positions}
 */
function multipleSearch(searchArray, dataArray) {
    var positions = new Array();
    var find = false;

    for (var i = 0; i < dataArray.length; i++) {
        for (var j = 0; j < searchArray.length; j++) {
            if (dataArray[i] === searchArray[j]) {
                find = true;
                positions[j] = i + 1;
            }
        }
    }

    if (!find) {
        positions.push(-1);
    }

    return positions;
} /// multipleSearch


/*
 * MAIN
 */
//console.log("MAIN");
/*
 * Recherche de multiples positions d'une valeur dans un tableau à valeurs NON UNIQUES
 */
var dataArray = new Array(1, 3, 5, 7, 9, 11, 3, 5);
var search = 3;
var result = multiplePositionsSearch(search, dataArray);

var display = "";
for (var i = 0; i < dataArray.length; i++) {
    display += dataArray[i] + "-";
    //console.log(dataArray[i]);
}
document.getElementById("arrayData1").innerHTML = "Le tableau : " + display;

var display = "";
for (var i = 0; i < result.length; i++) {
    display += result[i] + "<br>";
}

document.getElementById("positions").innerHTML = "Les positions de " + search + " : <br>" + display;

/*
 * Recherche des positions de plusieurs valeurs dans un tableau à valeurs UNIQUES
 */
var dataArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
var searchArray = new Array(33, 55);

var display = "";
for (var i = 0; i < dataArray.length; i++) {
    display += dataArray[i] + "-";
    //console.log(dataArray[i]);
}
document.getElementById("arrayData2").innerHTML = "Le tableau de data : " + display;

var display = "";
for (var i = 0; i < searchArray.length; i++) {
    display += searchArray[i] + "-";
    //console.log(dataArray[i]);
}
document.getElementById("arraySearch2").innerHTML = "Le tableau valeurs recherchées : " + display;

result = multipleSearch(searchArray, dataArray);

var display = "";
for (var i = 0; i < result.length; i++) {
    display += result[i] + "<br>";
}

document.getElementById("multipleValuesPositions").innerHTML = "Le tableau des positions : <br>" + display;

// multipleValuesPositions