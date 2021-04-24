from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("reminder.html")

@app.route('/postmethod', methods = ['POST'])
def post_javascript_data():
    jsdata = request.form['canvas_data']
    unique_id = create_csv(jsdata)
    params = { 'uuid' : unique_id }
    return jsonify(params)

@app.route("/api/data")
def get_data():
    return app.send_static_file("data.json")

if __name__ == '__main__':
    # Run the app server on localhost:5900
    app.run('localhost', 5900)