import { Action } from 'redux';
import { LegendModifyActions } from '../../../modules/legend';

export default class ActionDispatcher {
    constructor(private dispatch: (action: Action) => void) {}
    public mouseEnterToLegend(dataKey: string) {
        this.dispatch(LegendModifyActions.legendMouseEnter(dataKey));
    }

    public mouseLeaveFromLegend(dataKey: string) {
        this.dispatch(LegendModifyActions.legendMouseLeave(dataKey));
    }

    public selectLegend(dataKey: string) {
        this.dispatch(LegendModifyActions.legendSelectElement(dataKey));
    }
}