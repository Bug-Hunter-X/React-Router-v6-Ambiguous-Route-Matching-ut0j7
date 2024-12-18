```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/contact" element={<AboutContact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This corrected code prioritizes the more specific route `/about/contact` before `/about`.  The order of routes in the `<Routes>` component matters in resolving ambiguous paths.  Routes are matched in the order they are defined.  This example also demonstrates better structure where nested routes are handled with more specificity.