import "./Assets/css/app.css";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";
import ContentWrapper from "./Views/ContentWrapper/ContentWrapper";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Switch, Route, Redirect } from "react-router-dom";
import GenresInDB from "./Components/GenresInDB/GenresInDB";
import LastMovieInDB from "./Components/LastMovieInDB/LastMovieInDB";
import MoviesInDBView from "./Views/MoviesInDBView";
import SearchMovies from "./Components/SearchMovies/SearchMovies";

function App() {
  return (
    <div id="wrapper">

      <Sidebar />
      
      <div id="content-wrapper" className="d-flex flex-column">
        <Topbar />
        <div id="content">

        <Switch>
          <Route exact path="/" component={ContentWrapper} />
          <Route path="/generos" component={GenresInDB} />
          <Route path="/ultima-pelicula" component={LastMovieInDB} />
          <Route path="/search" component={SearchMovies} />
          <Route exact path="/detalles/:id" >
            <MoviesInDBView />
          </Route>
          <Route>
            <Redirect to="/?error=pagina_no_encontrada" />
          </Route>

        </Switch>

        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}
        </div>
      </div>


    </div>
  );
}

export default App;