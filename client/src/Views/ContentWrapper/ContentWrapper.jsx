import React from "react";
import * as Request from "../../utils/Request";
import Topbar from "../../Components/Topbar/Topbar";
import Footer from "../../Components/Footer/Footer";
import ContentRowTop from "../../Components/ContentRowTop/ContentRowTop";
import Table from "../../Components/Table/Table";

class ContentWrapper extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    const response = await Request.get("http://localhost:3001/api/movies");

    this.setState({ movies: response.data })
  }

  render() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

          {/* <!-- Topbar --> */}
          <Topbar />
          {/* <!-- End of Topbar --> */}

          {/* <!-- Content Row Top --> */}
          <ContentRowTop />
          {/* <!--End Content Row Top--> */}
        </div>
        {/* <!-- End of MainContent --> */}
        <Table data={this.state.movies} />
        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}

      </div>
    )
  }

}

export default ContentWrapper;