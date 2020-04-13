0x0D. JQuery advanced
=====================
 

#### 1\. Creating a DOM element

**In a file `1-index.html`, reuse the template you created previously.**

-   Remove the code that verifies jQuery loaded and logs messages to the console
-   Create a function named `createTextElement`:
    -   Within the function, create a `p` HTML element
    -   The paragraph should display `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in diam risus. Nunc sit amet euismod ipsum. Aenean tempus ex sed est volutpat, sed sodales velit tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin auctor sollicitudin eleifend. Vivamus porta enim vitae mauris commodo, vitae tempor tellus elementum. Quisque sed pellentesque nulla, at eleifend nisi. Phasellus eget tincidunt ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    -   Add the paragraph to the `body` of the page
-   Call the `createTextElement` function

**Requirements:**

-   You must use jQuery only to generate the HTML tag and attach it to the page
-   Use the keyword `append` to attach the element to the page

#### 2\. Creating multiple DOM elements at once

**In a file `2-index.html`, reuse the template you created previously.**

-   Remove the function `createTextElement`
-   Create a function named `createFamilyTree`:
    -   It should create a table element
        -   The head of the table should display `Firstname` and `Lastname` in two cells
        -   The body of the table should three rows
        -   The first row should contain two cells with `Guillaume` and `Salva`
        -   The second row should contain two cells with `Paulette` and `Salva`
        -   The third row should contain two cells with `Antoine` and `Salva`
    -   Use the keyword `append` only once to attach all the elements of the table to the page
-   Call the `createFamilyTree` function

**Requirements:**

-   You must use jQuery only to generate the HTML tag and attach it to the page
-   The entire table code should be contained in one string

**The table created by your script should look like this**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/b65cd64b2fe0bf2a2efd.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200412T235835Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=efb16f711fdb3b6962c99a24d45765ce43e6a5b0fac550d7002877800bce8053)

#### 3\. Chain DOM elements

**In a file `3-index.html`, reuse the template you created previously. Reuse also the function named `createFamilyTree`:**

-   The table is containing the exact same values as the previous task
-   This time, create each element one by one
-   Use the keywords `append` for each element and `text` for the cells
-   Do not create any intermediate variable
-   Call the `createFamilyTree` function

**Tips:**

-   You can append multiple elements at once, by separating the elements with a comma

**Requirements:**

-   You must use jQuery only to generate the HTML tag and attach it to the page

**The table created by your script should look like this**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/ec35dc2f7b81b4be4a47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200412T235835Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=98f681082509f5ddf7cd83e98d490b902735f5dd59ebd39048c7185acac29b91)

#### 4\. HTML function

**In a file `4-index.html`, reuse the template you created in the previous task. Reuse also the function named `createFamilyTree`.**

-   Create a new function `replaceFamilyTree`:
    -   It should replace the childrens of the `tbody` elements with a new `tr`
    -   The `tr` element should contain two cells with `Gerard` and `Bonissa` in each
-   Make sure `createFamilyTree` and `replaceFamilyTree` are called

**Requirements:**

-   You must use the keyword `html` to replace the content of the table

**The table created by your script should look like this**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/dac8d3e497a6b0fef6ec.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200412T235835Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4630928a9eb491d82ab141451c90b4c525151d3045cc8c29cfd7cbb7ed3b548c)

#### 5\. Click attribute and remove function

**In a file `5-index.html`, reuse the template you created previously.**

-   Remove the `createFamilyTree` and `replaceFamilyTree` functions
-   Create a function `createFamilyTree`:
    -   It should append to the `body` an empty table, with `thead` and two cells with text `Firstname` and `Lastname`, respectively
    -   It should append an empty `tbody` element to the `table` after the `thead`
-   Create a function `addNewMember`:
    -   It accepts two arguments `firstName`(string) and `lastName`(string)
    -   It appends to the body of the `table` a new row with three cells
    -   The first cell displays the `firstName`, the second cell displays the `lastName`
    -   The third cell displays `(x)`
    -   On click on the third cell, it should remove the row
    -   Add CSS to the third cell to have an `orange` background
-   Calls the function `createFamilyTree`
-   Using `addNewMember`, generate a fake table with:
    -   the first row `Guillaume`, `Salva`
    -   the second row `Arielle`, `Snizt`
    -   the third row `Fanette`, `Snizt`
    -   the fourth row `Gerard`, `Snizt`
    -   the fifth row `Victor`, `Salva`

**Requirements:**

-   You must use the keywords `click`, `css`, and `remove`

**The table created by your script should look like this:**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/6aa4c6aafa86f320f78d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200412T235835Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=18d0445a82ee5424c19cb671569cd1f3e64867410c309d6f82aa31ce8d2fb942)

#### 6\. Val, before, and prepend functions

**In a file `6-index.html`, reuse the template you created previously.**

-   Reuse the function `createFamilyTree` you wrote in the previous task
-   Reuse the function `addNewMember` you wrote in the previous task, and add the following modification:
    -   The function should accept a new argument `position`(string)
    -   When position is equal to `before`, it should add the row at the top of the table
    -   Otherwise, it should add the row at the bottom of the table
-   Write a function `createForm`:
    -   It should add before the table two `input` of type `text`
    -   It should add a `select` with two options as well: `before` and `after` with corresponding `Before` and `After` text
    -   It should add a `input` of type `submit` as well
        -   When the user clicks on the submit, it should call the function `addNewMember` with the value of the two inputs and the value of the select element
-   Call the function `createFamilyTree`
-   Call the function `createForm`

**Requirements:**

-   You must use the keywords `first`, `before`, and `prepend`
-   To select the second input, use the `nth-of-type` selector

**The form created by your script should look like this:**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/06a560c3cf7cbd67ebd4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200412T235835Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=087f022f465abfa15457ec4d1dd218662cbe76fffb85b6e400dfeee49b6e38f9)

#### 7\. Query - Setup your dev environment

**In a file `7-index.html`, reuse the template you created in the previous task**

-   Remove the functions from the `script`
-   Import jQuery using the CDN and make sure you can access the ajax methods

-   Create a form:

    -   Create a function `createSearchForm`, it should append to the body:
        -   An empty `input` of type `text` without ID, name, or class
        -   An `input` of type `submit`
            -   When the user clicks on the submit button, it should query the function `queryWikipedia` that you are going to create with the value of the text `input`
        -   An empty `ul` element
-   Create a function `addNewArticle` to add new items to a list

    -   It accepts three arguments `id`(string), `title`(string), and `snippet`(string)
    -   It create an element `li`
        -   Within the `li`, add two `paragraph` elements
            -   The first paragraph contains a `span` tag with the following text: `id -`, then a `b` element with the `title`
            -   The second paragraph, should contain the `snippet`
    -   Appends the `li` to the `ul` element (created by `createSearchForm`)
-   Implement a get function: create a function `queryWikipedia`

    -   It accepts one argument `search`(string)
    -   Create a data object with attributes required to query a search using the string passed in the argument with Wikipedia
    -   For each result returned by the API, call the function `addNewArticle` with the result's `pageid`, `title`, and `snippet`
-   Call the function `createSearchForm` when the page loads

**Requirements:**

-   Look at the documentation from Wikipedia to query the API `https://www.mediawiki.org/wiki/API:Search`
-   Use the minified only version of jQuery, so you can access the ajax methods
-   When adding the `snippet`, make sure that the HTML coming from Wikipedia is correctly displayed

