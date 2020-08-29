This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can check the living site from https://reactblog-test.netlify.app/
## How does this work?

Through this project, users can login, create a new post, reply to the post and delete it.

There are 3 main pages : Login page, Home page, Create page.

According to the job description, I didn't need to make the Login Page.
But whenever creating the post, we should input the user name and email so I decided to make this project creatively.
I made the login page and users can only input the title and body of the post in the create page.
Then the user name and user email will be added to the post automatically.

- Login page
  Users can log in with name and email.
  Now I didn't implement the form validation.
- Home page
  Display all posts.
  If a user wants to see the all comments(replies), he/she can click the "Comment" button.
  If a user hasn't logged in, he/she can't reply to the post.
  Users can search posts through all post fields (author name, email, post title, and post text) using keyword.
  If the user isn't the owner of the post, he/she has no ability to delete the post.

- Create page
  If the user isn't logged in, he/she can't create a post.
  Users can create a post using Quill editor.

### How to run this project

- npm install (This command will install all the required packages)
- npm run start (This command will run the project, you can check the project on http://localhost:3000)

### Required Libraries

redux, redux-saga, styled-components, Immer, Quill
