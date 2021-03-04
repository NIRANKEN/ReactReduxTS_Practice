import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RechartsModifyActions, TextInputActions } from "../actions";
import { TopPageForm } from "../components/organisms/TopPageForm";
import { AppState } from "../store";

export interface TopPageHandler {
    // handler関数を定義する。changeValueとSelectValueには、string引数与える, returnはない. (Componentでつかう関数をhandlerとして定義する)
    handleOnChangeValue(value: string): void
    handleOnSelectValue(value: string): void
    handleOnClick(): void
    handleOnCheckBox(checked: boolean): void
    handleRechartsLegendMouseEnter(dataKey: string): void
    handleRechartsLegendMouseLeave(dataKey: string): void
    handleRechartsLegendSelectElement(dataKey: string): void
}

// アプリケーション全体のstateを基に、TopPageFormにわたすpropsをつくる
const mapStateToProps = (appState: AppState) => {
    return {
        inputValue: appState.state.inputValue,
        selectedValue: appState.state.selectedValue,
        clickCount: appState.state.clickCount,
        checkedState: appState.state.checkedState,
        rechartsProps: appState.state.rechartsProps
    }
}

// handler関数として、Actionを実行する(reducerでstateの変更を行う)
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // handleOnChangeValue呼ばれたらすること一覧(Actionですることの詳細はreducer.ts参照)
        handleOnChangeValue: (value: string) => { 
            dispatch(TextInputActions.updateTextInputValue(value)) 
            // dispatch(TextInputActions.updateClickCount()) 
        },

        // handleOnSelectValue呼ばれたらすること一覧
        handleOnSelectValue: (value: string) => { 
            dispatch(TextInputActions.updateSelectedValue(value))
            // dispatch(TextInputActions.updateClickCount()) 
        },

        // handleOnClick呼ばれたらすること一覧
        handleOnClick: () => { 
            dispatch(TextInputActions.updateClickCount()) 
        },

        handleOnCheckBox: (checked: boolean) => {
            dispatch(TextInputActions.updateCheckBoxState(checked))
        },

        handleRechartsLegendMouseEnter: (dataKey: string) => {
            dispatch(RechartsModifyActions.legendMouseEnter(dataKey))
        },

        handleRechartsLegendMouseLeave: (dataKey: string) => {
            dispatch(RechartsModifyActions.legendMouseLeave(dataKey))
        },

        handleRechartsLegendSelectElement: (dataKey: string) => {
            dispatch(RechartsModifyActions.legendSelectElement(dataKey))
        },
    }
}

// connectするコンポーネント(= ここではTopPageForm)をコンテナコンポーネントと言う
// connectされたコンポーネントはpropsでstateとaction creator関数(= ここではTopPageHandlerで定義している関数)を使用できる
export default connect(mapStateToProps, mapDispatchToProps)(TopPageForm)