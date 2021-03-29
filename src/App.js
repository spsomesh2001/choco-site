import React from 'react'
import { Footer, Header, IntroSection, MainSection } from './components/index';
import { GlobalContainer} from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <GlobalContainer></GlobalContainer>
      <Header></Header>
      <IntroSection></IntroSection>
      <MainSection></MainSection>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
