var QuestionShow = React.createClass({
  getInitialState: function () {
    var id = parseInt(this.props.params.questionId);
    return { question: QuestionStore.find(id) };
  },

  _fetchQuestion: function (id) {
    ApiUtil.fetchSingleQuestion(id);
  },

  componentDidMount: function () {
    QuestionStore.addChangeListener(this._onChange);
    this._fetchQuestion(this.state.question.id);
  },

  _onChange: function () {
    var question = QuestionStore.find(this.state.question.id);
    this.setState({ question: question });
  },

  areNoAnswers: function () {
    debugger;
    return (
      typeof this.state.question.answers === 'undefined' || this.state.question.answers.length === 0
    );
  },

  answerStuff: function () {
    if (this.areNoAnswers()) {
      return <div></div>;
    } else {
      var res = this.state.question.answers.map(function (answer) {
        return (
          <div>
            <small key={answer.id}>Answered by: {answer.answerer.username}</small>
            <p>{answer.body}</p>
          </div>
        );
      });
      return <div>{res}</div>;
    }
  },

  render: function () {
    return (
      <div>
        <h5>{this.state.question.title}</h5>
        <small>Asked by: {this.state.question.asker.username}</small>
        <p>{this.state.question.body}</p>
        {this.answerStuff()}
        <AnswerForm qId={this.state.question.id}/>
      </div>
    );
  }
});
