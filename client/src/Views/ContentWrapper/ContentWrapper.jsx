import React from "react";
import * as Request from "../../utils/Request";
import ContentRowTop from "../../Components/ContentRowTop/ContentRowTop";
import Table from "../../Components/Table/Table";

class ContentWrapper extends React.Component {

  constructor(props) {
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
      
<>
        {/* <!-- Main Content --> */}
        <div id="content">

        

          {/* <!-- Content Row Top --> */}
          <ContentRowTop />
          {/* <!--End Content Row Top--> */}
        </div>
        {/* <!-- End of MainContent --> */}
        <Table data={this.state.movies} />
        
</>
      
    )
  }

}

export default ContentWrapper;