import {useState} from "react";

import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
    const [user, setUser] = useState(null);
    const lift = (obj) => {
        setUser(obj)
    }

    return (
        <div>
            {user&& <Posts/>}
           <Users lift={lift}/>
        </div>
    );
}

export default App;

// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси
