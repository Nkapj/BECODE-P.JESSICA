import React, { useState} from "react";



function MonFormulaire () {

    const [inputColors, setInputColors] = useState ({

      firstname: 'noir',
      lastname: 'noir',
      age: 'noir',
      email: 'noir',
      phonenumber: 'noir',
      password: 'noir',
      repeatPassword: 'noir',

    });

    const [errorMessage, setErrorMessage] = useState ({

      firstname: '',
      lastname: '',
      age: '',
      email: '',
      phonenumber: '',
      password: '',
      repeatPassword: '',

    });

    const [inputData, setInputData] = useState ({

      firstname: '',
      lastname: '',
      age: '',
      email: '',
      phonenumber: '',
      password: '',
      repeatPassword: '',

    });


    const [listForm, setListForm] = useState (false);


    const colorChange = (e) => {
    const {id,value} = e.target;


    setInputData((prev) => ({
      ...prev,
      [id]: value,
  
    }));



    if(value.trim() === '') {
    setInputColors((prev) => ({
      ...prev, 
      [id]: 'noir',
    }));

    return;

    }

    if(id === 'firstname' || id === 'lastname'){
      const onlyLetters = /[^a-zA-Z]/;
      setInputColors((prev)=> ({
        ...prev,
        [id]: onlyLetters.test(value) ? "rouge": "vert",

      }));

      setErrorMessage((prev)=> ({
        ...prev,
        [id]: onlyLetters.test(value) ?
        "Ce champs doit uniquement contenir de lettres":""

      }));





    } else if(id === 'age'|| id === 'phonenumber'){

        if(id === 'phonenumber'){

          const numBelge0 = /^(04|02)[0-9]{8}$/;
          const numBelge32 = /^\+32[0-9]{9}$/

          const numValid = numBelge0.test(value) || numBelge32.test(value)

          
          setInputColors((prev) => ({
            ...prev,
            [id]: numValid ? 'vert': 'rouge'
          }));
          
          setErrorMessage((prev) => ({
            ...prev,
            [id]: !numValid ? 
              'le numero doit commencer par 04/02 ou +32 et avoir le nom nombre de chiffres': ''
          }))


      } else{
        const onlyDecimal = /[^0-9]/;
      setInputColors((prev)=> ({
        ...prev,
        [id]: onlyDecimal.test(value) ? "rouge": "vert",

      }));

      setErrorMessage((prev)=> ({
        ...prev,
        [id]: onlyDecimal.test(value) ?
        "La saisie n'est pas valid ":""

      }));

    }

      
    }else if(id === 'email'){
      const onlyMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setInputColors((prev)=> ({
        ...prev,
        [id]: onlyMail.test(value) ? "vert": "rouge",

      }));

      setErrorMessage((prev)=> ({
        ...prev,

        [id]: !onlyMail.test(value) ?
        "l'adresse e-mail rentrée n'est pas valide":""

      }));



      
    } else if(id === 'password' || id === 'repeatPassword'){
      const onlyPass = /[^a-zA-Z0-9]/;
      setInputColors((prev)=> ({
        ...prev,
        [id]: onlyPass.test(value) ? "rouge": "vert",

      }));

      setErrorMessage((prev)=> ({
        ...prev,
        [id]: onlyPass.test(value) ?
        "Le mot de passe n'est pas valide":""

      }));
      
      if ( id ==='repeatPassword' && value !== inputData.password){
      setInputColors((prev) => ({
        ...prev,
        [id]: 'rouge', 
      }));
      setErrorMessage((prev)=> ({
        ...prev,
        [id]: "Le mot de passe de correspond pas "

      }));
    }

    if(inputColors[id] ==='rouge' && errorMessage[id]){}

  } 

}
    
const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(inputColors).every(color => color === 'vert')

    if (isValid){
      setListForm(true)
    }

  }

  
  


return (

  <div className="container"> 
  
    <div className='root'>
     <div className="titre">
    <h1>Formulaire</h1>
    </div> 
    <div>
      <label htmlFor="firstname"></label>
      <input 
      placeholder="First name"
      id="firstname" 
      name="firstname" 
      type="text" 
      value={inputData.firstname} 
      onChange={colorChange} 
      className= {inputColors.firstname}
      />
      {errorMessage.firstname && (
        <span className="errorMessage"> {errorMessage.firstname}</span> 
    )}
      
    </div>

    <div>
    <label htmlFor="lastname"></label>
    <input 
      placeholder="Last name"
      id="lastname" 
      name="lastname"  
      type="text" value={inputData.lastname} 
      onChange={colorChange} 
      className= {inputColors.lastname}
    />
    {errorMessage.lastname && ( 
      <span className="errorMessage"> {errorMessage.lastname}</span>
  )}
    
    </div>

    <div>
    <label htmlFor="age"></label>
    <input 
      placeholder="Age"
      id="age" 
      name="age" 
      type="number"
      value={inputData.age} 
      onChange={colorChange} 
      className= {inputColors.age}
    />
    {errorMessage.age && (
      <span className="errorMessage"> {errorMessage.age}</span>
  )}
    
    </div>
    
    <div>
    <label htmlFor="email"></label>
    <input 
      placeholder="Email"
      id="email" 
      name="email" 
      type="email"
      value={inputData.email} 
      onChange={colorChange} 
      className= {inputColors.email} 
    />
    {errorMessage.email && (
      <span className="errorMessage">{errorMessage.email}</span> 
  )}
    
    </div>
    
    <div>
    <label htmlFor="phonenumber"></label>
    <input 
      placeholder="Phone number"
      id="phonenumber" 
      name="phonenumber" 
      type="tel"
      value={inputData.phonenumber}
      onChange={colorChange} 
      className= {inputColors.phonenumber}
      />
      {errorMessage.phonenumber && (
        <span className="errorMessage"> {errorMessage.phonenumber}</span>
    )}
      
    </div>

    <div>
    <label htmlFor="password"></label>
    <input 
      placeholder="Password"
      id="password" 
      name="password" 
      type="password"
      value={inputData.password}
      onChange={colorChange} 
      className= {inputColors.password}
      />
      {errorMessage.password && ( 
        <span className="errorMessage"> {errorMessage.password}</span>

      )}
      
    </div>

    <div>
    <label htmlFor="repeatpassword"></label>
    <input 
      placeholder="Confirm Password"
      id="repeatPassword" 
      name="repeatPassword" 
      type="password" 
      value={inputData.repeatPassword} 
      onChange={colorChange} 
      className= {inputColors.repeatPassword}
    />
    {errorMessage.repeatPassword && ( 
      <span className="errorMessage"> {errorMessage.repeatPassword}</span>
  )}
    
    </div>
    <div className="button-container">
      <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
    </form>
    </div>
    
</div>

  {listForm && (
    <div className="result-container"> 
      <h2>User Informations</h2>
      <ul className="data-list">
      <li>First name: {inputData.firstname}</li>
      <li>Last name: {inputData.lastname}</li>
      <li>Age: {inputData.age}</li>
      <li>Email: {inputData.email}</li>
      <li>Number: {inputData.phonenumber}</li>
    </ul>
    </div>
    
  )}

  </div> 



);  

}



export default MonFormulaire