import style from './Main.module.scss';
import { TitleBlock } from "./TitleBlock/TitleBlock";
import { CurrencyConverter } from "./CurrencyConverter";

const Main = () => {
    return (
        <div className={style.Main}>
            <TitleBlock />
            <CurrencyConverter />
        </div>
    );
};

export { Main };