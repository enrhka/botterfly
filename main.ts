function FlapWings () {
    servos.P1.setAngle(110)
    servos.P0.setAngle(70)
    basic.pause(200)
    servos.P1.setAngle(90)
    servos.P0.setAngle(90)
    basic.pause(200)
}
servos.P1.setAngle(90)
servos.P0.setAngle(90)
basic.forever(function () {
    while (input.lightLevel() < 50) {
        FlapWings()
    }
    while (input.buttonIsPressed(Button.A)) {
        FlapWings()
    }
})
