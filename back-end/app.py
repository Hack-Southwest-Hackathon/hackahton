from flask import Flask, request, jsonify, session, render_template
from quiz import get_question


app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def root():
    if request.method == "GET":
        return "GET Request"

    if request.method == "POST":
        return "POST Request"


@app.route("/read", methods=["GET", "POST"])
def read():
    if request.method == "GET":
        return "GET Request"

    if request.method == "POST":
        return "POST Request"


@app.route("/quiz", methods=["GET", "POST"])
def quiz():
    if request.method == "GET":
        return get_question()

    if request.method == "POST":
        quiz.attempt(request.form['choice'])
        return get_question()


@app.route("/calls", methods=["GET", "POST"])
def calls():
    if request.method == "GET":
        return "GET Request"

    if request.method == "POST":
        return "POST Request"


@app.route("/reflection", methods=["GET", "POST"])
def reflection():
    if request.method == "GET":
        return "GET Request"

    if request.method == "POST":
        return "POST Request"


if __name__ == '__main__':
    app.run(debug=True, port=6969)
