import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          dolor quibusdam voluptate rem? Quis laudantium cupiditate autem animi
          nesciunt beatae possimus ipsam molestias neque ad natus delectus
          inventore iste, corporis non repellendus nulla aliquid architecto?
          Odio modi velit voluptatum numquam impedit quae. Perspiciatis tenetur
          velit dicta voluptates ab itaque iusto.
        </p>
        <br />
        <p className='text-xl'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          modi illo amet, eius, quod fugiat at magnam perferendis ipsam, iste
          expedita aut nostrum. Doloremque et iure provident odio corporis amet
          eum, assumenda facilis vitae accusamus autem saepe architecto nam
          maxime deleniti error optio explicabo illo fugit asperiores dolorum!
          Consectetur, numquam.
        </p>
      </div>
    </div>
  );
}

export default About