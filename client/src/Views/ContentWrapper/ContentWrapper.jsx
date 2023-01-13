import React, { useState, useEffect } from "react";
import ContentRowTop from "../../Components/ContentRowTop/ContentRowTop";

const ContentWrapper = () => {

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [nextShow, setNext] = useState([]);
  const [lastAdded, setLast] = useState([]);

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

    // fetch next show
    fetch("http://localhost:8080/api/products/next-show")
      .then(res => res.json())
      .then(result => {
        if (!result.data) {
          setNext([])
        } else {
          setNext(result.data);
        };
      })
      .catch(err => console.log(err));

      // fetch last added
      fetch("http://localhost:8080/api/products/last-added")
        .then(res => res.json())
        .then(result => {
          if (!result.data) {
            setLast([])
          } else {
            setLast(result.data);
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
        <ContentRowTop products={products} nextShow={nextShow} lastAdded={lastAdded} users={users}/>

      </div>
      {/* <!-- End of MainContent --> */}
    </>
  )
};

export default ContentWrapper;