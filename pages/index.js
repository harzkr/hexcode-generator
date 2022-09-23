import styles from "../styles/Home.module.css";
import { Typography, Button, Grid, Paper } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Typography variant="h3" component="h1" gutterBottom>
        Hexadecimal Code Generator
      </Typography>

      <div
        style={{
          display: "flex",
          marginTop: "2rem",
        }}
      >
        <Typography
          style={{
            marginRight: "1rem",
            marginTop: "1rem",
          }}
          variant="h2"
        >
          0x
        </Typography>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={0.5}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 100,
                    width: 100,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>

      <div>
        <Button variant="contained">
          <Typography variant="h5">Generate</Typography>
        </Button>
      </div>
    </div>
  );
}
