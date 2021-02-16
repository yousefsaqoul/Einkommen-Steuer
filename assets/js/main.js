function berechnen() {
    let userInput = document.getElementById('userInput').value;
    let verheiratet = document.getElementById('verheiratet')
    let alleinstehend = document.getElementById('alleinstehend')
    let mylist = document.getElementById('mylist')
    let result = document.getElementById('results')
    let steuer;
    let zvE = userInput / 2


    if (verheiratet.checked && mylist.value == (2021)) {
        if (zvE <= 9744) {
            steuer = 0
        } else if (9745 <= zvE <= 14753) {
            let y = (zvE - 9745) / 10000
            steuer = (995.21 * y + 1.400) * y
        } else if (14.754 <= zvE <= 57.918) {
            let z = (zvE - 14753) / 10000
            steuer = (208.85 * z + 2397) * z + 950.96

        } else if (57.919 <= zvE <= 274.612) {
            steuer = (0.42 * zvE - 9136.63)
        } else if (274.613 <= zvE) {
            steuer = (0.45 * zvE - 17374.99)
        }


    }
    if (verheiratet.checked && mylist.value == (2020)) {
        if (zvE <= 9408) {
            steuer = 0
        } else if (9409 <= zvE <= 14532) {
            let y = (zvE - 9408) / 10000
            steuer = (972.87 * y + 1.400) * y
        } else if (14.533 <= zvE <= 57.051) {
            let z = (zvE - 14532) / 10000
            steuer = (212.02 * z + 2397) * z + 972.79

        } else if (57.52 <= zvE <= 270.500) {
            steuer = (0.42 * zvE - 8963.74)
        } else if (270.501 <= zvE) {
            steuer = (0.45 * zvE - 17078.74)
        }


    }
    if (verheiratet.checked && mylist.value == (2019)) {
        if (zvE <= 9168) {
            steuer = 0
        } else if (9169 <= zvE <= 14254) {
            let y = (zvE - 9168) / 10000
            steuer = (980.14 * y + 1.400) * y
        } else if (14.255 <= zvE <= 55.960) {
            let z = (zvE - 14254) / 10000
            steuer = (216.16 * z + 2397) * z + 965.58

        } else if (55.961 <= zvE <= 265.326) {
            steuer = (0.42 * zvE - 8780.90)
        } else if (265.327 <= zvE) {
            steuer = (0.45 * zvE - 16740.68)
        }


    }
    result.innerHTML = steuer

}

function zuruckSetzen() {
    document.getElementById("form1").reset()
}

















