import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de web site',
          amount: 12000,
          type: 'deposit',
          category: 'Venda',
          createdAt: new Date('2021-05-07 16:20:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 1300,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-06-12 18:13:48'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
