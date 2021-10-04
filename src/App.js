
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HomeCom from './components/HomeCom/HomeCom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          {/* call home page */}
          <Route path="/home">

            <HomeCom></HomeCom>
            <Home></Home>

          </Route>
          {/* call home page */}

          {/* call home page */}
          <Route exact path="/">

            <HomeCom></HomeCom>
            <Home></Home>

          </Route>
          {/* call home page */}

          {/* call service  page */}
          <Route exact path="/services">

            <Services></Services>

          </Route>

          {/* call service  page */}

          {/* call about  page */}
          <Route exact path="/about">

            <About></About>

          </Route>

          {/* call about page */}


          {/* call contact-us page */}
          <Route path="/contact-us">

            <ContactUs></ContactUs>

          </Route>

          {/* call not found  page*/}
          <Route path="*">

            <NotFound></NotFound>

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>


    </div>
  );
}

export default App;
