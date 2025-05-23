import React from 'react'
import Wrapper from '../wrapper'
import HeroContent from '../hero-content'
import HeroImage from '../hero-image'

export default function Hero() {
  return (
    <section className="py-10 md: py-0">
      <Wrapper>
        <div className="flex gap-4 flex-col md: flex-row items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </Wrapper>
    </section>
  )
}
