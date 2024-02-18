'''
The is module controls the python-flask backend
 
apologies in advance Ed for messing with ur code HeHe - al
'''
from flask import Flask, request, jsonify, session, render_template
from flask_cors import CORS
from fraudbot import chatbot
from quiz import quiz
from random import shuffle
from reflection import Reflection
# import json
chatoptions = ['Bank', 'Housing', 'Visa']
shuffle(chatoptions)
callscore = 0
currentchat = 0
quiz_score = 0
current_quiz = quiz()
app = Flask(__name__)

CORS(app)

Dan = chatbot(chatoptions[currentchat])


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
def process_quiz():
    global quiz_score
    global current_quiz
    if request.method == "GET":
        return jsonify(current_quiz.get_questions())

    if request.method == "POST":
        quiz_score = current_quiz.attempt(request.get_json())
        return jsonify({"score": quiz_score, "total": current_quiz.no_of_questions})


@app.route("/calls", methods=["GET", "POST"])
def process_calls():
    global currentchat
    global Dan
    if request.method == "GET":
        Dan = chatbot(chatoptions[currentchat])
        x = {
            "outofattempts": "false",
            "gptresponse": Dan.getfirstmessage()
        }
        return jsonify(x)

    if request.method == "POST":
        data = request.get_json()
        if Dan.calls < 4:
            ooa = "false"
        else:
            ooa = "true"
        x = {
            "outofattempts": ooa,
            "gptresponse": Dan.proccessresponse(data['userinput'])
        }
        return jsonify(x)


@app.route("/checkanswer", methods=["POST"])
def checkanswers():
    global callscore
    global currentchat
    global Dan
    if request.method == "POST":
        data = request.get_json()
        if data['userinput'] == Dan.getgoodorbad():
            callscore += 1
        currentchat += 1
        return {}


@app.route("/reflection", methods=["GET"])
def reflection():
    global callscore
    global quiz_score
    if request.method == "GET":
        response = Reflection(quiz_score/5,callscore/3)
        return jsonify({"quiz": f'You got {quiz_score}/5 on the quiz',
                        "call":f'You guessed {callscore}/1 callers correctly',
                        "response":response.get_analysis()})



if __name__ == '__main__':
    app.run(debug=True, port=5100)


# 127.0.0.1:5100/
