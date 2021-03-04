import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { RechartsModifyActions, TextInputActions } from './actions';
import { RechartsProps } from './RechartsProps';

export interface State {
    inputValue: string
    selectedValue: string
    clickCount: number
    checkedState: boolean,
    rechartsProps: Array<RechartsProps>
}

export const initialState: State = {
    inputValue: '',
    selectedValue: '',
    clickCount: 0,
    checkedState: false,

    // 本来データは取ってくる
    rechartsProps: [
        { key: '総社員数', color: '#7fdaec', type: 'bar', yAxisId: 'left', display: true, isHover: false},
        { key: '管理職者人数', color: '#ecbde3', type: 'bar', yAxisId: 'left', display: true, isHover: false},
        { key: '管理職者比率', color: '#7a5c9a', type: 'line', yAxisId: 'right', display: true, isHover: false},
    ]
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

    .case(TextInputActions.updateCheckBoxState, (state, checkedState) => {
        return { ...state, checkedState }
    })

    .case(RechartsModifyActions.legendMouseEnter, (state, dataKey) => {
        const modifiedRechartsProps = state.rechartsProps.map((v) => {
            v.isHover = dataKey === v.key; 
            return v;
        });
        return { ...state, rechartsProps: modifiedRechartsProps}
    })

    .case(RechartsModifyActions.legendMouseLeave, (state, dataKey) => {
        const modifiedRechartsProps = state.rechartsProps.map((v) => {
            v.isHover = false; 
            return v;
        }); 
        return { ...state, rechartsProps: modifiedRechartsProps}
    })