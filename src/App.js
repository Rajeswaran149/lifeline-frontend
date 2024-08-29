
import EmergencyAlert from "./Home/pages/emergencyAlert";
import HomePage from "./Home/pages/homePage";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import QueryChatbot from "./Home/pages/queryChatbot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/emergency-alert" element= {<EmergencyAlert/>}/>
        <Route path="/query-chatbot" element= {<QueryChatbot/>}/>

      </Routes>
    </Router>
  );
}

export default App;
