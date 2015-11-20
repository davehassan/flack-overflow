$(function() {
  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var App = React.createClass({
    render: function () {
      return (
        <div>
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

  var routes = (
    <Route path='/' component={App}>
      <IndexRoute component={QuestionsIndex} />
      <Route path="questions" component={QuestionsIndex} />
      <Route path='questions/new' component={QuestionForm} />
      <Route path="questions/:questionId" component={QuestionShow} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
