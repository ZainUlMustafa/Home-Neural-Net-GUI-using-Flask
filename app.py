from flask import Flask, render_template
import numpy as np 
import matplotlib.pyplot as plt

app = Flask(__name__)
@app.route('/')
def index():
	np_x = np.array([1,2,4,6])
	np_y = np_x**np_x
	plt.plot(np_y,np_y)
	#plt.show()
	plt.savefig('static/resources/rf1.png')    
	return render_template('index.html')

@app.route('/room1')
def room1():
	return render_template('room1.html')

@app.route('/room2')
def room2():
	return render_template('room2.html')

@app.route('/room3')
def room3():
	return render_template('room3.html')

if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')