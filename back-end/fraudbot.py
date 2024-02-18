'''
This module controls the AI Chat
bot and interfaces with the front end
'''
from openai import OpenAI
import os

class chatbot():
    def __init__(self, mode: str) -> None:
        '''
        Initialise an instance of gpt 3.5 and
        set it to a certain prompted build.

        Options atm are:
        Housing
        Visa
        Bank
        '''
        key = ''
        with open(os.path.dirname(os.path.abspath(__file__)) + '/token.txt') as f:
            key = f.readline()
        
        self.client = OpenAI(
            api_key=key
        )

        self.mode = mode
        with open(
            os.path.dirname(
                os.path.abspath(__file__)
            ) + '/AI Prompts/' + self.mode + '.txt', 'r', encoding='utf-8'
        ) as prompt:
            self.prompt = prompt.read()

        self.stream = self.client.chat.completions.create(
            model="gpt-3.5-turbo-16k",
            messages=[{
                "role": "system",
                "content": self.prompt
            }],
            stream=True)

        self.calls  = 0
        
        self.messagehistory = [{
            "role": "system", "content": self.prompt
        }, {
            "role": "assistant",
            "content": "".join([
                    part.choices[0].delta.content or "" for part in self.stream
            ])}]

    def getfirstmessage(self) -> str:
        '''
        Returns the initial message by the 
        chatbot when it is first opened
        '''

        return self.messagehistory[
            -1
        ][
            "content"
        ]

    def proccessresponse(self, userinput: str) -> str:
        '''
        Process and return user
        response
        '''
        # vulnerabilities go brrr
        self.messagehistory.append({
            "role": "user",
            "content": userinput
        })

        self.stream = self.client.chat.completions.create(
            model="gpt-3.5-turbo-16k",
            messages=self.messagehistory,
            stream=True)

        self.messagehistory.append({
            "role": "assistant",
            "content": " ".join(
                [part.choices[0].delta.content or "" for part in self.stream])})
        self.calls  += 1
        return self.messagehistory[-1]["content"]

    def getgoodorbad(self) -> bool:
        '''
        check wether or not the
        mode had malicious intent
        '''
        if self.mode in ["Bank", "visa"]:
            return False
        return True
