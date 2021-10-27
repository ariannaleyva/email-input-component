import React from "react";
import styles from "./Dropdown.module.css";
import Options from "./Options";
import SelectedItems from "./SelectedItems";

const Dropdown = React.forwardRef((props, ref) => {
  const {
    selectedItems,
    searchText,
    setSearchText,
    keyPressHandler,
    optionList,
    selectOptionHandler,
    removeSelectedOptionHandler,
  } = props;
  return (
    <div className={styles.dropdown}>
      <div className={styles["dropdown-items"]}>
        <SelectedItems selectedItems={selectedItems} onRemoveItem={removeSelectedOptionHandler} />
        <div className={styles["dropdown__search"]}>
          <input
            className={styles["dropdown__input"]}
            type="text"
            ref={ref}
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            onKeyUp={keyPressHandler}
          />
          {searchText !== "" && optionList.length > 0 && (
            <Options
              onSelectOption={selectOptionHandler}
              options={optionList}
            />
          )}
        </div>
      </div>
    </div>
  );
});

export default Dropdown;
