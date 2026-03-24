/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Mar 2026
 * This program displays traffic lights using Neopixels.
*/

// variables
let neopixelStrip: neopixel.Strip = null

// Setup: clearing screen and initializing strip
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.clear()
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // displays green neopixel light
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.show()
  basic.pause(2000)
  
  // displays yellow neopixel light
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
  neopixelStrip.show()
  basic.pause(2000)

  // displays red neopixel light
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.show()
  basic.pause(2000)

  // clear lights to reset for next cycle
  neopixelStrip.clear()
  neopixelStrip.show()
  basic.showIcon(IconNames.Happy)
})
