import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

export default function TrelloCard({ text }) {
  return (
    <Card style={styles.cardContainer}>
      <Typography gutterBottom>{text}</Typography>
    </Card>
  );
}

const styles = {
  cardContainer: {
    marginBottom: 8,
    padding: 10
  }
};
