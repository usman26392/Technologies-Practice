import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { reduxRTKStore } from './stores/reduxToolKitStore.ts'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={reduxRTKStore}>
      <App />
    </Provider>
  </StrictMode>,
)
