import './App.css';
import React from 'react';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App p-6 h-screen bg-green-900">
      <h1 class="text-3xl font-bold text-white">Lista de Produtos</h1>
      <ProductList></ProductList>
    </div>
  );
}

export default App;