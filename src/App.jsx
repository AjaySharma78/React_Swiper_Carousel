import React from 'react'
import Carousel from './components/Carousel'

function App() {
 const [show, setShow] = React.useState(false);


const CarouselInfo=[
  {
    title: "Tesla",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rem temporibus amet facere repellat quae.",
    img: "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/B02_Dual-Displays.jpeg?"
  },
  {
    title: "Tesla2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rem temporibus amet facere repellat quae.",
    img: "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/B03_Studio-Quality-Sound.jpeg?"
  },
  {
    title: "Tesla3",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rem temporibus amet facere repellat quae.",
    img: "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/B02_Dual-Displays.jpeg?"
  },
  {
    title: "Tesla4",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rem temporibus amet facere repellat quae.",
    img: "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/B03_Studio-Quality-Sound.jpeg?"
  },
  {
    title: "Tesla5",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rem temporibus amet facere repellat quae.",
    img: "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/B02_Dual-Displays.jpeg?"
  },
  {
    title: "Tesla6",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi rem temporibus amet facere repellat quae.",
    img: "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/B03_Studio-Quality-Sound.jpeg?"
  },
 
]



  return (
    <div className='h-screen flex flex-col items-center gap-6 bg-slate-600 text-white'>

      <button onClick={()=>setShow(true)} className='mt-10 bg-slate-300 px-2 py-1 rounded-sm text-black text-xl'>Feature Image</button>
     {show && 
   
      <Carousel onClose={()=>setShow(false)} slides={CarouselInfo}/> 
      }
    </div>
  )
}

export default App
