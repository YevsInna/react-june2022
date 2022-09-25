import './App.css';
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <div className='wrap'>
            <Users/>
            <Comments/>
        </div>
    );
}

export default App;

// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом
// на http://jsonplaceholder.typicode.com/users

//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом
//     на http://jsonplaceholder.typicode.com/comments