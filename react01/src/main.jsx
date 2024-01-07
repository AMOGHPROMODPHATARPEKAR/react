import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherUser = "amogh"

const reactElement = React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
},
`${anotherUser} click me to visit google `,

)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   reactElement
 
)
