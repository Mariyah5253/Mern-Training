import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState({
        Password:"",
        cPassword:"",
        email:"",
        isNews:false
        
    })
    
    function handleChange(event) {
        setFormData(prevFormData =>{
            if(event.target.name=='isNews')
            {
               return {
                isNews:!prevFormData.isNews
               }
            }
            
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
          
            }
        }
            
        )
    }
    function clickMe()
    {
        var message=""
        if(formData.Password==formData.cPassword)
            {message="Successfully signed up"

            }
        else
        {
            message="passwords do not match"
        }
        if(formData.isNews)
        {
            message+="\nThanks for joining News"
        }
        alert(message)
      
    }
  
    
    return (
        <center>
        <div className='form'>
           
                <input
                type="email"
                className="input"
                placeholder="Email "
                onChange={handleChange}
                name='email'
            />
             <input
                type="password"
                className="input"
                placeholder="Password"
                onChange={handleChange}
                name='Password'

            />
            <input
                type="password"
                className="input"
                placeholder="Confirm Password"
                onChange={handleChange}
                name='cPassword'
            />
           
           <input
        type="checkbox"
        name="isNews"
        onChange={handleChange}
        checked={formData.isNews}
        className='check'

        />
         <label htmlFor="isNew">I want to join newsletter</label><br/>
          
            <br />
       
        <button className="btn" onClick={clickMe} >Submitt</button>
        </div>
        </center>

    )
}