**The form created by your script should look like this:**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/1aa9995ca67d199e7ddc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200412T235835Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=05d0b80719d9144d7d46f1c2377765c04983b1025e246c24a74b57af4a7fbf9d)

**Query results should display like this:**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/57dd8327b2855039d8e2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200412T235835Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=414b92de0f547664105544cda27e48dcc1ceb7e0b38f22ae118c6cf6eee62a40)

#### 8\. Pagination

**In a file `8-index.html`, reuse the code from the previous task**

-   Modify the function `createSearchForm`:

    -   It should append to the body another list, with the id `pagination`
-   Modify the function `queryWikipedia`:

    -   Add a new parameter named `offset`(number)
    -   By default, the offset should be set to `0`
    -   Modify the data object to add the `offset`
    -   When you receive the response from the API, call the function `buildPagination` that you are going to create below
-   Create a new function named `buildPagination`:

    -   It accepts three arguments `numberOfItems`(number), `itemsPerPage`(number), and `currentOffset`(number)
    -   When the function is called, reset the pagination list to an empty tag
    -   Write a loop that will display the pagination (using the total number of items divided by the number of items per page)
    -   For each page, create a list item
        -   Add some CSS for each item (`cursor: 'pointer'`, `10px` margin left, and bold when this is the current page)
        -   The text of the item should be the page number
        -   When clicking on a page number, it should call the function `queryWikipedia` with the right offset

**Requirements:**

-   Use the `totalhits` value from Wikipedia to define the total number of items
-   Display 10 items per page
-   Make sure your pages are displayed in an horizontal line

**The form created by your script should look like this:**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/1aa9995ca67d199e7ddc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200412T235835Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=05d0b80719d9144d7d46f1c2377765c04983b1025e246c24a74b57af4a7fbf9d)

**The query results should display like this, notice how the `12` is in bold, because that is the current page**

