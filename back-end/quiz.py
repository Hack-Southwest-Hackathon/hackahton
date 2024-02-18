import json

NO_OF_QUESTIONS = 5  # default
score = 0

questions = {}
attempted_results = []

# load questions from json file
def load_questions() -> None:
    f = open('quiz_questions.json') # you might need to add your full path idk its buggy for me
    global questions
    questions = json.load(f)
    f.close()

def get_questions() -> dict:
    return questions

def get_attempts() -> list:
    return attempted_results

# base 0 indexing
def check_question(number : int, choice : int) -> bool:
    return questions['data'][number]['answer'] == choice

# attempt all the questions with the choices provided by the argument
def attempt(choices : list[int]) -> int:
    global attempted_results
    attempted_results = choices
    score = 0
    for i in range(len(choices)):
        choice = choices[i]
        if check_question(i, choice):
            score += 1
    return score

load_questions() # this needs to run to intialise the questions from the json file
