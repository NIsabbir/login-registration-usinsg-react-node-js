import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter Basename={window.location.pathname || ''}>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
