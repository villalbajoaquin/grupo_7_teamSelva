import React, { useState, useEffect } from "react";
import ContentRowTop from "../../Components/ContentRowTop/ContentRowTop";
import Table from "../../Components/Table/Table";

/*class ContentWrapper extends React.Component {

  constructor(props) {
    super();
    this.state = {
      movies: []
    }
  }


  async componentDidMount() {
    const response = await fetch("http://localhost:8080/api/users");
    const data = response.json();

    console.log(data)

    this.setState({ movies: response.data })
  }

  render() {

    return (
      <>
        {/* <!-- Main Content -->
        <div id="content">
          <!-- Content Row Top -->
          <ContentRowTop />
          <!--End Content Row Top-->
        </div>
        <!-- End of MainContent -->
        <Table data={this.state.movies} />
      </>
    )
  }

}*/

const ContentWrapper = () => {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch products
    fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then(list => {
        if (!list.data) {
          setProducts([])
        } else {
          setProducts(list.data);
        };
      })
      .catch(err => console.log(err));

    // fetch users
    fetch("http://localhost:8080/api/users")
      .then(res => res.json())
      .then(list => {
        if (!list.data) {
          setUsers([])
        } else {
          setUsers(list.data);
        };
      })
      .catch(err => console.log(err));
  }, []);


  return (
    <>
      {/* <!-- Main Content --> */}
      <div id="content">
        {/* <!-- Content Row Top --> */}
        <ContentRowTop products={products} users={users}/>
        {/* <!--End Content Row Top--> */}
      </div>
      {/* <!-- End of MainContent --> */}
      <Table data={products} />
    </>
  )
};

export default ContentWrapper;