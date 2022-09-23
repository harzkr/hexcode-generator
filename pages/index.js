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
          marginTop: "4rem",
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

      <div
        style={{
          marginTop: "4rem",
        }}
      >
        <Button variant="contained">
          <Typography variant="h6">Generate</Typography>
        </Button>
      </div>

      <div>
        <Typography
          variant="h6"
          style={{
            marginTop: "4rem",
            whiteSpace: "pre-line",
            textAlign: "center",
          }}
        >
          Every time the program runs it will emit one 8-digit hexadecimal code;{'\n'}
          It will emit every possible code before repeating;{'\n'} It will not print
          "odd-looking" codes such as 0xAAAAAAAA or 0x01234567{'\n'} or any commonly
          used words, phrases, or hexspeak such as 0xDEADBEEF;{'\n'} Codes will be
          emitted in apparently random order.
        </Typography>
      </div>
    </div>
  );
}
