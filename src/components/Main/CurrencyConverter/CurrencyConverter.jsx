import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import style from './CurrencyConverter.module.scss';
import { Input } from "./Input";
import { ExchangeArrowSvg } from "../../icons/ExchangeArrowSvg";

const CurrencyConverter = () => {
    const rates = useSelector( state => state.currency?.eurRate );
    const [amountFrom, setAmountFrom] = useState( 1 );
    const [amountTo, setAmountTo] = useState( 1 );
    const [currencyFrom, setCurrencyFrom] = useState( 'USD' );
    const [currencyTo, setCurrencyTo] = useState( 'EUR' );
    const [isCurrencySwitcher, setIsCurrencySwitcher] = useState( false );

    useEffect( () => {
        if (!!rates) {
            function init() {
                handleAmountFromChange( 1 );
            }

            init();
        }
    }, [rates] );


    function format( number ) {
        return number.toFixed( 4 );
    }

    function handleAmountFromChange( amount1 ) {
        setAmountTo( format( amount1 * rates[currencyTo] / rates[currencyFrom] ) );
        setAmountFrom( amount1 );
    }

    function handleCurrencyFromChange( currencyFrom ) {
        setAmountTo( format( amountFrom * rates[currencyTo] / rates[currencyFrom] ) );
        setCurrencyFrom( currencyFrom );
    }

    function handleAmountToChange( amountTo ) {
        setAmountFrom( format( amountTo * rates[currencyFrom] / rates[currencyTo] ) );
        setAmountTo( amountTo );
    }

    function handleCurrencyToChange( currencyTo ) {
        setAmountFrom( format( amountTo * rates[currencyFrom] / rates[currencyTo] ) );
        setCurrencyTo( currencyTo );
    }

    return (
        <div className={style.Container}>
            {isCurrencySwitcher ? (
                <Input
                    amount={amountTo}
                    currency={currencyTo}
                    currencies={Object.keys( rates )}
                    onAmountChange={handleAmountToChange}
                    onChangeCurrency={handleCurrencyToChange}
                />
            ) : (
                <Input
                    amount={amountFrom}
                    currency={currencyFrom}
                    currencies={Object.keys( rates )}
                    onAmountChange={handleAmountFromChange}
                    onChangeCurrency={handleCurrencyFromChange}
                />
            )}


            <button onClick={() => setIsCurrencySwitcher( !isCurrencySwitcher )} type={'button'}
                    className={style.ExchangeArrowBlock}>
                <ExchangeArrowSvg className={style.ExchangeArrow} />
            </button>

            {isCurrencySwitcher ? (
                <Input
                    amount={amountFrom}
                    currency={currencyFrom}
                    currencies={Object.keys( rates )}
                    onAmountChange={handleAmountFromChange}
                    onChangeCurrency={handleCurrencyFromChange}
                />
            ) : (
                <Input
                    amount={amountTo}
                    currency={currencyTo}
                    currencies={Object.keys( rates )}
                    onAmountChange={handleAmountToChange}
                    onChangeCurrency={handleCurrencyToChange}
                />
            )}
        </div>
    );
};

export { CurrencyConverter };