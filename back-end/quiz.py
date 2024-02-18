import json

NO_OF_QUESTIONS = 5  # default
score = 0

questions = {}
attempted_results = []

# load questions from json file
def load_questions():
    f = open('quiz_questions.json')
    global questions
    questions = json.load(f)
    f.close()

def get_questions():
    return questions

def get_attempts():
    return attempted_results

# base 0 indexing
def check_question(number, choice):
    return questions['data'][number]['answer'] == choice

# attempt all the questions with the choices provided by the argument
def attempt(choices):
    global attempted_results
    attempted_results = choices
    score = 0
    for i in range(len(choices)):
        choice = choices[i]
        if check_question(i, choice):
            score += 1
    return score

load_questions() # this needs to run to intialise the questions from the json file
