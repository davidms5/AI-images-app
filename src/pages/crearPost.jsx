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
      value={form.name} {//ver de donde sale form.name}
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


    </div>

    </form>

    </section>
  )
}

export default CrearPost;
