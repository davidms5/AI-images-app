import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import {FormField, Loader} from '../components';


const CrearPost = () =>{
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt:'',
    image: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {

  }

  const handleChange = e =>{

  }

  const handleSurpriseMe = () =>{

  }

  const generateImage = () =>{

  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
       <h1 className='font-extrabold text-[#222328] text-[16px]'>Crear</h1> 
        <p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'> crea imaginativas y visualmente impresionantes imagenes generadas con DALL-E AI y compartelas con la comunidad!</p>

    </div>

    <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-5'>

      <FormField
      LabeLName='tu nombre'
      type="text"
      name='name'
      placeholder='john'
      value={form.name} 
      handleChange={handleChange}
       />

      <FormField
      LabeLName="prompt"
      type="text"
      name="prompt"
      placeholder="a plush toy robot sitting against a blue wall"
      value={form.prompt}
      handleChange={handleChange}
      isSurpriseMe
      handleSurpriseMe={handleSurpriseMe}
      />

      <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center ">
    {form.image ? (
      <img
      src={form.image}
      alt={form.prompt}
      className="w-full h-full object-contain"/>
    ) : (
      <img
      src={preview}
      alt="preview"
      className=" w-9/12 h-9/12 object-contain opacity-40 "
      />)}

    {generatingImg && (
      <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
      <Loader/>

      </div>
    )}

      </div>

    </div>


    <div className="mt-5 flex gap-5">

    <button type="button" onClick={generateImage}>
    {generatingImg ? 'generando...' : "generado"}
    </button>

    </div>

    <div className="mt-10">
    <p> una vez que ya hayas creado la imagen que deseas, puedes compartirla con..</p>


    </div>

    </form>

    </section>
  )
}

export default CrearPost;
