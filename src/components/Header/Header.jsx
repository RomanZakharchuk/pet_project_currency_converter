import style from './Header.module.scss';
import { CurrentCurrencyBlock } from "./CurrentCurrencyBlock";
import { useSelector } from "react-redux";

const Header = () => {
    const eurRate = useSelector( state => state.currency?.eurRate );
    const usdRate = useSelector( state => state.currency?.usdRate );

    const makeArrayFromObject = ( rates ) => {
        if (rates) {
            return Object.entries( rates ).map( ( [currency, rate] ) => ({ currency, rate }) );
        }
    };

    const rounding = ( price ) => price.toFixed( 2 );

    return (
        <div className={style.Header}>
            {makeArrayFromObject( usdRate ).filter( item => item.currency === 'UAH' )
                .map( ( item, index ) => (
                        <CurrentCurrencyBlock key={index} currencyName={item.currency + ' / USD'}
                                              currencyPrice={rounding( item.rate )} />
                    )
                )}

            {makeArrayFromObject( eurRate ).filter( item => item.currency === 'UAH' )
                .map( ( item, index ) => (
                        <CurrentCurrencyBlock key={index} currencyName={item.currency + ' / EUR'}
                                              currencyPrice={rounding( item.rate )} />
                    )
                )}
        </div>
    );
};

export { Header };