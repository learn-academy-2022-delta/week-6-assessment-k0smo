# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key.

How can I fix this mistake?
What is the name of the foreign key?
Would the foreign key be on the Cohort model or the Student model? -->



Your answer: cohort that has many students need a foreign key cohort? or student? I think it will be on the student because cohort is the hash.

Researched answer: The foreign key is for cohort model because has_many students.


2. Which RESTful routes must always be passed params? Why?

Your answer: update, destroy, and show. Params are need to change to the record.

Researched answer: because ecah route is connected to HTML and a url and allows the passing of data.

3. Name three rails generator commands. What is created by each?

Your answer: 
rails generate: creates a template for boilerplate code.
rails console: allows for interatction with the command line.
destroy: this deletes and generation.

Researched answer:
rails console:: is also used for simply testing out ideas.
rails generate can create a controller.
destroy: if need to delete a generator created.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
index..display a list
showing all the students

action: "POST" location: /students
create..create a new in student database.

action: "GET" location: /students/new
new..return an HTML form for creating a new.

action: "GET" location: /students/2
show..display a specific

action: "GET" location: /students/2/edit
edit.. return an HTML form for editing 

action: "PATCH" location: /students/2
update..a specific student

action: "DELETE" location: /students/2
delete.. a specific student

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

as a user I have a to do list
As a developer: 
I want to create a new to do item.
I want to have a title, description for item.
I want to be able to view all of my to do items.
I want to be able to view a single to do item.
I want to edit a to do item.
I want to delete a to do item.
I can mark a to do item as complete.
I can mark a to do item as incomplete.
I can mark all items on to do list complete.
I can delete the whole to do list.
