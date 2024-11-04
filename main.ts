basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    pins.digitalWritePin(DigitalPin.P6, 0)
    pins.digitalWritePin(DigitalPin.P7, 0)
    pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
    pins.setPull(DigitalPin.P1, PinPullMode.PullDown)
    pins.setPull(DigitalPin.P2, PinPullMode.PullDown)
    pins.setPull(DigitalPin.P3, PinPullMode.PullDown)
    pins.digitalWritePin(DigitalPin.P4, 1)
    while (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showString("1")
    }
    while (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showString("4")
    }
    while (pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.showString("7")
    }
    while (pins.digitalReadPin(DigitalPin.P3) == 1) {
        basic.showString("*")
    }
    pins.digitalWritePin(DigitalPin.P4, 0)
    pins.digitalWritePin(DigitalPin.P5, 0)
    while (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showString("2")
    }
    while (pins.digitalReadPin(DigitalPin.P1) == 0) {
        basic.showString("5")
    }
    while (pins.digitalReadPin(DigitalPin.P2) == 0) {
        basic.showString("8")
    }
    while (pins.digitalReadPin(DigitalPin.P3) == 0) {
        basic.showString("0")
    }
    pins.digitalWritePin(DigitalPin.P11, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
    while (pins.digitalReadPin(DigitalPin.P16) == 0) {
        basic.showString("3")
    }
    while (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showString("6")
    }
    while (pins.digitalReadPin(DigitalPin.P14) == 0) {
        basic.showString("9")
    }
    while (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showString("#")
    }
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P5, 0)
    while (pins.digitalReadPin(DigitalPin.P16) == 0) {
        basic.showString("A")
    }
    while (pins.digitalReadPin(DigitalPin.P15) == 0) {
        basic.showString("B")
    }
    while (pins.digitalReadPin(DigitalPin.P14) == 0) {
        basic.showString("C")
    }
    while (pins.digitalReadPin(DigitalPin.P13) == 0) {
        basic.showString("D")
    }
    pins.digitalWritePin(DigitalPin.P5, 1)
    basic.pause(20)
})
