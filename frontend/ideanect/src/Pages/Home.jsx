import React from 'react'
import HeroHome from '../components/HomeCom/HeroHome'
import HomeCard from '../components/HomeCom/HomeCard'
import HomeIdeaCard from '../components/HomeCom/HomeIdeaCard'
import HomeIdeaFilter from '../components/HomeCom/HomeIdeasFilter'

function Home() {
  return (
    <div>
     <HeroHome/>
     <HomeCard/>
     <HomeIdeaCard/>
     <HomeIdeaFilter/>
    </div>
  )
}

export default Home
