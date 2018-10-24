# Currently installed on Room1 (Light and Fan) and Room2 (Light)
# You can follow the code below and iterate it for other rooms as well.
# Pre-requisite: Knowledge of Python and Flask

from flask import Flask, render_template
import numpy as np
import RPi.GPIO as GPIO

app = Flask(__name__)
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
r1_light = 18
r1_fan = 23
r2_light = 24

GPIO.setup(r1_light, GPIO.OUT)
GPIO.output(r1_light, GPIO.LOW)
GPIO.setup(r1_fan, GPIO.OUT)
GPIO.output(r1_fan, GPIO.LOW)

GPIO.setup(r2_light, GPIO.OUT)
GPIO.output(r2_light, GPIO.LOW)

sts1, sts2, sts3 = False, False, False

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/room1')
def room1():
    #led = GPIO.input(r1_light)
    return render_template('room1.html')

@app.route('/room2')
def room2():
    #led = GPIO.input(r2_light)
    return render_template('room2.html')

@app.route('/room3')
def room3():
    return render_template('room3.html')

@app.route('/<deviceName>/<room>')
def do(deviceName, room):
    global sts1
    global sts2

    if deviceName == 'r1_light':
        actuator = r1_light
    if deviceName == 'r1_fan':
        actuator = r1_fan
    if deviceName == 'r2_light':
        actuator = r2_light

    if room == 'r1':
        sts1 = not sts1
        if sts1 == False:
            GPIO.output(actuator, GPIO.LOW)
        if sts1 == True:
            GPIO.output(actuator, GPIO.HIGH)
        return render_template('room1.html')
    if room == 'r2':
        sts2 = not sts2
        if sts2 == False:
            GPIO.output(actuator, GPIO.LOW)
        if sts2 == True:
            GPIO.output(actuator, GPIO.HIGH)
        return render_template('room2.html')

    #return render_template('index.html')


if __name__ == '__main__':
        app.run(debug=True, host='0.0.0.0')

