
import './App.css';
import Header from './Header';
import Codester from './Codester';
import Techster from './Techster';
import About from './About';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fang from './Fang';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/codester' component={Codester} />
          <Route path='/fang'  ><div className="course"><div>

            <iframe width="852" height="480" src="https://www.youtube.com/embed/-SVTr8FzvRI?list=PLhzj6mgCNIeAyrFsWQqaJ3m6n_x-U1DRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            <Fang />

          </div></Route>
          <Route path='/fang2'  ><div className="course"><div>

            <iframe width="852" height="480" src="https://www.youtube.com/embed/FEVgZ5S4Oh8?list=PLhzj6mgCNIeAyrFsWQqaJ3m6n_x-U1DRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            <Fang />

          </div></Route>
          <Route path='/fang3'  ><div className="course"><div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/7xCEkqRXaPE?list=PLhzj6mgCNIeAyrFsWQqaJ3m6n_x-U1DRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            <Fang />

          </div></Route>
          <Route path='/fang4'  ><div className="course"><div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/3yIqjx_EFnY?list=PLhzj6mgCNIeAyrFsWQqaJ3m6n_x-U1DRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </div>

            <Fang />

          </div></Route>
          <Route path='/fang5'  ><div className="course"><div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/BeOzCC7OCNQ?list=PLhzj6mgCNIeAyrFsWQqaJ3m6n_x-U1DRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                </div>

            <Fang />

          </div></Route>
          <Route path='/fang6'  ><div className="course"><div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/NvVi7DGdMUc?list=PLhzj6mgCNIeAyrFsWQqaJ3m6n_x-U1DRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            <Fang />

          </div>
          </Route>
          <Route path='/fang7'  ><div className="course"><div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/4XpicqgW9uo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            <Fang />

          </div></Route>
          <Route path='/fang8'  ><div className="course">

            <div>
              <iframe width="852" height="480" src="https://www.youtube.com/embed/Is_UOy7WZWY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            <Fang />

          </div></Route>
          <Route path='/fang9'  ><div className="course"><div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/x_LfC9nUE0U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            <Fang />

          </div></Route>
          <Route path='/fang10'  ><div className="course"><div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/kkC4SqMrXRA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            <Fang />

          </div></Route>
          <Route path='/fang11'  ><div className="course"> <div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/Rphvad8Dil0?list=PLhzj6mgCNIeAyrFsWQqaJ3m6n_x-U1DRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            <Fang />

          </div></Route>
          <Route path='/fang12'  ><div className="course"><div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/jiBk8UGIC7E?list=PLhzj6mgCNIeAyrFsWQqaJ3m6n_x-U1DRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            <Fang />

          </div></Route>
          <Route path='/fang13'  ><div className="course"><div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/hrsnBCcMwqY?list=PLhzj6mgCNIeAyrFsWQqaJ3m6n_x-U1DRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            <Fang />

          </div></Route>
          <Route path='/fang14'  ><div className="course"><div>
            <iframe width="852" height="480" src="https://www.youtube.com/embed/IQMB93GLTBQ?list=PLhzj6mgCNIeAyrFsWQqaJ3m6n_x-U1DRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Fang />
          </div>
          </div></Route>
          <Route path='/techster' component={Techster} />
          <Route path='/about' component={About} />
          {/*  <Route path='/fang2' component={Fang2} />
          <Route path='/fang3' component={Fang3} />
          <Route path='/fang4' component={Fang4} />
          <Route path='/fang5' component={Fang5} />
          <Route path='/fang6' component={Fang6} />
          <Route path='/fang7' component={Fang7} />
          <Route path='/fang8' component={Fang8} />
          <Route path='/fang9' component={Fang9} />
          <Route path='/fang10' component={Fang10} />
          <Route path='/fang11' component={Fang11} />
          <Route path='/fang12' component={Fang12} />
          <Route path='/fang13' component={Fang13} />
          <Route path='/fang14' component={Fang14} />*/}
        </Switch>

      </Router >
    </div >
  );

}

export default App;
