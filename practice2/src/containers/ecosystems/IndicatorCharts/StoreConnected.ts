import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import { AppState } from "../../../store/store";
import ActionDispatcher from "./ActionDispatcher"
import Component from "./Component";

// アプリケーション全体のstateを基に、TopPageFormにわたすpropsをつくる
const mapStateToProps = (appState: AppState) => {
    return {
        rechartsProps: appState.rechartsParams.rechartsProps
    }
}

// handler関数として、Actionを実行する(reducerでstateの変更を行う)
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        actions: new ActionDispatcher(dispatch)
    };
}

// connectするコンポーネント(= ここではTopPageForm)をコンテナコンポーネントと言う
// connectされたコンポーネントはpropsでstateとaction creator関数(= ここではTopPageHandlerで定義している関数)を使用できる
export default connect(mapStateToProps, mapDispatchToProps)(Component)