import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Simple placeholder pages so the router works
function Home() {
  return <h1 style={{ padding: '2rem' }}>Home Page is running!</h1>;
}

function About() {
  return <h1 style={{ padding: '2rem' }}>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;