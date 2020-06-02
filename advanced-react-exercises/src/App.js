import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
import LiftingStateExercises from './01_01_lifting_state/LiftingStateExercises';
import PassingDataUpExercises from './01_02_pass_data_up/PassingDataUpExercises';
import Articles from './news/Articles';
import Article from './news/Article';

function App() {
  return (
    <div className="mx-auto" style={{width: 800}}>
      <h1 className="mb-4 jumbotron">Advanced React Exercises</h1>
      <Router>
        <Route exact path="/news" component={ Articles }/>
        <Route path="/news/:id" render={ ({ match }) => (
                <Article 
                    id={ +match.params.id }
                />
        )}/>
        <Route path="/01-01-lifting-state" component={ LiftingStateExercises } />
        <Route path="/01-02-passing-data-up" component={ PassingDataUpExercises } />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
