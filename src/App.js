import './App.css';
import {Cat, Dog, FormCat, FormDog} from "./components";
import {useReducerCatDog} from "./reducers";

function App() {

    const [state, dispatch] = useReducerCatDog();

    const addCat = (data) => {
        dispatch({type: 'addCat', payload: data.cats})
    };

    const deleteCat = (cat) => {
        dispatch({type: 'deleteCat', payload: cat})
    }

    const addDog = (data) => {
        dispatch({type: 'addDog', payload: data.dogs})
    };

    const deleteDog = (dog) => {
        dispatch({type: 'deleteDog', payload: dog})
    }


    return (
        <div className={"wrap"}>

            <FormCat addCat={addCat}/>
            {
                state.cats.map(cat=><Cat key={cat.id} cat={cat} deleteCat={deleteCat}/>)
            }
            <FormDog addDog={addDog}/>
            {
                state.dogs.map(dog=><Dog key={dog.id} dog={dog} deleteDog={deleteDog}/>)
            }

        </div>
    );
}

export default App;
