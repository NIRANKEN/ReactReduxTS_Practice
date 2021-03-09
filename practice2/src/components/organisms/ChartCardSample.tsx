import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { RechartsSample } from "../atoms/RechartsSample";
import { RechartsProps } from "../../RechartsProps";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 800,
    height: 400,
    borderRadius: "12px",
    margin: "16px",

    // ここにスタイルを追加する
  }
});

interface OwnProps {
    rechartsProps: Array<RechartsProps>
    handleRechartsLegendMouseEnter(dataKey: string): void
    handleRechartsLegendMouseLeave(dataKey: string): void
    handleRechartsLegendSelectElement(dataKey: string): void
}

type Props =  OwnProps;

export const ChartCardSample : React.FC<Props> = (props) => {
    // TypeごとにチャートのComponent(例ではRechartsSample)を返す
    const classes = useStyles();
    return (
        <Card className={classes.root} >
            <CardContent>
                <Grid container alignItems="center" alignContent="center" direction="column">
                    <Grid item>
                        <Typography gutterBottom variant="h5" component="h2">
                            Recharts Sample
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Box overflow="hidden" padding="16px" height="320px" width="800px" marginBottom="24px">
                            <RechartsSample chartProps={props.rechartsProps} handleLegendMouseEnter={props.handleRechartsLegendMouseEnter} handleLegendMouseLeave={props.handleRechartsLegendMouseLeave} handleLegendSelectElement={props.handleRechartsLegendSelectElement} />
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}