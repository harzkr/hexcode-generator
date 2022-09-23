import { Typography } from "@mui/material";

export default function Concept() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Concepts and Discussions
      </Typography>
      <ul>
        <li>
          <Typography>
            The application aims at implementing a simple but a robust solution to generating hexadecimal codes, 8 digits in length
            with the constrained rules of doing it uniquely, exhaustively and with the exceptions as specified in the rules
          </Typography>
        </li>
        <li>
          <Typography>
            To see it in action, click 'Generate' button on the home page, and you will see a new code generated every time you click
          </Typography>
        </li>
        <li>
          <Typography>
            You can also call http://localhost:3000/api/generate-code to get a new code directly as a response
          </Typography>
        </li>
        <li>
          <Typography>
            The stack uses a simple NextJS setup with a couple of routes and a single API endpoint. It uses redis as a cache to store the codes, but not in a necessary way
            Even in app memory can be used for what redis is being used here for, it just lends a cleanliness to the structure, and hints at the possibility of scaling the app
          </Typography>
        </li>
        <li>
          <Typography>
            The stack uses a simple NextJS setup with a couple of routes and a single API endpoint. It uses redis as a cache to store the codes, but not in a necessary way
            Even in app memory can be used for what redis is being used here for, it just lends a cleanliness to the structure, and hints at the possibility of scaling the app
          </Typography>
        </li>
        <li>
          <Typography>
            On the backend, which can be seen through in the api folder, in the generate-code file, we handle our code generation processes
          </Typography>
        </li>
        <li>
          <Typography>
            Conceptually, I have divided first the entire range of 8 digit hexadecimal numbers into 16 ranges. There I focus mainly on generating codes from each range exhaustively
          </Typography>
        </li>
        <li>
          <Typography>
            In every code population run, I focus on generating ~16,000 codes, which stay in memory and are referred to and responded with in every call
          </Typography>
        </li>
        <li>
          <Typography>
            This reference is done in a random manner, and the effective changes are made to the in app memory arrays and keys to keep them up to date
          </Typography>
        </li>
        <li>
          <Typography>
            Once an array/set gets exhausted, the range is changed on the fly for every hexadecimal range, and then the process is repeated
          </Typography>
        </li>
        <li>
          <Typography>
            This way, we ensure, we basically exhaust our possibilities, before resetting and starting afresh
          </Typography>
        </li>
        <li>
          <Typography>
            Also before we save the codes in redis, we check them for not being in the exceptions list, having an 'odd' sequence or having a 'repeating' sequence
          </Typography>
        </li>
        <li>
            <Typography>
                By this implementation we ensure as well that all codes generated are unique
            </Typography>
        </li>
      </ul>
    </div>
  );
}
