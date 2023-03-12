import style from './App.module.scss';
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useEffect } from "react";
import { currencyActions } from "./redux/slices";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( currencyActions.getEurRates() );
        dispatch( currencyActions.getUsdRates() );
    }, [] );

    return (
        <div className={style.Container}>
            <Header />
            <Main />
        </div>
    );
}

export default App;
