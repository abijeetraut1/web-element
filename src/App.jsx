import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Design from './pages/Design/Design';
import { Provider as ReduxProvider } from 'react-redux';
import store from './reduxFunctions/Store';
import "./App.css";

function App() {
  return (
    <ReduxProvider store={store}>
        <section className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/design" element={<Design />} />
            </Routes>
          </BrowserRouter>
        </section>
    </ReduxProvider>
  );
}

export default App;
