import style from './TitleBlock.module.scss';
import moment from "moment";

const TitleBlock = () => {
    return (
        <div className={style.TitleBlock}>
            <div className={style.TitleWrapper}>
                <h1>Exchange currency rates widget</h1>
                <span>Check live foreign currency exchange rates</span>
            </div>

            <div className={style.DateWrapper}>
                <span>{moment().format('MMMM DD, YYYY')}</span>
            </div>
        </div>
    );
};

export { TitleBlock };