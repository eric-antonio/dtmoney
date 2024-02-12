import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer, Model } from "miragejs";
import { request } from "http";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'Free lancer de WebSite',
          type:'deposit',
          category:'Dev',
          amount:7000,
          createdAt:new Date('2022-04-13 09:34')
        },
        {
          id:2,
          title:'Pagamento do Aluguel',
          type:'withdraw',
          category:'Casa',
          amount:2400,
          createdAt:new Date('2022-05-12 19:34')
        },{
          id:3,
          title:'Compras da Casa',
          type:'withdraw',
          category:'Casa',
          amount:5000,
          createdAt:new Date('2022-03-13 05:24')
        }
      ]
    })
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
