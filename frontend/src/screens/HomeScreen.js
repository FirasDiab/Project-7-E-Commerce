import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import Photo from '../components/Photo'
import ReactPlayer from "react-player"

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
     
      {/* {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )} */}
      <h1>Latest Onesies</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <div style={{ backgroundColor: "#ecf6fb ", height: "45em" }}>

  
          <h1 style={{ fontSize:"20pt", display: "flex", justifyContent:"center" }}>Be part of the next ONSIE DANCE Challenge</h1>
            <h3 style={{ fontSize:"15pt",  display: "flex", justifyContent:"center" }} >Watch video to know more</h3>
       
          <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPlayer url="https://www.youtube.com/watch?v=ynN9z28ofXg" />
      </div>
      </div>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
