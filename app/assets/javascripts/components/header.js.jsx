var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function () {
    return (
      <header className="header">
        <Link to="/" className="header-logo">Flack Exchange!</Link>
        <div className="header-links">
          <Link className="header-links-item" to="/questions">Questions</Link>
          <Link className="header-links-item" to="/questions/new">Ask a question</Link>
        </div>
      </header>
    );
  }
});
