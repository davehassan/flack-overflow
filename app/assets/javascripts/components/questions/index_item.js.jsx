var QuestionIndexItem = React.createClass({
  render: function () {
    var question = this.props.question;
    return (
      <div className="question-index-item">
        <h5>{question.title}</h5>
        <p>{question.body}</p>
      </div>
    );
  }
});
