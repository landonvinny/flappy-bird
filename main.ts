input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    bird.change(LedSpriteProperty.X, -1)
})
let bird: game.LedSprite = null
let obstacle = 0
let index = 0
obstacle += 1
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.X, 300)
