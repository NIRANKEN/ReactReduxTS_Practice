import React from 'react'
import { TextInput } from '../atoms/TextInput';
import { TopPageHandler } from '../../containers/TopPageContainer';
import { RadioInput } from '../atoms/RadioInput';
import { ShowState } from '../atoms/ShowState';
import { SubmitButton } from '../atoms/SubmitButton';
import { Box, Button } from '@material-ui/core';
import ChartCard from '../atoms/ChartCard';
import { RechartsSample } from '../atoms/RechartsSample';
import ReactChartJs2Sample from '../atoms/ReactChartJs2Sample';

// Containerに定義されているpropsへの変換はココを意識する
interface OwnProps {
    inputValue: string
    selectedValue: string
    clickCount: number
}

type Props =  OwnProps & TopPageHandler
export class TopPageForm extends React.Component<Props> {
    render(){
        return(
            <React.Fragment>
                <Box margin="64px">
                    <h3>・Init React-Redux-TypeScript Elements</h3>
                    <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px">
                        <TextInput title='入力' inputValue={this.props.inputValue} onChangeValue={this.props.handleOnChangeValue}/>
                        <RadioInput title='ラジオ' selectedValue={this.props.selectedValue} onChangeValue={this.props.handleOnSelectValue}/>
                        <SubmitButton title='Click me' onClick={this.props.handleOnClick}/>
                        <ShowState inputValue={this.props.inputValue} selectedValue={this.props.selectedValue} clickCount={this.props.clickCount}/>
                    </Box>

                    <h3>・Material-UI Button Area</h3>
                    <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px">
                        <Button variant="contained" color="primary">primary</Button>
                        <Button variant="contained" color="secondary">secondary</Button>
                        <Button variant="contained" color="inherit">inherit</Button>
                        <Button variant="contained" color="default">default</Button>
                        <Button variant="contained">no color</Button>
                    </Box>

                    <h3>・Card Component</h3>
                    <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px">
                        <ChartCard />
                        <ChartCard />
                        <ChartCard />
                    </Box>

                    <h3>・Status Chip</h3>
                    <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px">
                    </Box>

                    <h3>・Recharts Sample</h3>
                    <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px" height="360px">
                        <RechartsSample />
                    </Box>

                    <h3>・ReactChartJs2 Sample</h3>
                    <Box border-radius="4px" border="2px solid blue" overflow="hidden" padding="16px" >
                        <ReactChartJs2Sample />
                    </Box>
                </Box>
            </React.Fragment>
        )
    }

}