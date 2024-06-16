// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './pages/AnimatedRoutes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
