import axios from './axios';

// Exercise 01
// axios.get("/articles").then(({ data }) => console.log(data.data));

// Exercise 02
axios.post("/articles", {
    title: "Hello",
    content: "Blah Blah Blah",
    tags: ['fish', 'sticks'],
}).then(({ data }) => console.log(data.data.id));

// Exercise 03
// axios.get("/articles/54").then(({ data }) => console.log(data.data));

// Exercise 04
axios.patch("/articles/54", {
        tags: ["spoons", "science", "spoon truther", "more spoons"]
}).then(({ data }) => console.log(data.data.tags));

// Exercise 05 - Delete an article and console.log "Deleted"
//axios.delete("articles/58").then(console.log("Deleted"));

// Exercise 06 - Add a comment to an article and console.log() it's ID
// axios.post("/articles/54/comments", {
// 	email: "ajaxSatan@hell.com",
// 	comment: "True Axios"
// }).then(({ data }) => console.log(data.data["id"]));

// Exercise 07 - console.log() all comments from one article
// axios.get("/articles/54/comments").then(({ data }) => console.log(data.data));

// Exercise 08 - output a list of all the tags
axios.get("/tags").then(({ data }) => console.log(data.data));

// Tricksy
// 01 - Fetch an article with an ID that does not exist and console.log() "Not Found" when it fails
// axios.get("/articles/58").then(({ data }) => console.log(data.data),() => console.log("Not Found"));

// 02 - Output an array of the titles of the articles
// axios.get("/articles").then(({ data }) => console.log(
//     data.data.reduce((result, article) => {
//         return [...result, article["title"]];
//     },[]))
// );

// Uber-Tricksy
// 03 - Table of tag amounts
//axios.get("/tags").then(({ data }) => {
    
//});

