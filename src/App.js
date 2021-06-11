import Weather from "./components/Weather";
import {Accordion, Container,Grid} from '@material-ui/core'
import Practice from "./components/Practice";

const items=[
  {
    title:'Web development',
    content:'Able to create and design website ',
  },
  {
    title:'Python',
    content:'Able to create and design website ',
  },
  {
    title:'Java',
    content:'Able to create and design website ',
  },

]
function App() {
  return (
    <>
    {/* <Container>
      <Grid xs={12} md={12}>
    <Weather/>
    </Grid>
    </Container> */}

   <Practice item={items}/>
     
    </>
  );
}

export default App;
