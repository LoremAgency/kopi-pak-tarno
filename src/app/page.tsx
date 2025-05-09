import Footer from "./components/footer";
import Header from "./components/header";
import Maps from "./components/maps";
import Partner from "./components/partner";
import ProductList from "./components/product-list";

export default function Home() {
  return (
    <div>
      <Header />
      <ProductList />
      <Partner />
      <Maps />
      <Footer />
    </div>
  );
}
