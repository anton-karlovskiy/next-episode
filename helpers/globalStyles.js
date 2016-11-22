import { insertGlobal } from 'next/css'

insertGlobal('*', {boxSizing: 'border-box'})
insertGlobal('body', {
  backgroundColor: '#333',
  margin: 0,
  color: '#fff',
  fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  marginBottom: '100px'
})
