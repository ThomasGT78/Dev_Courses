/* 
 * chaine_exos.js
 */

/**
 * 
 * @param {type} table
 * @returns {String}
 */
function implode(table) {
    var stringOUT = "";
    for (var i = 0; i < table.length; i++) {
        stringOUT += table[i] + " ";
    }
    return stringOUT;
} /// implode

/**
 * 
 * @param {type} stringIN
 * @returns {.premierCaractere@call;toUpperCase.stringOUT|String|.chaine@call;substr.stringOUT|.autresCaracteres@call;toLowerCase.stringOUT}
 */
function ucFirst(stringIN) {
    var stringOUT = "";
    stringOUT = stringIN[0].toUpperCase();
    var i = 1;
    while (i < stringIN.length) {
        stringOUT += stringIN[i].toLowerCase();
        i++;
    }
    return stringOUT;
} /// ucFirst

/**
 * 
 * @param {type} what
 * @param {type} where
 * @returns {window.find.position|Number}
 */
function findCharacter(what, where) {
    var position = -1;
    var find = false;
    var i = 0;
    while (i < where.length && !find) {
        if (where[i] === what) {
            position = i + 1;
            find = true;
        }
        i++;
    }
    return position;
} /// findCharacter

/**
 * 
 * @param {type} what
 * @param {type} replacement
 * @param {type} where
 * @returns {String}
 */
function replace(what, replacement, where) {
    var stringOUT = "";
    var i = 0;
    while (i < where.length) {
        if (where[i] === what) {
            stringOUT += replacement;
        } else {
            stringOUT += where[i];
        }
        i++;
    }
    return stringOUT;
} /// replace

/**
 * 
 * @param {type} stringIN
 * @returns {String}
 */
function ltrim(stringIN) {
    var stringOUT = "";
    var i = 0;
    while (stringIN[i] === " ") {
        i++;
    }
    while (i < stringIN.length) {
        stringOUT += stringIN[i];
        i++;
    }
    return stringOUT;
} /// ltrim

/**
 * 
 * @param {type} stringIN
 * @returns {String}
 */
function rtrim(stringIN) {
    var stringOUT = "";
    var i = stringIN.length - 1;
    while (stringIN[i] === " ") {
        i--;
    }
    j = 0;
    while (j < i) {
        stringOUT += stringIN[j];
        j++;
    }
    return stringOUT;
} /// rtrim


/**
 * 
 * @param {type} stringIN
 * @returns {String}
 */
function trim(stringIN) {
    return rtrim(ltrim(stringIN));
} /// trim

/**
 * 
 * @param {type} stringIN
 * @returns {String}
 */
function underscore2camel(stringIN) {
    var stringOUT = "";
    var t = stringIN.split("_");
    for (var i = 0; i < t.length; i++) {
        stringOUT += ucFirst(t[i]);
    }
    return stringOUT;
} /// underscore2camel

/**
 * 
 * @param {type} stringIN
 * @param {type} start
 * @param {type} number
 * @returns {String}
 */
function extract(stringIN, start, number) {
    var stringOUT = "";
    for (var i = start - 1; i < start + number - 1; i++) {
        stringOUT += stringIN[i];
    }
    return stringOUT;
} /// extract

/**
 * 
 * @param {type} stringIN
 * @param {type} delimiter
 * @returns {Array}
 */
function explode(stringIN, delimiter) {
    var table = new Array();

    var s = "";
    for (var i = 0; i < stringIN.length; i++) {
        if (stringIN[i] === delimiter) {
            //s = extract(s, 1, s.length - 1);
            table.push(s);
            s = "";
        }
        // Pas terrible
        if (stringIN[i] !== delimiter) {
            s += stringIN[i];
        }
    }
    table.push(s);
    return table;
} /// explode

/**
 * 
 * @param {type} stringIN
 * @returns {String}
 */
function camel2underscore(stringIN) {
    var stringOUT = "";

    stringOUT = stringIN[0].toLowerCase();
    for (var i = 1; i < stringIN.length; i++) {
        if (stringIN[i] >= "A" && stringIN[i] <= "Z") {
            stringOUT += "_" + stringIN[i].toLowerCase();
        } else {
            stringOUT += stringIN[i];
        }
    }

    return stringOUT;
} /// camel2underscore

/**
 * 
 * @param {type} stringIN
 * @returns {String}
 */
function properNoun(stringIN) {
    var stringOUT = "";

    stringOUT = stringIN[0].toUpperCase();
    for (var i = 1; i < stringIN.length; i++) {
        if (stringIN[i - 1] === " " || stringIN[i - 1] === "'" || stringIN[i - 1] === "-") {
            stringOUT += stringIN[i].toUpperCase();
        } else {
            stringOUT += stringIN[i];
        }
    }

    return stringOUT;
} /// properNoun

/**
 * 
 * @param {type} stringIN
 * @returns {String}
 */
function internalTrim(stringIN) {
    var stringOUT = "";
    stringOUT = stringIN[0];
    var spaceBefore = false;
    for (var i = 1; i < stringIN.length; i++) {
        stringOUT += stringIN[i];
        while (stringIN[i] === " ") {
            i++;
            spaceBefore = true;
        }
        if (spaceBefore) {
            stringOUT += stringIN[i];
            spaceBefore = false;
        }
    }
    return stringOUT;
} /// internalTrim

