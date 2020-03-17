# Redux persist

inside the store.js
```js
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "../root-reducer";

const middleWares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);

```
lets change the root reducer
```js
import { combineReducers } from "redux";
import UserReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};
const rootReducer = combineReducers({
  user: UserReducer,
  cart: cartReducer
});
export default persistReducer(persistConfig, rootReducer);

```
in index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

```

