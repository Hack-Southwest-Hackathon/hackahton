# Team J.P Mortgage submission - Frauducation
![logo](https://i.imgur.com/7gbKliC.png)  
Our submission for the February 2024 HSW Hackathon

# The Idea
Frauducate is a web-based mobile-oriented digital learning platform aimed at preventing international students from being taken advantage of during their onboarding process.

We plan to:

- Help students learn to spot digital fraud through bite-sized pieces of information and examples

- help reinforce this knowledge with fun interactive quizzes

- Help put newfound knowledge to practical  use by having users interact with our specialized fraud chatbot - Dan - and check if he's an imposter among us.
# Proposed Design

![screenie 1](https://i.imgur.com/Fbp9qhu.png) ![screenie 2](https://i.imgur.com/MjGRtVp.png)  
  
![screenie 3](https://i.imgur.com/zN130bz.png) ![Screenie 4](https://i.imgur.com/c2cxPIj.png)  
  
We Have decided to go with a sleek modern design for the website, with a simple and user-friendly interface.  
  
  
# The Chatbot Module
The fraud chatbot we used is a modified copy of openai's gpt3.5-turbo making use of their api and their new 'Assistants' feature allowing for the building of custom models.

The chatbot is controlled via the ```fraudbot.py``` python file  

- ## Installation

Its depends only on the openai api wrapper which can be installed via:
```bash
pip install openai
```

- ## Usage
First the user should select a model of to use the options are:
- Bank
- Visa
- Housing  
 
Each named after their respective scam simulation.  
Next, an object of the chosen model may be initialized - i.e:
```python
Dan = Chatbot(<model choice>)
```

Then, the bot's initial response may be fetched via:

```python
Dan.getfirstmessage()
```

Finally, users can send a message and obtain a response from the bot and check weather or not it had fraudulent intent, by using the commands:

```python
Dan.proccessresponse()
Dan.getgoodorbad()
```

# The Backend
Our web backend is written using flask, a python web development tool as well as using additional functionality from the json library for communicating with the front end.

- ## Installation

Dependencies can be installed via the command shell with the command:
```bash
pip install flask flask_cors json
```

- ## Usage

The user is recommended to run to run the ```app.py``` file as main to  host the server

By default the flask server will be hosted [here](127.0.0.1:5100/)

### Chatbot Interactions

Chatbot requests are made through the ```/call``` domain.  

A get request signifies the creation of a new chat bot instance and thus creates a new global chat bot object (god rest our souls if two people use it at once).

A push request signifies a user giving the chatbot a new prompt, and thus it is accompanied by a json containing the user's message as a string. this will then trigger the chatbot code to make an api request and generate and return a text response.

### Quiz Interactions

Quiz requests are made through the ```/quiz``` domain.  

A Get request will trigger the quiz backend and cause it to load the questions from the stored json and return it to the front end.

A post request will accept a json file containing an array of values which indicate a users answers. A score will then be calculated and returned.
# The Quiz 

The Quiz module passes questions and answers to the backend, which in turn passes to the front end.  

- ## Installation

The module only depends on the JSON Library which can be installed with:
```bash
pip install JSON
```  
- ## Usage
Initially a user must load the questions from the ```quiz_questions.json``` file i.e:
```python
import quiz
quiz.load_questions()
```

Json files are formatted as
```json
{"data"[
    {"question":<question(string)>,
    "options":[
        <option 1 (string)>,
        <option 2 (string)>,...],
    "answer":<answer index (int)>},...
]}
```

Then questions can be obtained as a dictionary via
```python
quiz.get_questions()
```

Finally, a user's submission from the front end can be processed with the command:
```python
quiz.attempt(<user answers (array)>)
```  

The array of answers should be formatted as an array of integers i.e:
```python
[0,2,1]
```  

# Front End
Our front end is built around the react.js web framework. We designed it with mobile users in mind as we identified it as the platform of prefrence for our target audience.

# Authors
- [Alex](https://github.com/Cosmospacedog) - Chatbot, additional backend and documentation  
- [Thomas](https://github.com/duc-minh-droid) - Front End
- [Benitas](https://github.com/pulse77) - Quiz
- [Edward](https://github.com/Edguardia) - Flask backend
- [Lorenzo](https://github.com/LorenzoSattaChiris) - Design  

![THe guys](https://i.imgur.com/si7w4RG.png) - The team
## License

[MIT](https://choosealicense.com/licenses/mit/)