/**
 * 
 * @param {type} stringIN
 * @returns {Array}
 */
function characterFrequency(stringIN) {
    var t = new Array();

    // L'alphabet en majuscules (codes ASCII de  à 
    for (var i = 65; i <= 90; i++) {
        t[String.fromCharCode(i)] = 0;
    }

    stringIN = stringIN.toUpperCase();
    for (var i = 0; i < stringIN.length; i++) {
        if (stringIN[i] >= "A" && stringIN[i] <= "Z") {
            t[stringIN[i]] = t[stringIN[i]] + 1;
        }
    }

    return t;
} /// characterFrequency

/**
 * 
 * @param {type} word
 * @param {type} stringIN
 * @returns {Number}
 */
function searchWord(word, stringIN) {
    console.log("searchWord");
    var position = -1;
    word = word.toUpperCase();
    stringIN = stringIN.toUpperCase();
    console.log("word : " + word);
    console.log("phrase : " + stringIN);
    var tempo = "";
    for (var i = 0; i < stringIN.length; i++) {
        //var carWord = word[i];
        var carString = stringIN[i];
        tempo += carString;
        console.log("Word : " + word + " , Tempo : " + tempo);
        if (tempo == word) {
            position = i + 1;
            tempo = "";
            console.log("if");
        }
        if (carString === " ") {
            tempo = "";
        }
    }
    return position;
} /// searchWord

/*
 * MAIN
 */
/*
 * NIVEAU 1
 */
/*
 * implode : array 2 string
 */
var table = ["il", "fait", "beau"];
var stringOUT = implode(table);
console.log("*** IMPLODE ***");
console.log(table + " -> " + stringOUT);

/*
 * UCFirst
 */
var stringIN = "azerty";
var stringOUT = ucFirst(stringIN);
console.log("*** UCFirst ***");
console.log(stringIN + " -> " + stringOUT);

/*
 * FIND
 */
var what = "r";
var position = findCharacter(what, stringIN);
console.log("*** findCharacter ***");
console.log(what + " est à la position : " + position);


/*
 * NIVEAU 2
 */
/*
 * REPLACE
 */

var search = "r";
var replacement = "X";
var stringOUT = replace(search, replacement, stringIN);
console.log("*** replace ***");
console.log(stringIN + " -> " + stringOUT);


/*
 * LTRIM 
 */
var stringIN = "   azerty   ";
var stringOUT = ltrim(stringIN);
console.log("*** LTRIM ***");
console.log("*" + stringIN + "* -> *" + stringOUT + "*");

/*
 * RTRIM
 */
var stringOUT = rtrim(stringIN);
console.log("*** RTRIM ***");
console.log("*" + stringIN + "* -> *" + stringOUT + "*");
/*
 * TRIM
 */
var stringOUT = trim(stringIN);
console.log("*** TRIM ***");
console.log("*" + stringIN + "* -> *" + stringOUT + "*");

/*
 * Underscore2camel
 */
var stringIN = "le_nom_du_client";
var stringOUT = underscore2camel(stringIN);
console.log("*** Underscore2camel ***");
console.log(stringIN + " -> " + stringOUT);

/*
 * NIVEAU 3
 */
/*
 * Extraction
 */
var stringIN = "le_nom_du_client";
var stringOUT = extract(stringIN, 4, 3);
console.log("*** Extraction ***");
console.log(stringIN + " -> " + stringOUT);

/*
 * Explode
 */
var stringIN = "le_nom_du_client";
var stringOUT = explode(stringIN, "_");
console.log("*** Explode ***");
console.log(stringIN + " -> " + stringOUT);

/*
 * Camel2underscore
 */
var stringIN = "LeNomDuClient";
var stringOUT = camel2underscore(stringIN);
console.log("*** Camel2underscore ***");
console.log(stringIN + " -> " + stringOUT);

/*
 * NomPropre
 */
var stringIN = "louis-napoléon bonaparte";
//var stringIN = "valéry giscard d'estaing";
var stringOUT = properNoun(stringIN);
console.log("*** NomPropre ***");
console.log(stringIN + " -> " + stringOUT);

/*
 * TRIM INTERNE
 */
var stringIN = "IL    FAIT    TRES    BEAU";
var stringOUT = internalTrim(stringIN);
console.log("*** TRIM INTERNE ***");
console.log(stringIN + " -> " + stringOUT);


/*
 * NIVEAU 4
 */

/*
 * Fréquence de chaque caractère dans un texte
 */
var stringIN = "Il était une fois une marchande de foie qui vendait du foie dans la ville de Foix";
var list = characterFrequency(stringIN);
console.log("*** characterFrequency ***");
var stringOUT = "\n";
for (var key in list) {
    stringOUT += key + " : " + list[key] + "\n";
}
console.log(stringIN + "\n" + stringOUT);
/*
 * Rechercher un mot dans un texte
 */
console.log("******** searchWord ********");
var stringIN = "IL FAIT TRES BEAU";
var word = "TRES";
var position = searchWord(word, stringIN);
console.log("Position : " + position);

/*
 * NIVEAU 5
 */
/*
 Nombre de mots dans un texte
 RemplacerMot
 Fréquence de chaque mot dans un texte
 
 */