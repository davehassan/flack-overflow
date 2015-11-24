var App = React.createClass({

  getInitialState: function () {
    return {currentUser: {}};
  },

  componentWillMount: function () {
    CurrentUserStore.addChangeListener(this.setUser);
    SessionApiUtil.fetchCurrentUser();
  },

  setUser: function () {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  },

  render: function () {
    return (
      <div>
        <TopBar />
        <Header />
        <div className="main">
          {this.props.children}
        </div>
        <div className="sidebar"></div>
        <div className="footer"></div>
      </div>
    );
  }
});
