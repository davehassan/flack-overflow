var App = React.createClass({

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
