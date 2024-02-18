# Team J.P Mortgage submission - Frauducation
![logo](https://i.imgur.com/7gbKliC.png)  
Our submission for the February 2024 HSW Hackathon

# The Idea
Frauducate is a web-based mobile-oriented digital learning platform aimed at preventing foreign students from being taken advantage of during their onboarding process.

We plan to:

- Help students learn to spot digital fraud through bite-sized pieces of information and examples

- help reinforce this knowledge with fun interactive quizzes

- Help put newfound knowledge to practical  use by having users interact with our specialized fraud chatbot - Dan - and check if he's an imposter or not.
# Proposed Design

![screenie 1](https://i.imgur.com/Fbp9qhu.png) ![screenie 2](https://i.imgur.com/MjGRtVp.png)  
  
![screenie 3](https://i.imgur.com/zN130bz.png) ![Screenie 4](https://i.imgur.com/c2cxPIj.png)  
  
We Have decided to go with a sleek modern design for the website, with a simple and user-friendly interface.  
  
  
# The Chatbot Module
The fraud chatbot we used is a modified copy of openai's gpt3.5-turbo making use of their api and their new 'Assistants' feature allowing for the building of custom models.

The chatbot is controlled via the ```fraudbot.py``` python file  

Its depends only on the openai api wrapper which can be installed via:
```bash
pip install openai
```

- ## usage
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

# Authors
- [Alex](https://github.com/Cosmospacedog) - Chatbot and additional backend  
- [Thomas](https://github.com/duc-minh-droid) - Front End
- [Benitas](https://github.com/pulse77) - Quiz
- [Edward](https://github.com/Edguardia) - Flask backend
- [Lorenzo](https://github.com/LorenzoSattaChiris) - Design  
![THe guys](https://i.imgur.com/si7w4RG.png) - The team
## License

[MIT](https://choosealicense.com/licenses/mit/)
