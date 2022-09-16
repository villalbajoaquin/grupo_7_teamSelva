import "./Assets/css/app.css";
import ContentWrapper from "./Views/ContentWrapper/ContentWrapper";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div id="wrapper">

            {/* <!-- Sidebar -->  */}
            <Sidebar />
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Content Wrapper --> */}
            <ContentWrapper />
            {/* <!-- End of Content Wrapper --> */}

      </div>
    );
}

export default App;
