from flask import Flask, request, jsonify, session, render_template
from flask_cors import CORS
from quiz import get_questions
from fraudbot import chatbot
import json


app = Flask(__name__)
CORS(app)
Dan = chatbot("Bank")

gptoriginal = ["Hello! This is Dan from the bank. I'm here to inform you that we have detected a suspected fraudulent purchase on your account.",
               "You can either call the bank or visit us in branch.", "GPT RESPONSE 3", "GPT RESPONSE 4", "GPT RESPONSE 5"]

userreturns = ["What do I need to do next?",
               "I'm not sure what to do", "USER RESPONSE 4", "USER RESPONSE 5"]


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
        return jsonify(get_questions())

    if request.method == "POST":
        quiz.attempt(request.get_json())
        return jsonify(get_questions())


@app.route("/calls", methods=["GET", "POST"])
def calls():
    global Dan
    if request.method == "GET":
        Dan = chatbot("Bank")
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

        # return chatbot.proccessresponse(data['userinput'])

        # x = {
        #    "outofattempts": "false",
        #    "gptresponse": "GPT BANK CALL next"
        # }

        # if data['attempts'] == "5":
        #   x["outofattempts"] = "true"

        return jsonify(x)


@app.route("/reflection", methods=["GET", "POST"])
def reflection():
    if request.method == "GET":
        return "GET Request"

    if request.method == "POST":
        return "POST Request"


if __name__ == '__main__':
    app.run(debug=True, port=5100)


# 127.0.0.1:5100/
