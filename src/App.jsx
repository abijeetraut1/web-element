import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Designs from './pages/Designs/Designs/Designs';
import { Provider } from 'react-redux';
import store from './reduxFunctions/Store';

function App() {
  return (
    <Provider store={store}>
      <section className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/design" exact element={<Designs />} />
          </Routes>
        </BrowserRouter>
      </section>
    </Provider>
  );
}

export default App;