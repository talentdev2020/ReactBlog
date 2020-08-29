This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

A simple 3-pages app for post.

## Live Link

You can check the living site from https://reactblog-test.netlify.app/

## Functionality

- Users can login to the website.
- Display all posts
- Users can create a post
- Users can reply to a post
- Users can delete a post
- Users can search the post through all fields(title, body, username, useremail)

## Bonus Points

- Implemented the Login
- Users don't need to input his/her name and email when creating a post. Usernam and email will be added automatically if a user is logged in.
- Users don't need to input his/her name and email when replying to a post. Username and email will be added automatically if a user is logged in.
- It can be integrated with Server API easily
- Only the owner of the post can delete a post.
- Only logged in user can reply to a post.

## Technical side

- State management with Redux
- Styling with styled-component

## How does this work?

There are 3 main pages : Login page, Home page, Create page.

### Login page

Users can log in with name and email.
Now I didn't implement the form validation.

### Home page

Display all posts.
User can see the comments for each post by clicking the "Comments" button
If a user is logged in, he can reply to the post.
Users issearch posts through all post fields (author name, email, post title, and post text) using keyword.
If the user is the owner of the post, he/she has the ability to delete the post.

### Create page

If the user isn't logged in, he/she should log in first.
Users can create a post using Quill editor.

## How to run this project

- npm install or yarn  (This command will install all the required packages)
- npm run start or yarn start(This command will run the project, you can check the project on http://localhost:3000)

## Required Libraries

redux, redux-saga, styled-components, Immer, Quill
