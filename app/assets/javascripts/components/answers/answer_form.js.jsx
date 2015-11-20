var AnswerForm = React.createClass({
  getInitialState: function () {
    return { body: "" };
  },

  updateBody: function (e) {
    this.setState({ body: e.currentTarget.value});
  },

  createAnswer: function (e) {
    e.preventDefault();
    ApiUtil.createAnswer(this.state, this.props.qId);
  },

  render: function () {
    return (
      <form onSubmit={this.createAnswer}>
        <h5>Your Answer:</h5>

        <label>Body:
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.updateBody} />
        </label>

        <button>Submit!</button>
      </form>
    );
  },
});
