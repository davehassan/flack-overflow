var ApiUtil = {
  fetchAllQuestions: function () {
    $.ajax({
      url: "/api/questions",
      type: "GET",
      dataType: 'json',
      success: function (questions) {
        ApiActions.receiveAllQuestions(questions);
      }
    });
  },

  createQuestion: function (question, callback) {
    $.ajax({
      url: "/api/questions",
      type: "POST",
      dataType: "json",
      data: { question: question },
      success: function (question) {
        ApiActions.receiveSingleQuestion(question);
        callback && callback(question.id);
      }
    });
  },

  fetchSingleQuestion: function (id) {
    $.ajax({
      url: "/api/questions/" + id,
      type: "GET",
      dataType: "json",
      success: function (question) {
        debugger;
      }
    });
  }

};