![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/4f86ed3cadb452d74841.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUWMNL5ANN%2F20200412%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200412T235835Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=8d18d53f350fb8af2f95d72303321baa57d1e10fa8492dbc1fc5c20bb6b01416)

#### 9\. Wrap/unwrap

**In a file `9-index.html`, reuse the code from the previous task**

-   In the header, add some CSS, with the `style` tag:

    -   Add a new class named `loading`
        -   Set the opacity at 0.2 within that class
-   In your `script` with your other functions, create a function named `displayLoading`:

    -   It accepts one argument `loading`
    -   It select the first `ul` element of the page
    -   If `loading` is true, it wraps the element with a `div` tag and the class `loading`
    -   If `loading` is false, it unwrap the `ul` from the `div`
-   Modify the `queryWikipedia` function:

    -   It should call the function `displayLoading` before querying the API
    -   Once the API returns the value, it should remove the opacity by calling the function again

**Requirements:**

-   You must use the `wrap` and `unwrap` functions of Jquery

#### 10\. Another Get API

**Setup your dev environment**

-   Install `json-server` within your projects using `npm`:
-   Run the server using `node_modules/.bin/json-server --watch db.json`

**You are provided with this `db.json`, don't forget to push it, you can change the values of the `id`, `title`, `author`, `postId`, `name` as you like**

```
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    },
    {
      "title": "fd",
      "author": "fffff",
      "id": 2
    },
    {
      "title": "fd",
      "author": "fffff",
      "id": 3
    },
    {
      "title": "f",
      "author": "f",
      "id": 4
    },
    {
      "title": "",
      "author": "",
      "id": 5
    },
    {
      "title": "",
      "author": "",
      "id": 6
    },
    {
      "title": "",
      "author": "",
      "id": 7
    },
    {
      "title": "",
      "author": "",
      "id": 8
    },
    {
      "title": "",
      "author": "",
      "id": 9
    },
    {
      "title": "",
      "author": "",
      "id": 10
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}

```

**In a file `10-index.html`:**

-   Reuse your template from the previous task, remove the functions in your `script` and the `style` in the head
-   Make sure you import jQuery using the CDN and make sure you can access the ajax methods

-   Create a function `addPostRow`:

    -   It takes into argument `data` (object)
    -   It append to the body a paragraph
    -   The paragraph should contain a `span` element with the text `Post created with id ID, title: TITLE, author: AUTHOR`
        -   Each variable is contained in the `data` object
-   Create a function named `listPosts`:

    -   It should query your local server on the `posts` endpoint
    -   When the server return a 200 response, it should call the function `addPostRow` for each element in the response
    -   When the server is unavailable, display an alert with the message `Server Error`
-   Call the function `listPosts` when your page loads

**Requirements:**

-   You must use the `get` function from jQuery

#### 11\. Post query

**In a file `11-index.html`, reuse the code you previously wrote**

-   Create a new function `buildForm`:

    -   It appends to the body a `form` element
    -   Inside the form, add a `div` element, with a `label` for `author` with text `Author` and an `input` of type `text` with id `author`
    -   Inside the form, add a `div` element, with a `label` for `title` with text `Title` and a `textarea` with id `title`
    -   Inside the form, add an `input` of type `submit`
    -   When clicking on the submit button, call the function `sendForm` detailed below
-   Create a new function `sendForm`:

    -   It should add after the `form`, the text `About to send the query to the API`
    -   It should create a data object, with the `title` and `author` attributes. The values are the ones within the inputs
    -   It should send a `POST` query to your server endpoint `posts` with the data
    -   If the query succeed, call the function `addPostRow` with the data coming back from the API
    -   If the query does not succeed, it should display an alert with the message `Error sending the POST query`
-   Call the functions `listPosts` and `buildForm` when your page loads

**Requirements:**

-   When clicking on the label, the input text should be selected by the browser
-   When pressing enter on the input text, the form should be submitted without reloading the page
-   You must use the `after` function from jQuery

#### 12\. Delete query

**In a file `12-index.html`, reuse your code from the previous task**

-   Modify the function `addPostRow`:

    -   Add an id attribute to the paragraph with `row-ID` (the ID being the one of the post)
    -   Append a `span` element with the text `(delete)` to the `p`, this `span` should come before the `span` with the post information
        -   On click, call the function `deletePost` with the post id
-   Create a function `deletePost`:

    -   It accepts one argument `id`(number)
    -   Send a `DELETE` query to the `posts` endpoint with the id of the post
    -   If the query is successful, remove the row from the body
    -   If the query is not successful, display an alert with the message `Post was not deleted`

**Requirements:**

-   You must use the function `remove` from jQuery
