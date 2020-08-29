- How does this work?
  Through this project, user can login, create the new post, reply to the post and delete the post
  There are 3 main pages : Login page, Home page, Create page.
   * According to the job description, I don't need to make the Login Page.
     But when creating the post, we should input the user name and user email every time. I decided to make this project creatively.
     So I made the login page and user can only input the title and body of the post in the create page.
     Then the user name and user email will be added to the post automatically.
  Login page
     User can loging with name and email.
     Now I didn't implement the form validation.  
  Home page
     Display all posts.
     User can search the posts through all post fields (author name, email, post title and post text) using keyword.
     If the user doesn't log in , he can't reply and delete the post.  
     If the user is logged in, he can see the 'Commment' button.
        If the user click the comment button, all comments will be displayed and user can reply another comment.
     If the user isn't the owner of the post, he can't delete the post.
   
  Create page
    User can create the post using Quill editor
    If the user isn't logged in, he can't see the 'Create' button

-How to run this project
 npm install  (This command will install the all required packages)
 npm run start  (This command will run the project, you can check the project on localhost:3000)

-Required Libraries
 Immer, Quill 
        
    