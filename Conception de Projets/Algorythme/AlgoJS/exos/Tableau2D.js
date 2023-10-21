/* 
 * Tableau2D.js
 * Tableau2D : somme
 * Tableau 2D : Rechercher une valeur
 * Tableau2D : somme par ligne
 * Tableau2D : somme par colonne
 */

/**
 * 
 * @param {type} dataArray
 * @returns {Number}
 */
function sum(dataArray) {
    var s = 0;
    for (var i = 0; i < dataArray.length; i++) {
        for (var j = 0; j < dataArray[i].length; j++) {
            s += dataArray[i][j];
        }
    }
    return s;
} /// sum

/**
 * 
 * @param {type} dataSearch
 * @param {type} dataArray
 * @returns {Array|Number|Number.positions|search.positions}
 */
function search(dataSearch, dataArray) {
    var positions = new Array();
    var find = false;
    console.log("search");
    for (var i = 0; i < dataArray.length; i++) {
        for (var j = 0; j < dataArray[i].length; j++) {
            if (dataArray[i][j] == dataSearch) {
                positions.push((i + 1) + " : " + (j + 1));
                find = true;
            }
            console.log("loop");
        }
    }

    if (!find) {
        positions = -1;
    }

    return positions;
} /// search

/**
 * 
 * @param {type} dataArray
 * @returns {Number}
 */
function lineSum(dataArray) {
    var t = new Array();
    // On parcourt les lignes
    for (var i = 0; i < dataArray.length; i++) {
        var s = 0;
        // On parcourt les colonnes
        for (var j = 0; j < dataArray[i].length; j++) {
            s += dataArray[i][j];
        }
        t[i] = s;
    }
    return t;
} /// lineSum

/**
 * 
 * @param {type} dataArray
 * @returns {Number}
 */
function columSum(dataArray) {
    var t = new Array();
    // On parcourt les colonnes
    for (var i = 0; i < dataArray[0].length; i++) {
        var s = 0;
        // On parcourt la ligne
        for (var j = 0; j < dataArray.length; j++) {
            s += dataArray[j][i];
        }
        t[i] = s;
    }
    return t;
} /// columSum



/*
 * MAIN
 */
var dataArray = [[1, 2], [3, 4], [5, 6]];

/*
 * DISPLAY
 */
//dataArray[dataArray.length] = 7;
var display = "";
for (var i = 0; i < dataArray.length; i++) {
    for (var j = 0; j < dataArray[i].length; j++) {
        display += dataArray[i][j] + "-";
        //console.log(dataArray[i][j]);
    }
    display += "<br>";
}
document.getElementById("arrayData").innerHTML = "Le tableau : <br>" + display;


/*
 * SUM
 */
var s = sum(dataArray);
document.getElementById("sum").innerHTML = "Somme : " + s;

/*
 * SEARCH
 */
var searchValue = 3;
var positions = search(searchValue, dataArray);
var display = "";
for (var i = 0; i < positions.length; i++) {
    display += positions[i] + "<br>";
}

document.getElementById("search").innerHTML = "Positions de " + searchValue + " : <br>" + display;


/*
 * LINE SUM
 */
var s = lineSum(dataArray);
var display = "";
for (var i = 0; i < s.length; i++) {
    display += s[i] + "<br>";
}
document.getElementById("lineSum").innerHTML = "Somme par ligne : <br>" + display;

/*
 * COLUMN SUM
 */
var s = columSum(dataArray);
var display = "";
for (var i = 0; i < s.length; i++) {
    display += s[i] + "<br>";
}
document.getElementById("columnSum").innerHTML = "Somme par colonne : <br>" + display;
