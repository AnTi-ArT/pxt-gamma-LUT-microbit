// tests go here; this will not be compiled when this package is used as a library
let steps = 0
let timer = 0
basic.clearScreen()
timer = 1
steps = 255 / 5
for (let index = 0; index <= 4; index++) {
    led.plotBrightness(index, 0, (index + 1) * steps)
    led.plotBrightness(index, 1, (index + 1) * steps)
    led.plotBrightness(index, 3, led.gamma((index + 1) * steps))
    led.plotBrightness(index, 4, led.gamma((index + 1) * steps))
}
led.plotBrightness(2, 2, 255)
basic.forever(() => {
    if (timer > 255) {
        timer = 1
    }
    led.plotBrightness(0, 2, 255 - timer)
    led.plotBrightness(1, 2, 255 - timer)
    led.plotBrightness(3, 2, led.gamma(255 - timer))
    led.plotBrightness(4, 2, led.gamma(255 - timer))
    timer += 1
    basic.pause(5)
})