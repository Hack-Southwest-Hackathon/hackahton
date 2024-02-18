'''
This Module manages the quiz
backend
'''
import json
import os


class quiz:
    def __init__(self) -> None:
        '''
        create new quiz object and
        load questions from json file
        '''
        
        self.no_of_questions = 5
        
        with open(os.path.dirname(
            os.path.abspath(__file__)
            ) + '/quiz_questions.json') as f:
            self.questions = json.load(f)
        
        
        self.attempted_results = None

    def get_questions(self) -> dict:
        '''
        getter method to obtain 
        questions array
        '''
        return self.questions

    def get_attempts(self) -> list:
        '''
        getter method to obtain 
        the results from an attempt
        at the quiz
        '''
        return self.attempted_results

    # base 0 indexing
    def check_question(self,number : int, choice : int) -> bool:
        '''
        Check if a given answer is true
        '''
        return self.questions['data'][number]['answer'] == choice

    # attempt all the questions with the choices provided by the argument
    def attempt(self,choices : list) -> int:
        '''
        get a list of choices made by the end user and
        verify them
        '''
        self.attempted_results = choices
        score = 0
        for i in range(len(choices)):
            choice = choices[i]
            if self.check_question(i, choice):
                score += 1
        return score