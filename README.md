Render a list of items with a link to a detail page (list / detail pattern)
Use URLSearchParams to get additional data about a web page
Use a function to filter an item from a list of data using an identifier
Use a Supabase database to store data
Use the Supabase javascript library to retrieve a list of items from a database
Use the Supabase javascript library to retrieve a single item from a database

## HTML elments
- title <h1>
- <section id= cars-ListContainer>

## Event
- when user loads the page they should see the list of cars 
how?
++ browser is going to talk to supabase and import the list and details ++(export async function getcars-List())
 ++const dogs = await getcars-List();
++Loop through and rendercars-List
- ++ user should be able to cick a car and see the details
how?
++ link the anchor tag 
use getCars function to capture data supabase
build loadDataDetail function 
inside loadDataDetail we will call renderCarDetail
- user should be able to click home button and should return to intial page
how?
build add anchor tag to <h1>

