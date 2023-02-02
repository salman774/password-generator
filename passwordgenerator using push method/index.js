const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let firstpassword = document.getElementById("password-one")
let secondpassword = document.getElementById("password-two")
const generatebtn = document.getElementById("generate-password")


generatebtn.addEventListener("click", function () {
    firstpassword.textContent = ""
    secondpassword.textContent = ""
    render()
    rendertwo()
})

function render() {
    let passwordone = []
    for (let i = 0; i < 15; i++) {
        let random = Math.floor(Math.random() * characters.length)
        let generatedpasseord = characters[random]
        passwordone.push(generatedpasseord)
    }
    for (let i = 0; i < passwordone.length; i++) {
        firstpassword.textContent += passwordone[i]
    }
}

function rendertwo() {
    let passwordsecond = []
    for (let i = 0; i < 15; i++) {
        let random = Math.floor(Math.random() * characters.length) + 0
        let generatedpasseord = characters[random]
        passwordsecond.push(generatedpasseord)
    }
    for (let i = 0; i < passwordsecond.length; i++) {
        secondpassword.textContent += passwordsecond[i]
    }
}



