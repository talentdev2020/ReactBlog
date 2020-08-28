- How does this work?
  Through this project, user can login, show all posts, create the new post, reply to the post, and delete the post
  There are 3 main pages : Login page, Home page, Create page.
   * According to the job description, I don't need to make the Login Page.
     But when creating the post, we should input the user name and user email every time. I decided to make this project creatively.
     So I made the login page and user can only input the title and body of the post in the creating post page.
     Then the user name and user email will be added to the post automatically.
  Login page
     User can loging with name and email.
     For the test, I didn't implement the form validation.  
  Home page
     Display all posts.
     User can search the posts through all post fields (author name, email, post title and post text) using keyword.
     If user doesn't log in , he can't reply and delete the post.  He can only show the Posts.
     If the user isn't the owner of the post, he can't delete the post.
  Create page
    User can create the post
    
        
    