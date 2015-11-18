var QuestionShow = React.createClass({
  getInitialState: function () {
    var questionId = parseInt(this.props.params.questionId);
    var question = this._fetchQuestion(questionId);
    return { question: question };
  },

  _fetchQuestion: function (id) {
    var result;
    QuestionStore.all().forEach(function (question) {
      if (id === question.id) {
        result = question;
      }
    }.bind(this));
    return result;
  },

  render: function () {
    return (
      <div>
        <h5>{this.state.question.title}</h5>
        <p>{this.state.question.body}</p>
      </div>
    );
  }
});
