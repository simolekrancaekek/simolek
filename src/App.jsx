import Container from './Components/Container';
import Navbar from './components/navbar/Navbar';
import Footer from './Layouts/Footer';

import Index from './Routes/Index';

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Index />
            </Container>
            <Footer></Footer>
        </>
    );
}

export default App;
