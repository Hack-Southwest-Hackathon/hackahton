'''
This Module manages the quiz
backend
'''
import json
import os

NO_OF_QUESTIONS = 5  # default
score = 0

questions = {}
attempted_results = []

def load_questions() -> None:
    '''
    load questions from json file
    '''
    f = open(os.path.dirname(os.path.abspath(__file__)) + '/quiz_questions.json') # you might need to add your full path idk its buggy for me
    global questions
    questions = json.load(f)
    f.close()

def get_questions() -> dict:
    '''
    getter method to obtain 
    questions array
    '''
    return questions

def get_attempts() -> list:
    '''
    getter method to obtain 
    the results from an attempt
    at the quiz
    '''
    return attempted_results

# base 0 indexing
def check_question(number : int, choice : int) -> bool:
    '''
    Check if a given answer is true
    '''
    return questions['data'][number]['answer'] == choice

# attempt all the questions with the choices provided by the argument
def attempt(choices : list) -> int:
    '''
    get a list of choices made by the end user and
    verify them
    '''
    global attempted_results
    attempted_results = choices
    score = 0
    for i in range(len(choices)):
        choice = choices[i]
        if check_question(i, choice):
            score += 1
    return score

load_questions() # this needs to run to initialise the questions from the json file
