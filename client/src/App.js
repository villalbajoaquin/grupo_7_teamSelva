import "./Assets/css/app.css";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";
import ContentWrapper from "./Views/ContentWrapper/ContentWrapper";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Switch, Route, Redirect } from "react-router-dom";
import SearchMovies from "./Components/SearchMovies/SearchMovies";
import DetailView from "./Views/DetailView";
import ProductList from "./Components/ProductsList/ProductList";

function App() {
  return (
    <div id="wrapper">

      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">

        <Topbar />

        <div id="content">

          <Switch>

            <Route exact path="/" component={ContentWrapper} />
            <Route path="/search" component={SearchMovies} />
            <Route exact path="/products-list" >
              <ProductList />
            </Route>

            <Route exact path="/products/:id" >
              <DetailView titleType="Producto"/>
            </Route>
            <Route exact path="/users/:id" >
              <DetailView titleType="Usuario"/>
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