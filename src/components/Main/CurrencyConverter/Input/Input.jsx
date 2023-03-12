import style from './Input.module.scss';

const Input = ( { amount, onAmountChange, currency, currencies, onChangeCurrency } ) => {
    return (
        <div className={style.AmountWrapper}>
            <input
                className={style.Input}
                type="text"
                value={amount}
                onChange={ev => onAmountChange( ev.target.value )}
            />
            <select className={style.Select} value={currency} onChange={ev => onChangeCurrency( ev.target.value )}>
                {currencies.map( ( currency, index ) => (
                    <option key={index} value={currency}>{currency}</option>
                ) )}
            </select>
        </div>
    );
};

export { Input };