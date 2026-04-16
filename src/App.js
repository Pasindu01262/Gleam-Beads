
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import ShopCategory from './Page/ShopCategory';
import Shop from "./Page/Shop"
import Product from "./Page/Product"
import  Cart from "./Page/Cart" 
import Footer from './Component/Footer/Footer';
import men_banner from "./Component/Assest/Frontend_Assets/banner_mens.png"
import women_banner from "./Component/Assest/Frontend_Assets/banner_women.png"
import kids_banner from "./Component/Assest/Frontend_Assets/banner_kids.png"
import Contact from './Page/Contact';
import ManageProduct from './Page/Product';

function App() {
  return (
    <div>
       
       <BrowserRouter>
       <Navbar/>
          <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/mens' element={<ShopCategory banner={men_banner} Category="men"/>}/>
              <Route path='/womens' element={<ShopCategory banner={women_banner} Category="women"/>}/>
              <Route path='/kids' element={<ShopCategory banner={kids_banner} Category="kid"/>}/>
              <Route path='/product' element={<Product/>}>
                   <Route path=':productId' element={<Product/>}/>
              </Route>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/manage' element={<ManageProduct/>}/>
          </Routes>
          <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
