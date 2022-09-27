import "./Assets/css/app.css";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";
import ContentWrapper from "./Views/ContentWrapper/ContentWrapper";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductList from "./Components/ProductsList/ProductList";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import UserList from "./Components/UserList/UserList";
import UserDetail from "./Components/UserDetail/UserDetail";

function App() {
  return (
    <div id="wrapper">

      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">

        <Topbar />

        <div id="content">

          <Switch>

            <Route exact path="/" component={ContentWrapper} />
            <Route exact path="/products-list" component={ProductList} />
            <Route exact path="/users-list" component={UserList} />

            <Route exact path="/products/:id" >
              <ProductDetail />
            </Route>
            <Route exact path="/users/:id" >
              <UserDetail />
            </Route>
            <Route>
              <Redirect to="/?error=pagina_no_encontrada" />
            </Route>

          </Switch>

          <Footer />

        </div>

      </div>

    </div>
  );
}

export default App;