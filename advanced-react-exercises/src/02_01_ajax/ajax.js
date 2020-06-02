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
