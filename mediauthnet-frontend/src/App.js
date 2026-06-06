// import Home from './components/home/Home';
// import Login from './components/home/Login';
// import ScannerPage from './components/pages/ScannerPage';
// import Admin from './components/pages/Admin';
// import Manufacturer from './components/pages/Manufacturer';
// import Supplier from './components/pages/Supplier';
// import Retailer from './components/pages/Retailer';
// import { Routes, Route } from 'react-router-dom';
// import RequireAuth from './components/RequireAuth';
// import Layout from './components/Layout';
// import AddAccount from './components/pages/AddAccount';
// import ManageAccount from './components/pages/ManageAccount';
// import AddProduct from './components/pages/AddProduct';
// import Profile from './components/pages/Profile';
// import UpdateProduct from './components/pages/UpdateProduct';
// import Product from './components/pages/Product';
// import AuthenticProduct from './components/pages/AuthenticProduct';
// import FakeProduct from './components/pages/FakeProduct';
// import UpdateProductDetails from './components/pages/UpdateProductDetails';
// import Register from "./components/home/Register";


// function App() {

//   return (
//     <Routes>
//       <Route path='/' element={<Layout />}>

//         {/* public routes */}
//         <Route exact path='/' element={< Home />}></Route>
//         <Route exact path='/login' element={< Login />}></Route>
//         <Route exact path='/scanner' element={< ScannerPage />}></Route>
//         <Route exact path='/product' element={< Product />}></Route>
//         <Route exact path='/authentic-product' element={< AuthenticProduct />}></Route>
//         <Route exact path='/fake-product' element={< FakeProduct />}></Route>
//         <Route path="/register" element={<Register />} />


//         {/* private routes */}
//         <Route element={<RequireAuth allowedRoles={["admin"]} />}>
//           <Route exact path='/admin' element={< Admin />}></Route>
//           <Route exact path='/add-account' element={< AddAccount />}></Route>
//           <Route exact path='/manage-account' element={< ManageAccount />}></Route> 

//         </Route>

//         <Route element={<RequireAuth allowedRoles={["manufacturer", "supplier", "retailer"]} />}>
//           <Route exact path='/profile' element={< Profile />}></Route>
//           <Route exact path='/update-product' element={< UpdateProduct />}></Route>
//           <Route exact path='/update-product-details' element={< UpdateProductDetails />}></Route>
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["supplier", "retailer"]} />}>
//           <Route exact path='/update-product' element={< UpdateProduct />}></Route>
//           <Route exact path='/update-product-details' element={< UpdateProductDetails />}></Route>
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["manufacturer"]} />}>
//           <Route exact path='/manufacturer' element={< Manufacturer />}></Route>
//           <Route exact path='/add-product' element={< AddProduct />}></Route>
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["supplier"]} />}>
//           <Route exact path='/supplier' element={< Supplier />}></Route>        
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["retailer"]} />}>
//           <Route exact path='/retailer' element={< Retailer />}></Route>
//         </Route>

//         {/* catch all */}
//         {/* <Route path='*' element={< Missing />}></Route> */}

//       </Route>
//     </Routes>

//   );
// }

// export default App;





// import Home from './components/home/Home';
// import Login from './components/home/Login';
// import ScannerPage from './components/pages/ScannerPage';
// import Admin from './components/pages/Admin';
// import Manufacturer from './components/pages/Manufacturer';
// import Supplier from './components/pages/Supplier';
// import Retailer from './components/pages/Retailer';
// import { Routes, Route } from 'react-router-dom';
// import RequireAuth from './components/RequireAuth';
// import Layout from './components/Layout';
// import AddAccount from './components/pages/AddAccount';
// import ManageAccount from './components/pages/ManageAccount';
// import AddProduct from './components/pages/AddProduct';
// import Profile from './components/pages/Profile';
// import UpdateProduct from './components/pages/UpdateProduct';
// import Product from './components/pages/Product';
// import AuthenticProduct from './components/pages/AuthenticProduct';
// import FakeProduct from './components/pages/FakeProduct';
// import UpdateProductDetails from './components/pages/UpdateProductDetails';
// import Register from "./components/home/Register";
// import FeaturedMedicine from "./components/home/FeaturedMedicine";
// import ServicesSection    from "./components/home/ServicesSection";
// import GuidesPage from "./components/home/GuidesPage";
// import Guide from "./components/home/Guide"; 
// import ServicesPage from './components/home/ServicesPage'; 
// import Contact from './components/home/Contact';
// import VerifyOTP from './components/pages/VerifyOTP';
// import User from './components/pages/User';

