import json

NO_OF_QUESTIONS = 5  # default
score = 0

questions = []
attempted_results = []

def load_questions():
    f = open('C:\\Users\\Benit\\Desktop\\Programming\\hackathon\\data.json')
    global questions
    questions = json.load(f)
    f.close()

def get_questions():
    return questions

def get_attempts():
    return attempted_results

def check_question(number, choice):
    return questions[number]['answer'] == choice

def attempt(choices):
    global attempted_results
    attempted_results = choices
    score = 0
    for i in range(choices):
        choice = choices[i]
        if check_question(i, choice):
            score += 1
    return score

load_questions()
