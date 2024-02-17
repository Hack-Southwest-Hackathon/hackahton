from openai import OpenAI

import pyttsx3


class chatbot():
    def __init__(self,good):
        self.client = OpenAI(api_key="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")
        
        self.good = good
        
        if good:
            with open('gptConfigGood.txt','r', encoding='utf-8') as prompt:
                self.prompt = prompt.read()
        else:
            with open('gptConfigEvil.txt','r', encoding='utf-8') as prompt:
                self.prompt = prompt.read()
        self.stream = self.client.chat.completions.create(
                    model="gpt-3.5-turbo-16k",
                    messages=[{"role": "system", "content": self.prompt}],
                    stream=True)
        self.messagehistory = [{"role":"system","content":self.prompt},{"role":"assistant","content":" ".join([part.choices[0].delta.content or "" for part in self.stream])}]
        self.engine = pyttsx3.init()
        self.engine.say(self.messagehistory[-1]["content"])
        self.engine.runAndWait()

    def proccessresponse(self,userinput):
        self.messagehistory.append({"role":"user","content":userinput}) #veunerabilities go brrr
        self.stream = self.client.chat.completions.create(
                    model="gpt-3.5-turbo-16k",
                    messages=self.messagehistory,
                    stream=True)
        self.messagehistory.append({"role":"assistant","content":" ".join([part.choices[0].delta.content or "" for part in self.stream])})
        return self.messagehistory[-1]["content"]
    
    def getgoodorbad(self):
        return self.good

Dan= chatbot(False)