// function App() {

//   return (
//     <Routes>
//       <Route path='/' element={<Layout />}>

//         {/* public routes */}
//         <Route exact path='/' element={<Home />} />
//         <Route exact path='/login' element={<Login />} />
//         <Route exact path='/scanner' element={<ScannerPage />} />
//         <Route exact path='/product' element={<Product />} />
//         <Route exact path='/authentic-product' element={<AuthenticProduct />} />
//         <Route exact path='/fake-product' element={<FakeProduct />} />
//         <Route path="/register" element={<Register />} />
//         <Route exact path="/services" element={<ServicesSection/>} />
//         <Route exact path ="/services-page" element={<ServicesPage/>}/>
//         <Route exact path ="/contact"   element={<Contact/>} />
//          <Route path="/verify-otp" element={<VerifyOTP />} />
//          <Route exact path="/user" element={<User />} />


//         {/* ⭐ ROUTE for Guide.jsx */}
//         <Route exact path="/how-it-works" element={<Guide />} />

//         <Route path="/featured-medicines" element={<FeaturedMedicine />} />

//         {/* ⭐ ROUTE for Full Guides Page */}
//         <Route exact path='/guides' element={<GuidesPage />} />



//         {/* private routes... (unchanged) */}
//         <Route element={<RequireAuth allowedRoles={["admin"]} />}>
//           <Route exact path='/admin' element={<Admin />} />
//           <Route exact path='/add-account' element={<AddAccount />} />
//           <Route exact path='/manage-account' element={<ManageAccount />} />
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["manufacturer", "supplier", "retailer","user"]} />}>
//           <Route exact path='/profile' element={<Profile />} />
//           <Route exact path='/update-product' element={<UpdateProduct />} />
//           <Route exact path='/update-product-details' element={<UpdateProductDetails />} />
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["supplier", "retailer"]} />}>
//           <Route exact path='/update-product' element={<UpdateProduct />} />
//           <Route exact path='/update-product-details' element={<UpdateProductDetails />} />
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["manufacturer"]} />}>
//           <Route exact path='/manufacturer' element={<Manufacturer />} />
//           <Route exact path='/add-product' element={<AddProduct />} />
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["supplier"]} />}>
//           <Route exact path='/supplier' element={<Supplier />} />
//         </Route>

//         <Route element={<RequireAuth allowedRoles={["retailer"]} />}>
//           <Route exact path='/retailer' element={<Retailer />} />
//         </Route>

//       </Route>
//     </Routes>
//   );
// }

// export default App;







// import Home from './components/home/Home';
// import Login from './components/home/Login';
// import ScannerPage from './components/pages/ScannerPage';
// import Admin from './components/pages/Admin';
// import Manufacturer from './components/pages/Manufacturer';
// import Supplier from './components/pages/Supplier';
// import Retailer from './components/pages/Retailer';
// import { Routes, Route } from 'react-router-dom';
// import RequireAuth from './components/RequireAuth';
// import Layout from './components/Layout';
// import AddAccount from './components/pages/AddAccount';
// import ManageAccount from './components/pages/ManageAccount';
// import AddProduct from './components/pages/AddProduct';
// import Profile from './components/pages/Profile';
// import UpdateProduct from './components/pages/UpdateProduct';
// import Product from './components/pages/Product';
// import AuthenticProduct from './components/pages/AuthenticProduct';
// import FakeProduct from './components/pages/FakeProduct';
// import UpdateProductDetails from './components/pages/UpdateProductDetails';
// import Register from "./components/home/Register";
// import FeaturedMedicine from "./components/home/FeaturedMedicine";
// import ServicesSection from "./components/home/ServicesSection";
// import GuidesPage from "./components/home/GuidesPage";
// import Guide from "./components/home/Guide";
// import ServicesPage from './components/home/ServicesPage';
// import Contact from './components/home/Contact';
// import VerifyOTP from './components/pages/VerifyOTP';
// import User from './components/pages/User';

// import { connectWallet } from "./blockchain";

// function App() {

//   const handleConnectWallet = async () => {

