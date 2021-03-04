import React from 'react'
import { TextInput } from '../atoms/TextInput';
import { TopPageHandler } from '../../containers/TopPageContainer';
import { RadioInput } from '../atoms/RadioInput';
import { ShowState } from '../atoms/ShowState';
import { SubmitButton } from '../atoms/SubmitButton';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import ChartCard from '../atoms/ChartCard';
import { RechartsSample } from '../atoms/RechartsSample';
import ReactChartJs2Sample from '../atoms/ReactChartJs2Sample';
import ApexChartsSample from '../atoms/ApexChartsSample';
import CheckBox from '../atoms/CheckBox';
import { RechartsProps } from '../../RechartsProps';

// Containerに定義されているpropsへの変換はココを意識する
interface OwnProps {
    inputValue: string
    selectedValue: string
    clickCount: number,
    checkedState: boolean,
    rechartsProps: Array<RechartsProps>
}

// TODO: styleとか、共通化できるところは共通にしたい.
type Props =  OwnProps & TopPageHandler
export class TopPageForm extends React.Component<Props> {
    render(){
        return(
            <React.Fragment>
                <Box margin="64px">
                    <Typography variant="h4">・Init React-Redux-TypeScript Elements</Typography>
                    <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px" marginBottom="24px">
                        <TextInput title='入力' inputValue={this.props.inputValue} onChangeValue={this.props.handleOnChangeValue}/>
                        <RadioInput title='ラジオ' selectedValue={this.props.selectedValue} onChangeValue={this.props.handleOnSelectValue}/>
                        <SubmitButton title='Click me' onClick={this.props.handleOnClick}/>
                        <ShowState inputValue={this.props.inputValue} selectedValue={this.props.selectedValue} clickCount={this.props.clickCount}/>
                    </Box>

                    <Typography variant="h4">・Material-UI Button Area</Typography>
                    <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px" marginBottom="24px">
                        <Grid container spacing={1}>
                            <Grid item>
                                <Button variant="contained" color="primary">primary</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="secondary">secondary</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="inherit">inherit</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="default">default</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained">no color</Button>
                            </Grid>
                        </Grid>
                    </Box>

                    <Typography variant="h4">・Card Components</Typography>
                    <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px" marginBottom="24px">
                        <ChartCard />
                        <ChartCard />
                        <ChartCard />
                    </Box>

                    <Typography variant="h4">・CheckBox</Typography>
                    <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px" marginBottom="24px">
                        <CheckBox checkState={this.props.checkedState} handleOnChange={this.props.handleOnCheckBox}/>
                    </Box>

                    <Grid container spacing={5}>
                        <Grid item>
                            <Typography variant="h4">・Recharts Sample</Typography>
                            <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px" height="400px" width="800px" marginBottom="24px">
                                <RechartsSample chartProps={this.props.rechartsProps} handleLegendMouseEnter={this.props.handleRechartsLegendMouseEnter} handleLegendMouseLeave= {this.props.handleRechartsLegendMouseLeave} selectBar={()=>{}} />
                            </Box>
                        </Grid>

                        <Grid item>
                            <Typography variant="h4">・ReactChartJs2 Sample</Typography>
                            <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px" height="400px" width="800px" marginBottom="24px">
                                <ReactChartJs2Sample />
                            </Box>
                        </Grid>

                        <Grid item>
                            <Typography variant="h4">・ApexCharts Sample</Typography>
                            <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px" height="400px" width="800px" marginBottom="24px">
                                <ApexChartsSample />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </React.Fragment>
        )
    }

}