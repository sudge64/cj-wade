# Personal Projects

Here are some retrospectives on a few of my personal projects from the last little while.

## Keyboard PCB

During the fall of 2021, I got bit by the mechanical keyboard bug. I couldn't find anything exactly to my liking after a little shopping around, so I decided to build my own.

I found the [Sick68](https://www.thingiverse.com/thing:3478494) on Thingiverse and decided to give it a whirl.

I ordered all the components, printed the case, and soldered everything together. I enjoyed my time with it, but could never shake the drive to make one I could truly call my own.

!(SiCK-68)[https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/IMG_3421.jpeg]

During my winter break of 2021, I decided to build my own keyboard around the [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/).

It took all December, but I went from knowing nothing about how PCB's were made to designing my own.

The traces as viewed from (KiCad)[https://www.kicad.org/].

![Traces](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/keyboard_pcb_traces.png)

The front of the bare PCB.

![Front](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/keyboard_pcb_front_crop.JPG)

The back of the bare PCB.

![Back](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/keyboard_pcb_back_crop.JPG)

The front of the populated PCB. I apologize for the dust, the keyboard faithfully served as my daily driver for quite a while.

Of note is the custom USB cable. It is made from a Micro USB breakout board connected to a USB-C breakout board through custom length wire.

As DIY as that solution was, I eventually settled on the below, taking a left-angle Micro USB to USB-C adapter off Aliexpress and trimming off the outer casing.

![USB](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/keyboard_final_plug.JPG)

![Final Front](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/keyboard_final_front_crop.JPG)

The back of the populated PCB.

![Final Back](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/keyboard_final_back_crop.JPG)

I am quite proud with how the keyboard turned out, although I see many areas that could feature improvement.

To keep it brief,

* The RP2040 and it's various accompanying electric components could be integrated on to the PCB itself. This was my original goal, however, learning the software ate away more time than I expected, forcing me to pivot and use an entire Pico.
* The traces most certainly can be routed better.
* Switch to surface-mount diodes. I used through-hole diodes as I already had some on hand.

## CAD

### Raspberry Pi Case

I attended a conference during the summer of 2021. It lasted for two weeks, but we were encouraged to go home during the first weekend.

Several of the people that I had met were interested to learn that I knew how to use a Raspberry Pi.

I wanted to bring it for the next week, but didn't have a good case to display it/protect it.

Once I got home, I was struck with inspiration and immediately set out to make a case that integrated the Pi, official touch screen, and SSD mount.

The design took all Saturday and my 3D printer took almost all Sunday. But I managed to pull it off.

![Front](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/rpi_case_front.JPG)

![Back](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/rpi_case_back.JPG)

You might notice the dip in the top of the case, that was due to me leaving it under another project in my car in the hot Texas summer sun.

This project was earlier in my FreeCAD journey, so the model and techniques are quite fiddly and limited. Although, I did impress myself that I managed to get the Raspberry Pi SVG logo onto the model.

### Keyboard Case

Another CAD project that I have pride in is the case to the keyboard mentioned above.

I went through around four different revisions to arrive to the present.

During the current revision, I found myself better able to utilize FreeCAD as the authors intended it to be used; with one body and multiple sketches to define geometry as apposed to multiple bodies intersecting each other utilizing boolean operations for more complex geometry (as was my approach with the above RPi case).

The holes for the keyswitches I generated from online tools into a DXF that I imported into FreeCAD.

The case as viewed from [FreeCAD](https://www.freecad.org/)

![Front](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/keyboard_case_cad_front.png)

![Side](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/keyboard_case_cad_side.png)

I had the top of the case printed at my university's maker spot (their printers have rectangular beds). Once in hand, I realized that I had designed the top layer with laser-cut tolerances in mind, rather than 3D printer tolerances.

I fully intended to return with a modified DXF for their laser cutter, however, the rush of the end of the semester caught me unexpectedly.

![Printed](https://raw.githubusercontent.com/sudge64/cj-wade/main/content/posts/2024/images/keyboard_plate_front_crop.JPG)

I do not consider this project complete, only on hold for the moment. It would not take much to push it over the finish line.
