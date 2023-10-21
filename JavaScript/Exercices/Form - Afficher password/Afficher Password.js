showPassword() {
        var inputPassword = document.getElementById("inputPassword")
        if (inputPassword.type === "text") {
            console.log(typeInputPassword)
            console.log("text")
            inputPassword.type = "password"
        } else {
            console.log(typeInputPassword)
            console.log("password")
            inputPassword.type = "text"
        }
		

showPassword() {
        var inputPassword = document.getElementById("inputPassword")
        var showPassword = document.getElementById("showPassword")

        if (showPassword.checked === false) {
            inputPassword.type = "password"
        } else {
            inputPassword.type = "text"
        }
    }