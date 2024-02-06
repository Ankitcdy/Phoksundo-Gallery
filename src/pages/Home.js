import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import Thoughts from '../Thoughts'
import Trending from '../components/Trending'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <hr />
            <Thoughts />
            <hr />
            <Card />
            <Trending />
            <Footer />
        </>
    )
}

export default Home