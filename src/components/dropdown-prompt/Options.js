import styles from './Options.module.css';

const Options = ({options, onSelectOption}) => {
  return (
    <div className={styles["dropdown__options"]}>
      {
        options.map(
          email=>
          (<div 
            key={email} 
            onClick={onSelectOption.bind(null,email)} 
            className={styles["dropdown__option"]}>
            {email}
          </div>)
        )
      }
    </div>
  );
};

export default Options;
