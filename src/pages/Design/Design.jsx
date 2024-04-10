import React from 'react';
import NavigationBar from './Compoents/Navigation/NavigationBar';
import { useEffect } from 'react';
import ChooseDesign from './Compoents/Sliders/ChooseDesign/ChooseDesign';
import EditDesign from './Compoents/Sliders/EditDesign/EditDesign';

export default function Design() {

  useEffect(() => {
    document.title = "Design";
  })

  return (
    <section>
      <div className='p-2 bg-dark-navigation'>
        <NavigationBar />
      </div>

      <div>
        <ChooseDesign />
      </div>
      <div>
        <EditDesign />
      </div>
    </section>
  )
}
