# Team J.P Mortgage submission - Frauducation
![logo](https://i.imgur.com/7gbKliC.png)  
Our submission for the February 2024 HSW Hackathon

# The Idea
Frauducate is a web-based mobile-oriented digital learning platform aimed at preventing international students from being taken advantage of during their onboarding process.

We plan to:

- Help students learn to spot digital fraud through bite-sized pieces of information and examples

- help reinforce this knowledge with fun interactive quizzes

- Help put newfound knowledge to practical use by having users interact with our specialized fraud chatbot - Dan - and check if he's an imposter among us.

# Proposed Design
We Have decided to go with a sleek modern design for the website, with a simple and user-friendly interface.  

In details, we used Figma to create the logo and overall look & feel of the website/application. All the Content, including text, files, animations and images are copyright free for commercial use. The design takes inspiration from a market analysis of learning apps. We studied how those engage users with a positive and colorful UI/UX, trying to mimic this direction but adding our own brand identity. Our logo is designed as an svg, allowing for it to be used on any size and colors, easily downloadable due to it being light and always having perfect resolution. The other images also use SVGs. From a color point of view, we used a palette generator to have an harmonic set comprising of strong visual feedback, helping accessibility and engagement. For instance, the green / red mechanism for feedback delivery, or the chatbot interface. 

Design Images:
![screenie 1](https://i.imgur.com/Fbp9qhu.png) ![screenie 2](https://i.imgur.com/MjGRtVp.png)  
  
![screenie 3](https://i.imgur.com/zN130bz.png) ![Screenie 4](https://i.imgur.com/c2cxPIj.png)  
  
To transfer the design to code, we used a plugin directly embed on VS Code while mantaining a constant communication channel between the Design and Development team. 
  
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

Finally, users can send a message and obtain a response from the bot and check wether or not it had fraudulent intent, by using the commands:

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

Chatbot requests are made through the ```/calls``` domain.  

A get request signifies the creation of a new chat bot instance and thus creates a new global chat bot object (god rest our souls if two people use it at once).

A post request signifies a user giving the chatbot a new prompt, and thus it is accompanied by a json containing the user's message as a string. this will then trigger the chatbot code to make an api request and generate and return a text response.

### Quiz Interactions

Quiz requests are made through the ```/quiz``` domain.  

A Get request will trigger the quiz backend and cause it to load the questions from the stored json and return it to the front end.

A post request will accept a json file containing an array of values which indicate a users answers. A score will then be calculated and returned.

### Reflection interactions  

Reflect requests are made through the ```/reflection``` domain.  

When a get request is made, the backend passes the current scores to the ```reflection.py``` module, and returns the user's scores as well as their quiz results and a review of them

# Reflection
The reflection model provides performance analysis for a participant and provides a score.

- ## Usage
First the backend can create a reflection object and provide it appropriate scores. 
```python
from reflection import Reflection
response = Reflection(0.4,1)
```
Then you can obtain a progress review with
```python
response.get_analysis()
```

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
Our front end is built around the react.js web framework. We designed it with mobile users in mind as we identified it as the platform of preference for our target audience.

# Market Analysis 
We performed a market analysis that resulted in slides studying the evolution of the fraud market. As displayed by the adjacent pictures, it is unfortunately a growing and expanding market. But at Frauducation we can help mitigate that!

# Target User Persona
Our plans is to first target international students, then move on to students in general and at a later stage provide several modules targeting other populations exposed to fraud. 

Our first initial user persona is:
Occupation: International Student
Age: 18 to 25
Country of Origin: Outside of the UK, especially if outside of Europe
Engagement: Short attention span due to social medias, need to engage them with colors and quick moving content. 
Technological Abilities: Highly used to technology and online learning 

# Business Model
To deliver our product to market, we plan to enter it via University Collaboration. While students are our target market, we do not expect them to pay for this service. However, our service being invaluable for universities, we can ask for compensation yearly by offering our services for free to each cohort. This would be a member based pricing, meaning that universities would pay a small price for each student they want to be able to access the program.  

## Demo
![Frauducation Bot Example](https://i.imgur.com/ulkazyq.gif)

# Authors
- [Alex](https://github.com/Cosmospacedog) - Chatbot, additional backend and documentation  
- [Thomas](https://github.com/duc-minh-droid) - Front End
- [Benitas](https://github.com/) - Quiz
- [Edward](https://github.com/Edguardia) - Flask backend
- [Lorenzo](https://github.com/LorenzoSattaChiris) - Design  

![The guys](https://i.imgur.com/si7w4RG.png) - The team
## License

[MIT](https://choosealicense.com/licenses/mit/)
