import {useState} from "react";

import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {postService} from "./services";


function App() {
    const [posts, setPosts] = useState([]);
    const getUserId = (userId) => {
        postService.getPosts(userId).then(value => setPosts(value.data))
    }

    return (
        <div>
            <Posts posts={posts}/>
           <Users getUserId={getUserId}/>
        </div>
    );
}

export default App;

// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси
