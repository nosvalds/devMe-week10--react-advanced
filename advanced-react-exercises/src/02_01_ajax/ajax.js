import axios from './axios';

axios.get("/articles");

axious.post("/articles", {
    title: "Hello",
    content: "Blah Blah Blah",
    tags: ['fish', 'sticks'],
});