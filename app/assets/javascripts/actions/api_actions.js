var ApiActions = {
  receiveAllQuestions: function (questions) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.QUESTIONS_RECEIVED,
      questions: questions
    });
  },

  receiveSingleQuestion: function (question) {
    AppDispatcher.dispatch({
      actionType: QuestionConstants.SINGLE_QUESTION_RECEIVED,
      question: question
    });
  },

  receiveNewAnswer: function (answer, qId) {
    AppDispatcher.dispatch({
      actionType: AnswerConstants.NEW_ANSWER_RECEIVED,
      answer: answer,
      questionId: qId
    });
  }
};
