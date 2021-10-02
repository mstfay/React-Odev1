import axios from "axios";

export default async function getData(number) {
    const { data: userData } = await axios("https://jsonplaceholder.typicode.com/users/" + number)

    const { data: postData } = await axios("https://jsonplaceholder.typicode.com/posts/" + number)

    console.log("user: ", userData)
    console.log("post: ", postData)
}