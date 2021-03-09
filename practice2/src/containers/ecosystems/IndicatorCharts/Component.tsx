import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { ChartCardSample } from '../../../components/organisms/ChartCardSample'
import { RechartsProps } from '../../../RechartsProps'
import ActionDispatcher from './ActionDispatcher'

// Containerに定義されているpropsへの変換はココを意識する
interface OwnProps {
    actions: ActionDispatcher
    rechartsProps: Array<RechartsProps>
}

// TODO: styleとか、共通化できるところは共通にしたい.
type Props =  OwnProps;

export class IndicatorCharts extends React.Component<Props> {
    render(){
        return(
            <React.Fragment>
                <Box margin="64px">
                    <Grid container spacing={5}>
                        <Grid item>
                            <ChartCardSample rechartsProps={this.props.rechartsProps} handleRechartsLegendMouseEnter={this.props.actions.mouseEnterToLegend} handleRechartsLegendMouseLeave={this.props.actions.mouseLeaveFromLegend} handleRechartsLegendSelectElement={this.props.actions.selectLegend} />
                        </Grid>
                        <Grid item>
                            <ChartCardSample rechartsProps={this.props.rechartsProps} handleRechartsLegendMouseEnter={this.props.actions.mouseEnterToLegend} handleRechartsLegendMouseLeave={this.props.actions.mouseLeaveFromLegend} handleRechartsLegendSelectElement={this.props.actions.selectLegend} />
                        </Grid>
                        <Grid item>
                            <ChartCardSample rechartsProps={this.props.rechartsProps} handleRechartsLegendMouseEnter={this.props.actions.mouseEnterToLegend} handleRechartsLegendMouseLeave={this.props.actions.mouseLeaveFromLegend} handleRechartsLegendSelectElement={this.props.actions.selectLegend} />
                        </Grid>
                    </Grid>
                </Box>
            </React.Fragment>
        )
    }
    // <RechartsSample chartProps={this.props.rechartsProps} handleLegendMouseEnter={this.props.handleRechartsLegendMouseEnter} handleLegendMouseLeave={this.props.handleRechartsLegendMouseLeave} handleLegendSelectElement={this.props.handleRechartsLegendSelectElement} />
}

export default IndicatorCharts;