//     try {

//       const contract =
//         await connectWallet();

//       console.log(
//         "Connected Contract:",
//         contract
//       );

//       const message =
//         await contract.message();

//       console.log(
//         "Blockchain Message:",
//         message
//       );

//       alert(message);

//     } catch (error) {

//       console.log(error);
//     }
//   };

//   return (
//     <>

//       {/* Wallet Connect Button */}
//       <div
//         style={{
//           padding: "10px",
//           textAlign: "center",
//           background: "#f5f5f5"
//         }}
//       >
//         <button
//           onClick={handleConnectWallet}
//           style={{
//             padding: "10px 20px",
//             fontSize: "16px",
//             cursor: "pointer",
//             border: "none",
//             borderRadius: "5px",
//             backgroundColor: "#1976d2",
//             color: "white"
//           }}
//         >
//           Connect Wallet
//         </button>
//       </div>

//       <Routes>

//         <Route path='/' element={<Layout />}>

//           {/* Public Routes */}
//           <Route exact path='/' element={<Home />} />
//           <Route exact path='/login' element={<Login />} />
//           <Route exact path='/scanner' element={<ScannerPage />} />
//           <Route exact path='/product' element={<Product />} />
//           <Route exact path='/authentic-product' element={<AuthenticProduct />} />
//           <Route exact path='/fake-product' element={<FakeProduct />} />
//           <Route path="/register" element={<Register />} />
//           <Route exact path="/services" element={<ServicesSection />} />
//           <Route exact path="/services-page" element={<ServicesPage />} />
//           <Route exact path="/contact" element={<Contact />} />
//           <Route path="/verify-otp" element={<VerifyOTP />} />
//           <Route exact path="/user" element={<User />} />

//           {/* Guide Routes */}
//           <Route exact path="/how-it-works" element={<Guide />} />
//           <Route path="/featured-medicines" element={<FeaturedMedicine />} />
//           <Route exact path='/guides' element={<GuidesPage />} />

//           {/* Admin Routes */}
//           <Route element={<RequireAuth allowedRoles={["admin"]} />}>
//             <Route exact path='/admin' element={<Admin />} />
//             <Route exact path='/add-account' element={<AddAccount />} />
//             <Route exact path='/manage-account' element={<ManageAccount />} />
//           </Route>

//           {/* Common Protected Routes */}
//           <Route
//             element={
//               <RequireAuth
//                 allowedRoles={[
//                   "manufacturer",
//                   "supplier",
//                   "retailer",
//                   "user"
//                 ]}
//               />
//             }
//           >
//             <Route exact path='/profile' element={<Profile />} />
//             <Route exact path='/update-product' element={<UpdateProduct />} />
//             <Route exact path='/update-product-details' element={<UpdateProductDetails />} />
//           </Route>

//           {/* Supplier + Retailer */}
//           <Route
//             element={
//               <RequireAuth
//                 allowedRoles={[
//                   "supplier",
//                   "retailer"
//                 ]}
//               />
//             }
//           >
//             <Route exact path='/update-product' element={<UpdateProduct />} />
//             <Route exact path='/update-product-details' element={<UpdateProductDetails />} />
//           </Route>

//           {/* Manufacturer */}
//           <Route
//             element={
//               <RequireAuth
//                 allowedRoles={[
//                   "manufacturer"
//                 ]}
//               />
//             }
//           >
//             <Route exact path='/manufacturer' element={<Manufacturer />} />
//             <Route exact path='/add-product' element={<AddProduct />} />
//           </Route>

//           {/* Supplier */}
//           <Route
//             element={
//               <RequireAuth
//                 allowedRoles={[
//                   "supplier"
//                 ]}
//               />
//             }
//           >
//             <Route exact path='/supplier' element={<Supplier />} />
//           </Route>

//           {/* Retailer */}
//           <Route
//             element={
//               <RequireAuth
//                 allowedRoles={[
//                   "retailer"
//                 ]}
//               />
//             }
//           >
//             <Route exact path='/retailer' element={<Retailer />} />
//           </Route>

//         </Route>

//       </Routes>

//     </>
//   );
// }

// export default App;




import Home from './components/home/Home';
import Login from './components/home/Login';
import ScannerPage from './components/pages/ScannerPage';
import Admin from './components/pages/Admin';
import Manufacturer from './components/pages/Manufacturer';
import Supplier from './components/pages/Supplier';
import Retailer from './components/pages/Retailer';

