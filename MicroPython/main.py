"""
Created by: Kyle Matthew
Created on: Mar 2026
This module displays traffic lights using Neopixels.
"""

from microbit import *
import neopixel

# setup
np = neopixel.NeoPixel(pin16, 4)

# clear the strip and show a happy face
np.clear()
display.show(Image.HAPPY)

while True:
    # check if button A was pressed
    if button_a.was_pressed():
        # green light (Pixel 0)
        np[0] = (0, 255, 0)
        np.show()
        sleep(2000)
        np[0] = (0, 0, 0)
        np.show()

        # yellow light (Pixel 1)
        np[1] = (255, 255, 0)
        np.show()
        sleep(2000)
        np[1] = (0, 0, 0)
        np.show()

        # red light (Pixel 2)
        np[2] = (255, 0, 0)
        np.show()
        sleep(2000)
        np[2] = (0, 0, 0)
        np.show()

        # reset UI
        display.show(Image.HAPPY)
