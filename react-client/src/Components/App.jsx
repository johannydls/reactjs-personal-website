import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

//Components
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import AboutPage from './AboutPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <div className="content">
                        <Route name="home" exact path="/" component={HomePage} />
                        <Route name="about" exact path="/about" component={AboutPage} />
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;