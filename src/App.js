import React from 'react'
import DateTime from './components/DateTime';
import NavBar from './components/NavBar';
import News from './components/News';
// import NewsItem from './components/NewsItem';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = ()=> {
  const pageSize = 6;
  const apikey = process.env.REACT_APP_API_KEY
    document.body.style.backgroundColor = "rgb(162 162 168 / 12%)";
    return (
      <div>
        <Router>
          <NavBar/>
          <DateTime/>
          <Routes>
            <Route exact path="/" element={<News apikey={apikey} key="general" country="in" pageSize={pageSize} category="general"/>}/>
            <Route exact path="/general" element={<News apikey={apikey} key="general" country="in" pageSize={pageSize} category="general"/>}/>
            <Route exact path="/business" element={<News apikey={apikey} key="business" country="in" pageSize={pageSize} category="business"/>}/>
            <Route exact path="/entertainment" element={<News apikey={apikey} key="entertainment" country="in" pageSize={pageSize} category="entertainment"/>}/>
            <Route exact path="/health" element={<News apikey={apikey} key="health" country="in" pageSize={pageSize} category="health"/>}/>
            <Route exact path="/science" element={<News apikey={apikey} key="science" country="in" pageSize={pageSize} category="science"/>}/>
            <Route exact path="/sports" element={<News apikey={apikey} key="sports" country="in" pageSize={pageSize} category="sports"/>}/>
            <Route exact path="/technology" element={<News apikey={apikey} key="technology" country="in" pageSize={pageSize} category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App
