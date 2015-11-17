(function (root) {
  function _getAllQuestions(){
    return QuestionStore.all();
  }

  root.QuestionsIndex = React.createClass({
    getInitialState: function () {
      return { questions: _getAllQuestions() };
    },

    _questionsChanged: function () {
      this.setState({ questions: _getAllQuestions() });
    },

    componentDidMount: function () {
      QuestionStore.addChangeListener(this._questionsChanged);
      ApiUtil.fetchAllQuestions();
    },

    componentWillUnmount: function () {
      QuestionStore.removeChangeListener(this._questionsChanged);
    },

    render: function () {
      return (
        <div>
          {
            this.state.questions.map(function (question) {
              return(
                <QuestionIndexItem
                  question={question}
                  key={question.id}/>
              );
            })
          }
        </div>
      );
    }

  });
})(this);
