var QuestionIndexItem = React.createClass({
  render: function () {
    var question = this.props.question;
    var url = "/questions/" + question.id;
    return (
      <ReactRouter.Link className="question-index-item" to={url}>
        <h5>{question.title}</h5>
      </ReactRouter.Link>
    );
  }
});
