import json

NO_OF_QUESTIONS = 5  # default
current_question = 0
score = 0

question = {}


def load():
    current_question = 1


def get_next_question():
    current_question += 1
    question['number'] = current_question
    question['question'] = "what is 2+2?"
    question['options'] = ['yes', 'no', 'maybe', '4']
    question['answer'] = 3


def attempt(choice):
    if question['answer'] == choice:
        score += 1
        return True
    return False


def get_question():
    return question


# str:arr:int
# question:[options]:answer
