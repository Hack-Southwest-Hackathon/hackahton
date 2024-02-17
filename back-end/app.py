from flask import Flask, request, jsonify, session, render_template
from quiz import get_questions
from fraudbot import chatbot
import json

app = Flask(__name__)
chatbot = chatbot(True)


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
        return get_questions()

    if request.method == "POST":
        quiz.attempt(request.get_json())
        return get_questions()


@app.route("/calls", methods=["GET", "POST"])
def calls():
    if request.method == "GET":

        return chatbot.getfirstmessage()

    if request.method == "POST":
        data = request.get_json()
        # data = json.loads(data)
        print(data['userinput'])
        # return jsonify(data['userinput'])
        print(chatbot.proccessresponse(data['userinput']))
        return chatbot.proccessresponse(data['userinput'])


@app.route("/reflection", methods=["GET", "POST"])
def reflection():
    if request.method == "GET":
        return "GET Request"

    if request.method == "POST":
        return "POST Request"


if __name__ == '__main__':
    app.run(debug=True, port=5100)
