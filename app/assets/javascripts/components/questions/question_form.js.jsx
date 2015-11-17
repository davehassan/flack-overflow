var QuestionForm = React.createClass({
  getInitialState: function () {
    return { title: "", body: "" };
  },

  createQuestion: function (event) {
    event.preventDefault();
    ApiUtil.createQuestion(this.state);
  },

  updateTitle: function (event) {
    this.setState({title: event.currentTarget.value});
  },

  updateBody: function (event) {
    this.setState({ body: event.currentTarget.value});
  },

  render: function () {
    return (
      <form onSubmit={this.createQuestion}>
        <label>Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.updateTitle}/>
        </label>

        <label>Body:
          <textarea
            name="body"
            value={this.state.body}
            onChange={this.updateBody} />
        </label>

        <button>Submit!</button>
      </form>
    );
  }
});
