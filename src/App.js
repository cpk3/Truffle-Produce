// import './categories.styles.scss'
import Home from './routes/home/home.component.jsx'
import { Routes, Route } from 'react-router-dom';
import Nav from './routes/Navigation/nav.components.jsx'
import Authentication from './routes/authentication/authentication.component.jsx'

const Shop = ()=> {
  return (<h1>shop here</h1>)
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='authentication' element={<Authentication/>}/>
     </Route>
    </Routes>
  )
}
export default App;
