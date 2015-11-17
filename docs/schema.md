# Schema Information

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references questions), indexed
accepted    | boolean   | not null, default: false

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
commenter_id| integer   | not null, foreign key (references users), indexed
commentable_id| integer | not null, foreign key (references commentable id)
commentable_type| string| not null, (table name)

#questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
asker_id    | integer   | not null, foreign key (references users), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      |

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
taggable_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## votes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
voter_id        | integer   | not null, foreign_key (references user)
votable_id      | integer   | not null, foreign_key (references votable id)
votable_type    | string    | not null, (table name)
