import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@mdi/font/css/materialdesignicons.css';

// Import CSS files
import './assets/css/master.css'
import './assets/css/responsive.css'

// Import JavaScript files (they'll execute on load)
import './assets/js/jquery.min.js'
import './assets/js/validator.js'
import './assets/js/plugins.js'
import './assets/js/bootsnav.js'
import './assets/js/master.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
