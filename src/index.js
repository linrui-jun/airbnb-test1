import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from 'styled-components'

import App from "./App"
import "normalize.css"
import "./assets/css/index.less"
import store from "./stores"
import theme from "./assets/theme"

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback="lodaing">
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </Suspense>
    </Provider>
  </BrowserRouter>
)