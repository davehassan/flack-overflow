var AnswerShow = React.createClass({

  answerToggle: function () {
    if (CurrentUserStore.currentUser().id === this.props.askerId) {
      return (
        <button
          className={this.setClass()}
          onClick={this.props.toggleAccepted}
          data-id={this.props.answer.id}>
          √
        </button>
      );
    } else {
      return <div className={this.setClass}>√</div>;
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
      <div key={this.props.answer.id}>
        <p>{this.props.answer.body}</p>
        <small>Answered by: {this.props.answer.answerer.username}</small>
        {this.answerToggle()}
      </div>
    );
  },
});
