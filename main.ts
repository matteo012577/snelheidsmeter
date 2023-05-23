input.onGesture(Gesture.SixG, function () {
    basic.showString("6g")
})
input.onGesture(Gesture.EightG, function () {
    basic.showString("8g")
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showString("3g")
})
basic.forever(function () {
    input.setAccelerometerRange(AcceleratorRange.EightG)
})
