import style from './СurrentСurrencyBlock.module.scss';
import { ArrowSvg } from "../../icons/ArrowSvg";

const CurrentCurrencyBlock = ( { currencyName, currencyPrice } ) => {
    return (
        <div className={style.Container}>
            <span>{currencyName}</span>
            <span>{currencyPrice}</span>
            <ArrowSvg color={'#FFFFFF'} />
        </div>
    );
};

export { CurrentCurrencyBlock };