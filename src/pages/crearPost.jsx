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
  return (
    <div>
    crear post
    </div>
  )
}

export default CrearPost;
