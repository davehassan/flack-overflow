var Link = ReactRouter.Link;

var TopBar = React.createClass({

  getInitialState: function () {
    return {
      currentUser: CurrentUserStore.currentUser()
    };
  },

  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ currentUser: CurrentUserStore.currentUser() });
  },

  logout: function () {
    SessionApiUtil.logout();
  },

  render: function () {
    var userStuff;
    if (CurrentUserStore.isLoggedIn()) {
      userStuff = (
        <nav className="top-bar-links group">
          <div>Hello: {CurrentUserStore.currentUser().username}</div>
          <button onClick={this.logout}>Log Out!</button>
        </nav>
      );
    } else {
      userStuff = (
        <nav className="top-bar-links group">
          <Link to="/users/new">Sign Up!</Link>
          <Link to="/session/new">Log In!</Link>
        </nav>
      )
    }

    return (
      <div className="top-bar">
        <div className="top-bar-wrapper">
          <logo className="top-bar-logo">Logo</logo>
          {userStuff}
        </div>
      </div>
    );
  },
});
