import { actionCreatorFactory } from '../node_modules/typescript-fsa';

const actionCreator = actionCreatorFactory()

// stateを更新するactionを定義する
export const TextInputActions = {
    // <string>は、与える引数の型。 updateClickCountは何も与えないので、<>つけてない。 ACTION_UPDATE_TEXT_INPUT_VALUEなどは名前。
    updateTextInputValue: actionCreator<string>('ACTIONS_UPDATE_TEXT_INPUT_VALUE'),
    updateSelectedValue: actionCreator<string>('ACTION_UPDATE_SELECTED_VALUE'),
    updateClickCount: actionCreator('ACTION_UPDATE_CLICK_COUNT'),
    updateCheckBoxState: actionCreator<boolean>('ACTION_UPDATE_CHECKBOX')
}

export const RechartsModifyActions = {
    legendMouseEnter: actionCreator<string>('LEGEND_MOUSE_ENTER'),
    legendMouseLeave: actionCreator<string>('LEGEND_MOUSE_LEAVE'),
}