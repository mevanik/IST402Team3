from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/reminder/")
def home():
    return render_template("reminder.html")