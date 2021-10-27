import styles from './SelectedItems.module.css'

const SelectedItems = ({selectedItems, onRemoveItem}) => {
    return (
        <>
        {
            selectedItems.map(
                ({text, isValid})=>(
                    <div className={`${styles["dropdown__item"]} ${ isValid ? '': styles["has-error"] }`} key={text}>
                        <div className={styles["dropdown__item__text"]}>{text}</div>
                        { !isValid && (<div className={styles["dropdown__item__error-icon"]} >!</div>) }
                        <div onClick={onRemoveItem.bind(null,text)} className={styles["dropdown__item__button"]}>x</div>
                    </div>
                )
            )
        }
        </>
    );
}

export default SelectedItems;
