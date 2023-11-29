import HomePage from '../../Pages/HomePage';
import ErrorPage from '../../Pages/ErrorPage';
import Menu from '../../Pages/Menu';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';

 export const myRoutes=[
    {id:1, 'path':'/',element:<HomePage/>, title:'Home'},
    {id:2, 'path':'/menu',element:<Menu/>, title:'Menu'},
    {id:3, 'path':'/about',element:<About/>, title:'About'},
    {id:4, 'path':'/contact',element:<Contact/>, title:'Contact'},
    {id:5, 'path':'*',element:<ErrorPage/> },
]