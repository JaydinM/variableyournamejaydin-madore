let counter = 0
input.onButtonPressed(Button.A, function () {
    counter += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter += -1
})
basic.forever(function () {
	
})
