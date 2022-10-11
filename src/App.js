import './App.css';
import {Header} from "./components/Header/Header";
import {Posts, Users} from "./components";

function App() {
    return (
        <div>
            <Header/>
            <div className={"header"}>
                <Users/>
                <Posts/>
            </div>
        </div>
    );
}

export default App;
