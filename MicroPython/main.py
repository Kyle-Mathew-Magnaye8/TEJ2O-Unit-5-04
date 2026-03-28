"""
Created by: Kyle Matthew
Created on: Mar 2026
This module displays traffic lights using Neopixels.
"""

from microbit import *
import neopixel

# setup
neopixels = neopixel.NeoPixel(pin16, 4)

# clear the strip and show a happy face
neopixels.clear()
display.show(Image.HAPPY)

while True:
    # check if button A was pressed
    if button_a.was_pressed():
        # green light (Pixel 0)
        neopixels[0] = (0, 255, 0)
        neopixels.show()
        sleep(2000)
        neopixels[0] = (0, 0, 0)
        neopixels.show()

        # yellow light (Pixel 1)
        neopixels[1] = (255, 255, 0)
        neopixels.show()
        sleep(2000)
        neopixels[1] = (0, 0, 0)
        neopixels.show()

        # red light (Pixel 2)
        neopixels[2] = (255, 0, 0)
        neopixels.show()
        sleep(2000)
        neopixels[2] = (0, 0, 0)
        neopixels.show()

        # reset UI
        display.show(Image.HAPPY)
