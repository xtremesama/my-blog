import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";


class App extends Component {
    render () {
        return (
            <Router>
                <div className="App">
                    <div id="page-body">
                        <Route path="/" component={HomePage} exact />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/articles-list" component={ArticlesList} />
                        <Route path="/article" component={ArticlePage} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
