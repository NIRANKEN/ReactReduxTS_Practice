import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActionArea from "@material-ui/core/CardActionArea";
//import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: "12px",
    margin: "16px"
    // ここにスタイルを追加する
  }
});

export default function ChartCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          タイトル
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ここにチャート本体を突っ込みます
        </Typography>
      </CardContent>
    </Card>
  );
}