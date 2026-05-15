import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./pages/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import BlogDetail from "./pages/BlogDetail";
import { useJQueryPlugins } from "./abc/useJQueryPlugins";
function AppContent() {
  useJQueryPlugins(); // init jQuery plugins sau mỗi lần render/đổi route

  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home2" element={<HomePage2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-detail" element={<ShopDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
