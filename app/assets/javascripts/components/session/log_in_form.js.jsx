var LogInForm = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return { username: "", password: "" }
  },

  changeUsername: function (e) {
    this.setState({ username: e.currentTarget.value })
  },

  changePassword: function (e) {
    this.setState({ password: e.currentTarget.value })
  },

  submit: function (e) {
    e.preventDefault();

    SessionApiUtil.login(this.state, function () {
      this.history.pushState(null, '/');
    }.bind(this));
  },

  render: function () {
    return (
      <form onSubmit={ this.submit }>
        <hi>Log In!</hi>
        <label>Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.changeUsername}/>
        </label>

        <label>Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.changePassword}/>
        </label>

        <button onClick={this.submit}>Log In!</button>
      </form>
    );
  }
});
