import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { TextInputActions } from './actions';

export interface State {
    inputValue: string
    selectedValue: string
    clickCount: number
}

export const initialState: State = {
    inputValue: '',
    selectedValue: '',
    clickCount: 0
}

export const Reducer = reducerWithInitialState(initialState)
    // updateTextInputValueはstateのinputValueを、引数のinputValueに更新します
    .case(TextInputActions.updateTextInputValue, (state, inputValue) => {
        return { ...state, inputValue }
    })

    // updateSelectedValueはstateのselectedValueを、引数のselectedValueに更新します
    .case(TextInputActions.updateSelectedValue, (state, selectedValue) => {
        return { ...state, selectedValue }
    })

    // updateClickCountはstateのclickCountを、stateのclickCount+1した値に更新します
    .case(TextInputActions.updateClickCount, (state) => {
        return { ...state, clickCount: state.clickCount + 1 }
    })