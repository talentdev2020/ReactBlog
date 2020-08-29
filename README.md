[![Netlify Status](https://api.netlify.com/api/v1/badges/5f96e288-45dc-48aa-87d5-ca8f2de6edc3/deploy-status)](https://app.netlify.com/sites/reactblog-test/deploys)


## Introduction

A simple 3-pages app for blogging.

There are 3 main pages - Login, Home and Create page.

### Login

Users can log in with name and email.
Now I didn't implement the form validation.

### Home

Display all posts.

User can see the comments for each post by clicking the "Comments" button

User can reply to a post only if he/she is authenticated.

Users can search posts through all post fields (author name, email, post title, and post text) using keyword.

If the user is the owner of the post, he has the ability to delete the post.

### Create post

Users should login first to create a post. They can create a post using Quill editor.

## Live ink

You can check the live site at https://reactblog-test.netlify.app/

## Functionality

- Users can login to the website.
- Display all posts
- Users can create a post
- Users can reply to a post
- Users can delete a post
- Users can search the post through all fields(title, body, username, email)

## Beyond requirements

- Implemented Login
- Users don't need to input their name and email when creating a post. Username and email will be added automatically if a user is logged in.
- Users don't need to input their name and email when replying to a post. Username and email will be added automatically if a user is logged in.
- It can be integrated with Server API easily
- Only the owner of the post can delete his/her post.
- Only authenticated user can reply to a post.

## Tech stack

- Crafted from CRA
- State management with Redux
- Styling with styled-component

## How to run this project

- `npm install` or `yarn` (This command will install all the required packages)
- `npm run start` or `yarn start`(This command will run the project, you can check the project on http://localhost:3000)

## Used Libraries

redux, redux-saga, styled-components, immer.js, Quill

## Accessibility

100%

https://snipboard.io/JoiG2x.jpg
