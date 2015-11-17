# FlackOverflow

[Heroku link][heroku]

[heroku]: http://flack-overflow.herokuapp.com

## Minimum Viable Product

FlackOverflow is a web application inspired by StackOverflow built using Ruby on
Rails and React.js. FlackOverflow allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete questions and answers
- [ ] Vote on questions and answers
- [ ] Tag questions with multiple tags and search questions by tag
- [ ] Badges


## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Question, Answer Models and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Questions and Answers.

[Details][phase-one]

### Phase 2: Flux Architecture Question and Answer CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, Question and Answer stores will be implemented and a set of actions
corresponding to the needed CRUD functionality created. Once this is done,
I will create React views for the Questions `Index`, `Question` and
`QuestionForm`. I will also create an Answer React views `Answer` and
`AnswerForm`. At the end of Phase 2, Questions and Answers can be created, read,
edited and destroyed in the browser. The Question asker will also be able to
accept a submitted Answer. Lastly, while constructing the views I will start
basic styling.

[Details][phase-two]

### Phase 3: Tags (1.5 days)

Phase 3 will begin by adding a Tag backend and linking associations to
Questions. I will then build basic React components and flux architecture for
Tags. React views for Tags: `TagIndex`, `Tag`, and `TagForm`.

[Details][phase-three]

### Phase 4: Comments (1.5 days)

Add Commentable concern. Fluxify. User CRUD for commenting on Questions and
Answers.

[Details][phase-four]

### Phase 5: Voting (1.5 days)

Users can vote on Questions, Answers and Comments. All votables are displayed in
order of vote total.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Make it pretty! Add some content! Hope it's funny!

### Bonus Features (TBD)
- [ ] Changing interface based on Reputation!
- [ ] Badges
- [ ] User profile
- [ ] Third party sign in.


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
