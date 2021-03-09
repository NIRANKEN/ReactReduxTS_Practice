import { combineReducers, createStore, compose, applyMiddleware} from 'redux'
import { RechartsParams, Reducer } from '../modules/legend';
import thunk from "redux-thunk"

// ここにアプリケーションの状態を記載する
export type AppState = {
  rechartsParams: RechartsParams
}

// これわかってない
const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// storeをつくる。保持しているstateをReducerと関連付け？？
const store = createStore(
    combineReducers<AppState>({
      rechartsParams : Reducer
    }),
    storeEnhancers(applyMiddleware(thunk))
)

export default store