```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses `react-router-dom` v6.  The issue occurs when a route's path is defined ambiguously, leading to unexpected routing behavior. For example, if you have both `/about` and `/about/contact`, requests to `/about` might incorrectly resolve to `/about/contact` if the latter is processed first.