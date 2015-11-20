var QuestionShow = React.createClass({
  getInitialState: function () {
    return { question: QuestionStore.find(this.qId()) };
  },

  qId: function () {
    return parseInt(this.props.params.questionId);
  },

  _fetchQuestion: function (id) {
    ApiUtil.fetchSingleQuestion(id);
  },

  componentDidMount: function () {
    QuestionStore.addChangeListener(this._onChange);
    this._fetchQuestion(this.qId());
  },

  componentWillUnmount: function () {
    QuestionStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    var question = QuestionStore.find(this.qId());
    this.setState({ question: question });
  },

  areNoAnswers: function () {
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
          <div key={answer.id}>
            <small>Answered by: {answer.answerer.username}</small>
            <p>{answer.body}</p>
          </div>
        );
      });
      return <div>{res}</div>;
    }
  },

  questionStuff: function () {
    if (typeof this.state.question !== 'undefined') {
      return (
        <div>
          <div>
            <small>Asked by: {this.state.question.asker.username}</small>
            <h5>{this.state.question.title}</h5>
            <p>{this.state.question.body}</p>
          </div>
          {this.answerStuff()}
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  render: function () {
    return (
      <div>
        {this.questionStuff()}
        <AnswerForm qId={this.props.params.questionId}/>
      </div>
    );
  }
});
