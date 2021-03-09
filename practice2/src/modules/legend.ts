import { actionCreatorFactory } from '../../node_modules/typescript-fsa';
import { reducerWithInitialState } from '../../node_modules/typescript-fsa-reducers';
import { RechartsProps } from '../RechartsProps';

const actionCreator = actionCreatorFactory();

export const LegendModifyActions = {
    legendMouseEnter: actionCreator<string>('LEGEND_MOUSE_ENTER'),
    legendMouseLeave: actionCreator<string>('LEGEND_MOUSE_LEAVE'),
    legendSelectElement: actionCreator<string>('LEGEND_SELECT_ELEMENT'),
}

export interface RechartsParams {
    rechartsProps: Array<RechartsProps>
}

export const initialState: RechartsParams = {
    // 本来データは取ってくる
    rechartsProps: [
        { key: '総数', color: '#7fdaec', type: 'bar', yAxisId: 'left', display: true, isHover: false},
        { key: 'hoge数', color: '#ecbde3', type: 'bar', yAxisId: 'left', display: true, isHover: false},
        { key: 'hoge率', color: '#7a5c9a', type: 'line', yAxisId: 'right', display: true, isHover: false},
        { key: 'fuga率', color: '#973b50', type: 'line', yAxisId: 'right', display: true, isHover: false},
    ]
}

export const Reducer = reducerWithInitialState(initialState)
    .case(LegendModifyActions.legendMouseEnter, (state, dataKey) => {
        // TODO: この辺もうちょいうまいやり方ある気がする
        const modifiedRechartsProps = state.rechartsProps.map((v) => {
            v.isHover = dataKey === v.key; 
            return v;
        });
        return { ...state, rechartsProps: modifiedRechartsProps}
    })

    .case(LegendModifyActions.legendMouseLeave, (state, dataKey) => {
        // TODO: この辺もうちょいうまいやり方ある気がする
        const modifiedRechartsProps = state.rechartsProps.map((v) => {
            v.isHover = false; 
            return v;
        }); 
        return { ...state, rechartsProps: modifiedRechartsProps}
    })

    .case(LegendModifyActions.legendSelectElement, (state, dataKey) => {
        // TODO: この辺もうちょいうまいやり方ある気がする
        const modifiedRechartsProps = state.rechartsProps.map((v) => {
            if (v.key === dataKey) {
                v.display = !v.display
                v.isHover = false;
            }
            return v;
        });
        return { ...state, rechartsProps: modifiedRechartsProps}
    })