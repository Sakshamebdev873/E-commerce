import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../Components/Title'
const About = () => {
  return (
    <>
    <div className='flex flex-col justify-between items-center mt-5'>
    <div className='text-2xl font-medium'>
      <Title text1={'About'} text2={'Us'} />
      </div>
      <div className='flex flex-row mt-4 mx-4'>
        <p className='flex gap-2'><img src={assets.about_img} alt={assets.about_img} className='h-[90%] w-[50%] ' />
        <span className='text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus enim aperiam a, illum quos explicabo rem iure repellat, officiis eligendi et quod commodi itaque provident vero laudantium similique soluta.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas magni officiis, modi itaque laudantium minus a assumenda sint obcaecati, harum numquam sunt est deleniti amet, ratione ab! Numquam, cumque!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta exercitationem minima, eum quam quaerat fugit, ducimus illum magni consequatur voluptatibus rem ipsum suscipit odit non dolorem? Expedita eligendi iure magnam.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nulla deleniti alias recusandae. Omnis rem adipisci incidunt officiis quo eligendi sunt. Praesentium porro nisi asperiores facilis deleniti aperiam tenetur dolor?
          Accusantium, molestias! Maiores doloribus dolorum adipisci, consectetur facilis tenetur? Officiis perferendis hic nemo veritatis sed ad adipisci maiores accusantium dignissimos, tenetur numquam illo minima unde iusto possimus itaque error veniam?
          Itaque est quam, adipisci aut officia libero perferendis nihil<br/> dignissimos quod minima consequatur incidunt? Quis voluptas rem incidunt eum saepe. Fuga voluptatem a corrupti omnis libero beatae ducimus soluta accusamus?
          Quae distinctio nisi rerum atque ipsam expedita, temporibus dolore neque, asperiores sint maxime nostrum nam voluptas autem a doloribus vitae adipisci itaque eligendi blanditiis consectetur molestias eum? Labore, ab est.
        </span></p>
        
      </div>
    </div>
    </>
  )
}

export default About