import React from "react";
import styles from "../styles/Home.module.css";
import { Typography, Button, Grid, Paper } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const [code, setCode] = React.useState("00000000");

  const generateNewCode = () => {
    fetch("/api/generate-code")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setCode(data.code.toUpperCase());
      });
  };

  return (
    <div className={styles.container}>
      <Button className={styles.linkButton}>
        <Link href="/concept">CONCEPTS</Link>
      </Button>
      <Typography variant="h3" component="h1" gutterBottom>
        Hexadecimal Code Generator
      </Typography>

      <div className={styles.codeContainer}>
        <Typography variant="h2" className={styles.prepender}>
          0x
        </Typography>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={0.5}>
            {code.split("").map((value, index) => (
              <Grid key={index} item>
                <Paper
                  sx={{
                    height: 100,
                    width: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    style={{
                      textAlign: "center",
                    }}
                    variant="h2"
                  >
                    {value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>

      <div className={styles.marginBuffer}>
        <Button variant="contained" onClick={() => generateNewCode()}>
          <Typography variant="h6">Generate</Typography>
        </Button>
      </div>

      <div>
        <Typography variant="h6" className={styles.instructions}>
          Every time the program runs it will emit one 8-digit hexadecimal code;
          {"\n"}
          It will emit every possible code before repeating;{"\n"} It will not
          print "odd-looking" codes such as 0xAAAAAAAA or 0x01234567{"\n"} or
          any commonly used words, phrases, or hexspeak such as 0xDEADBEEF;
          {"\n"} Codes will be emitted in apparently random order;
        </Typography>
      </div>
    </div>
  );
}
