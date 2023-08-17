import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import Description from '../components/Description';
import React from 'react'

const HomePage = () => {
  return (
    <main>
        <Hero />
        <Menu />
        <Testimonials />
        <Description />
    </main>
)
}

export default HomePage