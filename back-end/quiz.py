import json
import random


# preventing fraudulent calls
# 3 ideas/pages about prevening fraud calls


NO_OF_QUESTIONS = 5  # default
current_question = 0
score = 0

questions = []

def load_questions(n):
    f = open('questions.json')
    all_questions = json.load(f.read())

    global questions
    questions = random.sample(all_questions, n)
    f.close()

def get_questions():
    return questions

def attempt_question(number, choice):
    return questions[number]['answer'] == choice

def attempt(choices):
    for i in range(choices):
        choice = choices[i]
        if attempt_question(i, choice):
            score += 1



# def load():
#     current_question = 1


# def get_next_question():
#     current_question += 1
#     question['number'] = current_question
#     question['question'] = "what is 2+2?"
#     question['options'] = ['yes', 'no', 'maybe', '4']
#     question['answer'] = 3


# def attempt(choice):
#     if question['answer'] == choice:
#         score += 1
#         return True
#     return False


# def get_question():
#     return question


# str:arr:int
# question:[options]:answer
