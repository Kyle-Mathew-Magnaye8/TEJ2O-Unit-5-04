/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Mar 2026
 * This program displays trafficlights using Neopixels.
*/

// variables
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// shows traffic lights 
input.onButtonPressed(Button.A, function () {
  // green Light
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
  neopixelStrip.show() 
  basic.pause(2000)    
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black)) 
  
  // yellow Light
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
  neopixelStrip.show() 
  basic.pause(2000)    
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black)) 

  // red Light
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.show() 
  basic.pause(2000)
})

// clearing screen
input.onButtonPressed(Button.B, function () {
  basic.showIcon(IconNames.SmallDiamond)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.show()
  basic.showIcon(IconNames.Happy)
})
