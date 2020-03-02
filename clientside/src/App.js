import React from 'react';
import UploadFile from './components/UploadFile';
import './App.css';

const App = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
       React File Upload
    </h4>

    <UploadFile />
  </div>
);

export default App;
