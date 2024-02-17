from openai import OpenAI
import os
import pyttsx3


class chatbot():
    def __init__(self, mode:str) -> None:
        self.client = OpenAI(
            api_key="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")

        self.mode = mode
        with open(os.path.dirname(os.path.abspath(__file__)) + '/' + self.mode + '.txt', 'r', encoding='utf-8') as prompt:
            self.prompt = prompt.read()
        self.stream = self.client.chat.completions.create(
            model="gpt-3.5-turbo-16k",
            messages=[{"role": "system", "content": self.prompt}],
            stream=True)
        self.messagehistory = [{"role": "system", "content": self.prompt}, {
            "role": "assistant", "content": "".join([part.choices[0].delta.content or "" for part in self.stream])}]
        # print(self.messagehistory[-1]["content"])
        # self.engine = pyttsx3.init()
        # self.engine.say(self.messagehistory[-1]["content"])
        # self.engine.runAndWait()

    def getfirstmessage(self):
        return self.messagehistory[-1]["content"]

    def proccessresponse(self, userinput):
        # veunerabilities go brrr
        self.messagehistory.append({"role": "user", "content": userinput})
        self.stream = self.client.chat.completions.create(
            model="gpt-3.5-turbo-16k",
            messages=self.messagehistory,
            stream=True)
        self.messagehistory.append({"role": "assistant", "content": " ".join(
            [part.choices[0].delta.content or "" for part in self.stream])})
        # self.engine.say(self.messagehistory[-1]["content"])
        # self.engine.runAndWait()
        return self.messagehistory[-1]["content"]

    def getgoodorbad(self):
        if self.mode in ["Bank","visa"]:
            return False
        return True


Dan = chatbot(True)
