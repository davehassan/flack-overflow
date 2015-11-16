# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Tag
* Tagging

### Controllers
* Api::TagsController (create, index, destroy, update, show)

### Views
* tags/index.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* TagsIndex
  - Tag
* TagForm
* TagInfo

### Stores
* Tags

### Actions
* ApiActions.receiveAllTags
* ApiActions.receiveSingleTag
* ApiActions.deleteTag

### ApiUtil
* ApiUtil.fetchAllTags
* ApiUtil.fetchSingleTag
* ApiUtil.createTag
* ApiUtil.editTag
* ApiUtil.destroyTag

## Gems/Libraries
