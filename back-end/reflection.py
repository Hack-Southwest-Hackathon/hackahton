class Reflection():
    def __init__(self,score_quiz,score_call) -> None:
        self.MIN_CALL_PASS = 0.4
        self.MIN_QUIZ_PASS = 0.4
        self.score_quiz = score_quiz
        self.score_call = score_call

    def passed_quiz(self) -> bool:
        return self.score_quiz >= self.MIN_QUIZ_PASS
        
    def passed_call(self) -> bool:
        return self.score_call >= self.MIN_CALL_PASS
    
    def get_analasys(self):
        if (self.passed_quiz() and self.passed_call()):
            return "Congratulations on successfully identifying fraudulent messages! Your ability to distinguish scams is commendable and crucial in today's digital landscape. Your dedication to learning and vigilance not only protects yourself but also empowers others. Keep up the great work in staying informed and safeguarding against online threats. Well done!"
        elif (self.passed_quiz() and not self.passed_call()):
            return "Though the call posed a challenge, your commitment to learning is commendable. Remember, mistakes are part of the learning process. Your determination to improve is admirable, and with continued effort, you'll strengthen your ability to identify scams. Stay positive and keep honing your skills. You're on the right path."
        elif (not self.passed_quiz() and self.passed_call()):
            return "Congratulations on successfully identifying the call! Your vigilance is commendable. While the quiz posed a challenge, remember that setbacks are opportunities for growth. Your ability to recognize scams in real-time is a testament to your awareness. Keep learning from each experience, and your skills will continue to evolve. Your determination is inspiring, and I have no doubt you'll excel in future quizzes. Keep up the great work"
        else:
            return "Facing challenges head-on is commendable, even when results aren't as expected. While both instances may seem discouraging, they present valuable learning opportunities. Consider reviewing common scam tactics and practicing identifying them regularly. Engage in interactive resources or seek guidance from experts to enhance your knowledge. Remember, perseverance and continuous learning are key. Stay positive, and with persistence, you'll strengthen your scam identification skills. Embrace these setbacks as stepping stones toward improvement, and you'll soon find success. Keep pushing forward!"
