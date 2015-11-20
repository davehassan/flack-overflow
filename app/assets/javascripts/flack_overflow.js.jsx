$(function() {
  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
    <Route path='/' component={App}>
      <IndexRoute component={QuestionsIndex} />
      <Route path="questions" component={QuestionsIndex} />
      <Route path='questions/new' component={QuestionForm} />
      <Route path="questions/:questionId" component={QuestionShow} />
      <Route path="session/new" component={LogInForm} />
      <Route path="users/new" component={NewUserForm} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
