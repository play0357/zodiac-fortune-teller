import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client/react'
import App from './App.jsx'
import { client } from './client/client.js'
import GlobalStyles from './styles/globalStyles.js'
import './variables.css'


createRoot(document.getElementById('root')).render(
  
    <ApolloProvider client={client}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </ApolloProvider>
,
)
