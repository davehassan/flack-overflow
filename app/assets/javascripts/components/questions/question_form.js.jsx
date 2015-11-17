var QuestionForm = React.createClass({
  getInitialState: function () {
    return { };
  },

  createQuestion: function (event) {
    event.preventDefault();
    ApiUtil.createQuestion(this.state);
  },

  render: function () {
    return <form></form>;
  }
});
