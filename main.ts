input.onButtonPressed(Button.A, function () {
    mode = 1
})
input.onButtonPressed(Button.B, function () {
    mode = 2
})
let mode = 0
let genap = 0
let ganjil = 1
mode = 0
basic.forever(function () {
    if (mode == 1) {
        basic.showNumber(ganjil)
        basic.pause(200)
        ganjil += 2
    }
    if (ganjil > 9) {
        ganjil = 1
    }
})
basic.forever(function () {
    if (mode == 2) {
        basic.showNumber(genap)
        basic.pause(200)
        genap += 2
    }
    if (genap > 10) {
        genap = 0
    }
})
