var Link = ReactRouter.Link;

var Header = React.createClass({
  render: function () {
    return (
      <header className="header">
        <Link to="/" className="header-logo">Flack Exchange!</Link>
        <ul className="header-links group">
          <li className="header-links-box">
            <Link className="header-links-item" to="/questions">Questions</Link>
          </li>
          <li>
            <Link className="header-links-item" to="/questions/new">Ask a question</Link>
          </li>
        </ul>
      </header>
    );
  }
});
