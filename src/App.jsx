import { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/sports" element={<News pagesize={8} country="us" category="sports" />} />
            <Route path="/entertainment" element={<News pagesize={8} country="us" category="entertainment" />} />
            <Route path="/health" element={<News pagesize={8} country="us" category="health" />} />
            <Route path="/general" element={<News pagesize={8} country="us" category="general" />} />
            <Route path="/technology" element={<News pagesize={8} country="us" category="technology" />} />
            <Route path="/business" element={<News pagesize={8} country="us" category="business" />} />
            <Route path="/science" element={<News pagesize={8} country="us" category="science" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
