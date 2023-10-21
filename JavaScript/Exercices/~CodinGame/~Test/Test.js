// Get data from import.txt file
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "/import.txt", false);
xhttp.send();
let listString = xhttp.responseText;
console.log(listString)



// Clean data needed to convert it into .csv format
let listEntry = listString.split("\n")
let listNameRoom = []
let csvTab = [["Prénom", "Nom"]]

function createParagraph(prenom, room){
    const P = document.createElement('p');
    P.classList.add('dataLine');
    P.textContent = `${prenom}, ${room}`;
    const div = document.getElementById('dataLines');
    return div.appendChild(P);
}

for(i=0; i<listEntry.length; i++){
    listNameRoom.push(listEntry[i].split("\t"))
}

// console.log(listEntry);
// console.log(listNameRoom);

for (i=0; i<listNameRoom.length-1; i++){
    // console.log(listNameRoom[i]);
    // console.log(listNameRoom[i][0]);

    // NAME
    let name = listNameRoom[i][0].toUpperCase()

    // FIRSTNAME
    let firstname = ""
    let firstnameTab = listNameRoom[i][1].toLowerCase().split("-")
    for (k=0; k<firstnameTab.length; k++){
            fname = firstnameTab[k][0].toUpperCase() + firstnameTab[k].substring(1)
            if(k == 0){
                firstname += fname
            } else {
                firstname += `-${fname}`
            }
    }
    
    
    // ROOM
    let roomList = listNameRoom[i][2].split("(")
    let rooms = []
    let room = ""

    console.log(listNameRoom[i][2])
    for (k=1; k<roomList.length; k++){
        if(roomList[k].includes("+")){
            let roomList2 = roomList[k].split("+")
            for (j=0; j<roomList2.length; j++){
                rooms.push(roomList2[j].trim().substring(0, 3))
            }
        } else {
            rooms.push(roomList[k].trim().substring(0, 3))
        }
        
    }
    rooms.sort();
    console.log(rooms)
    for (l=0; l<rooms.length; l++){
        if(l == 0){
            room += rooms[l]
        } else {
            room += `-${rooms[l]}`
        }
    }

    let prenom = `${name} ${firstname} ${room}`
    // console.log(prenom)
    csvTab.push([prenom, room])

    createParagraph(prenom, room)
    

}

// console.log(csvTab)

// Array to CSV format
let csvContent = "";
csvTab.forEach(function(rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
});

// console.log(csvContent)

function downloadBlob(content, filename, contentType) {
    // Create a blob
    var blob = new Blob([content], { type: contentType });
    var url = URL.createObjectURL(blob);
  
    // Create a link to download it
    var pom = document.createElement('a');
    pom.href = url;
    pom.setAttribute('download', filename);
    pom.click();
  }
  downloadBlob(csvContent, 'export.csv', 'text/csv;charset=utf-8;')