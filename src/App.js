import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Comments, Posts, Users} from "./components";

function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
