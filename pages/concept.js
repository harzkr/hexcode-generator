import { Typography } from "@mui/material";

export default function Concept() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h4"
        style={{
          marginTop: 20,
          marginBottom: 40,
          color: "darkblue",
        }}
      >
        CONCEPTS AND DISCUSSIONS
      </Typography>
      <ul>
        <li>
          <Typography
            style={{
              marginBottom: 10,
              color: "#333",
            }}
          >
            The application aims at implementing a simple but a robust solution
            to generating hexadecimal codes, 8 digits in length with the
            constrained rules of doing it uniquely, exhaustively and with the
            exceptions as specified in the rules
          </Typography>
        </li>
        <li>
          <Typography>
            To see it in action, click 'Generate' button on the home page, and
            you will see a new code generated every time you click
          </Typography>
        </li>
        <li>
          <Typography>
            You can also call http://localhost:3000/api/generate-code to get a
            new code directly as a response
          </Typography>
        </li>
        <li>
          <Typography>
            The stack uses a simple NextJS setup with a couple of routes and a
            single API endpoint. It uses redis as a cache to store the codes,
            but not in a necessary way Even in app memory can be used for what
            redis is being used here for, it just lends a cleanliness to the
            structure, and hints at the possibility of scaling the app
          </Typography>
        </li>
        <li>
          <Typography>
            The stack uses a simple NextJS setup with a couple of routes and a
            single API endpoint. It uses redis as a cache to store the codes,
            but not in a necessary way Even in app memory can be used for what
            redis is being used here for, it just lends a cleanliness to the
            structure, and hints at the possibility of scaling the app
          </Typography>
        </li>
        <li>
          <Typography>
            I have used a hashmap structure with redis to make the transactions
            as fast as possible
          </Typography>
        </li>
        <li>
          <Typography>
            Implementation wise, on the backend, which can be seen through in
            the api folder, in the generate-code file, we handle our code
            generation processes
          </Typography>
        </li>
        <li>
          <Typography>
            Conceptually, I have divided first the entire range of 8 digit
            hexadecimal numbers into 16 ranges. There I focus mainly on
            generating codes from each range exhaustively
          </Typography>
        </li>
        <li>
          <Typography>
            In every code population run, I focus on generating ~16,000 codes,
            storing them in redis, called in, and which stay in memory and are
            referred to in the response of the API call
          </Typography>
        </li>
        <li>
          <Typography>
            This referencing of these codes is done in a random manner, and the
            changes are made to the in app memory arrays and keys to keep them
            up to date
          </Typography>
        </li>
        <li>
          <Typography>
            Once an array/set gets exhausted, the range is changed on the fly
            for every hexadecimal range, and then the process is repeated
          </Typography>
        </li>
        <li>
          <Typography>
            This way, we ensure, we basically exhaust our possibilities, before
            resetting and starting afresh
          </Typography>
        </li>
        <li>
          <Typography>
            Also before we save the codes in redis, we check them for not being
            in the exceptions list, having an 'odd' sequence or having a
            'repeating' sequence
          </Typography>
        </li>
        <li>
          <Typography>
            By this implementation we ensure as well that all codes generated
            are unique
          </Typography>
        </li>
        <li>
          <Typography>
            Finally to discuss the advantage of such a process over a general
            process which does not proceed with storage is as follows: In the
            process of generating codes directly in a random manner, validating
            them and then sharing them over, one of the big problems arises as
            once the number of codes generated cross a big threshold. For
            example, imagine, if all but one hexadecimal numbers have been
            generated, to get at the final number we would have to generate
            through innumerable possibilities before we can get that number
            which has not been generated yet. Also in a way it will beg to store
            all our outputs and keep comparing what we have to what we generate
            to get the codes uniquely. And with the huge data set (16**8), it
            just becomes more problematic To do so in an efficient manner, doing
            those in small ranges is a good way to tackle all of the numbers in
            an exhaustive manner as well as get the variations as required. The
            picking of the number from the ranges can be modified to many other
            patterns to randomise as one would want, but in general it will
            serve the purpose efficiently of generating the codes uniquely and
            exhaustively
          </Typography>
        </li>
        <li>
          <Typography>
            Finally, structure, preview and presentation wise I thought doing it
            in this NextJS manner was a good way to go about it. It is a simple
            stack, and can be easily extended to a more complex one
          </Typography>
        </li>
      </ul>
    </div>
  );
}
