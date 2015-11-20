var TopBar = React.createClass({

  getInitialState: function () {
    return {
      currentUser: CurrentUserStore.currentUser()
    };
  },

  render: function () {
    if (CurrentUserStore.isLoggedIn()) {
      return (
        <div className="top-bar"></div>
      );
    } else {
      return (
        <div className="top-bar"></div>
      );
    }
  },
});