import { Routes, Route } from 'react-router-dom';

import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';

import AddAccount from './components/pages/AddAccount';
import ManageAccount from './components/pages/ManageAccount';
import AddProduct from './components/pages/AddProduct';

import Profile from './components/pages/Profile';
import UpdateProduct from './components/pages/UpdateProduct';
import Product from './components/pages/Product';

import AuthenticProduct from './components/pages/AuthenticProduct';
import FakeProduct from './components/pages/FakeProduct';

import UpdateProductDetails from './components/pages/UpdateProductDetails';

import Register from "./components/home/Register";
import FeaturedMedicine from "./components/home/FeaturedMedicine";

import ServicesSection from "./components/home/ServicesSection";
import GuidesPage from "./components/home/GuidesPage";
import Guide from "./components/home/Guide";

import ServicesPage from './components/home/ServicesPage';
import Contact from './components/home/Contact';

import VerifyOTP from './components/pages/VerifyOTP';
import User from './components/pages/User';
import ReceivedProducts
  from "./components/pages/ReceivedProducts";

import BlockchainTransactions from './components/pages/BlockchainTransaction';
import CounterfeitReports from './components/pages/CounterfeitReport';

function App() {

  return (

    <Routes>

      <Route path='/' element={<Layout />}>

        {/* PUBLIC ROUTES */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/scanner' element={<ScannerPage />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/authentic-product' element={<AuthenticProduct />} />
        <Route exact path='/fake-product' element={<FakeProduct />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/blockchain-transactions"
          element={<BlockchainTransactions />}
        />

        <Route
          path="/counterfeit-reports"
          element={<CounterfeitReports />}
        />

        <Route exact path="/services" element={<ServicesSection />} />
        <Route exact path="/services-page" element={<ServicesPage />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route path="/verify-otp" element={<VerifyOTP />} />

        <Route exact path="/user" element={<User />} />

        {/* GUIDE ROUTES */}
        <Route exact path="/how-it-works" element={<Guide />} />

        <Route path="/featured-medicines" element={<FeaturedMedicine />} />

        <Route exact path='/guides' element={<GuidesPage />} />

        {/* ADMIN */}
        <Route
          element={
            <RequireAuth
              allowedRoles={["admin"]}
            />
          }
        >
          <Route exact path='/admin' element={<Admin />} />

          <Route exact path='/add-account' element={<AddAccount />} />

          <Route exact path='/manage-account' element={<ManageAccount />} />
        </Route>

        {/* COMMON PROTECTED */}
        <Route
          element={
            <RequireAuth
              allowedRoles={[
                "manufacturer",
                "supplier",
                "retailer",
                "user"
              ]}
            />
          }
        >
          <Route exact path='/profile' element={<Profile />} />

          <Route exact path='/update-product' element={<UpdateProduct />} />

          <Route
            exact
            path='/update-product-details'
            element={<UpdateProductDetails />}
          />
        </Route>

        {/* SUPPLIER + RETAILER */}
        <Route
          element={
            <RequireAuth
              allowedRoles={[
                "supplier",
                "retailer"
              ]}
            />
          }
        >
          <Route exact path='/update-product' element={<UpdateProduct />} />

          <Route
            exact
            path='/update-product-details'
            element={<UpdateProductDetails />}
          />
        </Route>

        {/* MANUFACTURER */}
        <Route
          element={
            <RequireAuth
              allowedRoles={[
                "manufacturer"
              ]}
            />
          }
        >
          <Route exact path='/manufacturer' element={<Manufacturer />} />

          <Route exact path='/add-product' element={<AddProduct />} />
        </Route>

        {/* SUPPLIER */}
        <Route
          element={
            <RequireAuth
              allowedRoles={[
                "supplier"
              ]}
            />
          }
        >
          <Route exact path='/supplier' element={<Supplier />} />
        </Route>

        {/* RETAILER */}
        <Route
          element={
            <RequireAuth
              allowedRoles={[
                "retailer"
              ]}
            />
          }
        >
          <Route exact path='/retailer' element={<Retailer />} />
        </Route>

        <Route
          path="/received-products"
          element={<ReceivedProducts />}
        />

      </Route>

    </Routes>
  );
}

export default App;