var AnswerShow = React.createClass({

  answerToggle: function () {
    if (CurrentUserStore.currentUser().id === this.props.askerId) {
      return <div className={this.setClass} onClick={this.props.toggleAccepted}>&check</div>;
    } else {
      return <div className={this.setClass}>&check</div>;
    }
  },

  setClass: function () {
    if (this.props.answer.accepted) {
      return "accepted";
    } else {
      return "";
    }
  },

  render: function () {
    return (
      <div>
        <p>{this.props.answer.body}</p>
        <small>Answered by: {this.props.answer.answerer.username}</small>
        {this.answerToggle()}
      </div>
    );
  },
});
