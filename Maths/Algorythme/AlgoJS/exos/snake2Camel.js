/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var snake = "nOm_du_client";

var t = snake.split("_");
/*
nom
du
client
*/

var out = "";
out = t[0].toLowerCase();
for (var i = 1; i < t.length; i++) {
    out += t[i].substr(0,1).toUpperCase() + t[i].substr(1).toLowerCase();
}

console.log(out);
