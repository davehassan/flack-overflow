var QuestionShow = React.createClass({
  getInitialState: function () {
    var questionId = parseInt(this.props.params.questionId);
    var question = this._fetchQuestion(questionId);
    return { question: question };
  },

  _fetchQuestion: function (id) {
    ApiUtil.fetchSingleQuestion(id);
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
