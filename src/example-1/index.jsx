import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

function Example1() {
  return (
    <div>
      <Header></Header>
      <div style={{ display: "flex" }}>
        <Navbar></Navbar>
        <Content></Content>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Example1;
