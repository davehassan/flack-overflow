(function (root) {
  var _questions = [];
  var CHANGE_EVENT = "change";

  var resetQuestions = function (questions) {
    _questions = questions.slice(0);
  };

  var receiveQuestion = function (question) {
    _questions.forEach(function (q, i) {
      if (q.id === question.id) {
        _questions[i] = question;
      }
    });
  };

  var receiveNewAnswer = function (answer, questionId) {
    var question = QuestionStore.find(questionId);
    question.answers.push(answer);
  };

  var QuestionStore = root.QuestionStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _questions.slice(0);
    },

    find: function (id) {
      var question;
      _questions.forEach(function (q) {
        if (q.id === id) {
          question = q;
        }
      });
      return question;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch(payload.actionType){
        case QuestionConstants.QUESTIONS_RECEIVED:
          resetQuestions(payload.questions);
          QuestionStore.emit(CHANGE_EVENT);
          break;
        case QuestionConstants.SINGLE_QUESTION_RECEIVED:
          receiveQuestion(payload.question);
          QuestionStore.emit(CHANGE_EVENT);
          break;
        case AnswerConstants.NEW_ANSWER_RECEIVED:
          receiveNewAnswer(payload.answer, payload.questionId);
          QuestionStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
