import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import AppRoutes from './routes/AppRoutes';

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Header title="Semesterplaneraren" />
        <AppRoutes />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
