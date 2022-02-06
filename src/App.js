import Header from './components/header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AboutPage from './Pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/feedbackContext';
const App = () => {
    return ( 
        <FeedbackProvider>
        <Router>
            <Header/>
            <div className="container">
                <Routes>
                <Route exect path="/" element={
                <>
                <FeedbackForm/>
                <FeedbackStats />
                <FeedbackList />
                </>    
                } >
                
                </Route>    
                    <Route path='/about' element={<AboutPage/>} />
                </Routes>
 
                <AboutIconLink/>
            </div>
        </Router>
        </FeedbackProvider>

     );
}
 
export default App;