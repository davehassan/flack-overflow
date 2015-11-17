(function (root) {
  var _questions = [];
  var CHANGE_EVENT = "change";

  var resetQuestions = function (questions) {
    _questions = questions.slice(0);
  };

  var QuestionStore = root.QuestionStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _questions.slice(0);
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
      }
    })
  });
})(this);
