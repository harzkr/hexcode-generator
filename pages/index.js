import styles from '../styles/Home.module.css'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <div className={styles.container}>
      <Typography variant="h3" component="h1" gutterBottom>
        Hexadecimal Code Generator
      </Typography>
    </div>
  )
}
