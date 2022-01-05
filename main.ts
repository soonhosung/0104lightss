let i = 0
basic.forever(function () {
    i = input.lightLevel()
    led.setBrightness(i)
    led.plotBarGraph(
    i,
    255
    )
    if (led.point(2, 1)) {
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.pause(2000)
    }
})
