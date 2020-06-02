import axios from './axios';

// Exercise 01
axios.get("/articles").then(({ data }) => console.log(data.data));

// Exercise 02
// axious.post("/articles", {
//     title: "Hello",
//     content: "Blah Blah Blah",
//     tags: ['fish', 'sticks'],
// });