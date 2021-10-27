import { useRef, useReducer, useCallback, useState } from "react";
import Dropdown from "./Dropdown";
import {initialState, reducer } from "../../store/dropdown/reducer";
import { SET_OPTION_LIST, ADD_SELECTED_OPTION, REMOVE_SELECTED_OPTION } from '../../store/dropdown/actionTypes';
import useDebounceExecution from "../../hooks/debounceExecution";

const DropdownContainer = ({ searchFn }) => {

  const searchInput = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectOptionHandler = (option) => {
    dispatch({ type: ADD_SELECTED_OPTION, payload: { text:option, isValid: true }});
    setSearchText("");
    searchInput.current.focus();
  };

  const removeSelectedOptionHandler = (option) => {
    dispatch({ type: REMOVE_SELECTED_OPTION, payload: option});
    searchInput.current.focus();
  }
  

  const keyPressHandler = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: ADD_SELECTED_OPTION, payload: { text:event.target.value, isValid: false }});
      setSearchText("");
    } else if (event.key === "Escape") {
      setSearchText("");
    }
  };

  const processSearchedOptions = useCallback( async () => {
    if (searchText === searchInput.current.value && searchText !== "") {
      const results = await searchFn(searchText);
      dispatch({ type: SET_OPTION_LIST, payload: results });
    }
  },[searchText, searchFn, searchInput]);

  /*
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchText === searchInput.current.value && searchText !== "") {
        const results = await searchFn(searchText);
        dispatch({ type: SET_OPTION_LIST, payload: results });
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText, searchInput, searchFn]);
  */

  useDebounceExecution(200, processSearchedOptions);

  return <Dropdown
    searchFn={searchFn} 
    selectedItems={state.selectedItems} 
    searchText={searchText} 
    setSearchText={setSearchText}  
    keyPressHandler={keyPressHandler} 
    optionList={state.optionList} 
    selectOptionHandler={selectOptionHandler} 
    removeSelectedOptionHandler ={removeSelectedOptionHandler} 
    ref={searchInput}/>

}
export default DropdownContainer;