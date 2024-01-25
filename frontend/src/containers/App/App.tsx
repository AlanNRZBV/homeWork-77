import {Box, Container, Typography} from "@mui/material";
import MessagesForm from "../../components/MessageFrom/MessagesForm.tsx";

function App() {

  return (
    <>
      <Container>
        <Box>
          <Typography>test</Typography>
        </Box>
        <Box>
          <MessagesForm/>
        </Box>
      </Container>
    </>
  )
}

export default App
