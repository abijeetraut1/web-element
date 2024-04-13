import React from 'react';
import NavigationBar from './Compoents/Navigation/NavigationBar';
import { useEffect } from 'react';
import ChooseDesign from './Compoents/Sliders/ChooseDesign/ChooseDesign';
import EditDesign from './Compoents/Sliders/EditDesign/EditDesign';
import EditorPanel from './Compoents/Sliders/EditorPanel/EditorPanel';
import { FaChevronRight } from "react-icons/fa6";

export default function Design() {

  useEffect(() => {
    document.title = "Design";
  })

  return (
    <section>
      <div className='p-2 bg-dark-navigation'>
        <NavigationBar />
      </div>

      <section className='flex'>
        <div>
          <ChooseDesign />
        </div>


        <div>
          <EditorPanel />
        </div>

        <div>
          <EditDesign />
        </div>
      </section>
    </section>
  )
}
