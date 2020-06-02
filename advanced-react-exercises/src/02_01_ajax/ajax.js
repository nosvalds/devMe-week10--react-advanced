import axios from './axios';

// Exercise 01
axios.get("/articles").then(({ data }) => console.log(data.data));

// Exercise 02
axios.post("/articles", {
    title: "Hello",
    content: "Blah Blah Blah",
    tags: ['fish', 'sticks'],
}).then(({ data }) => console.log(data.data));

// Exercise 03
axios.get("/articles/54").then(({ data }) => console.log(data.data));

// Exercise 04
axios.patch("/articles/54", {
        tags: ["spoons", "science", "spoon truther"]
}).then(({ data }) => console.log(data.data["tags"]));

// Exercise 05 - Delete an article and console.log "Deleted"
axios.delete("articles/58").then(console.log("Deleted"));

// Exercise 06 - Add a comment to an article and console.log() it's ID
axios.post("/articles/54/comments", {
	email: "ajaxSatan@hell.com",
	comment: "True Axios"
}).then(({ data }) => console.log(data.data["id"]));

