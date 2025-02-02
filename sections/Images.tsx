import React from 'react'
import SectionCard from '@components/SectionCard'

import BgTitle from '@components/BgTitle'
// copy and rename this component to create your own section
// don't forget to add your component in index.tsx
const template = () => {
    
  return (
    <SectionCard id='Images' title='GALLERY' page='04' >
      <div style={{ position: 'relative' }}>
        <BgTitle title='GALLERY' />
      </div>
    </SectionCard>
  )
}

export default template