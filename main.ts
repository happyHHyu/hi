input.onButtonPressed(Button.A, function () {
    radio.sendString("hello! I am 5b 29")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
	
})
