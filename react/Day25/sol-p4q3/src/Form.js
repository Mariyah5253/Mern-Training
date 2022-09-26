import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isFriendly:true,
    })
    
    function handleChange(event) {
        setFormData(prevFormData =>{
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        }
            
        )
    }
    
  
    
    return (
        <form>
            <input
                type="text"
                className="input"
                placeholder="First Name"
                onChange={handleChange}
                name='firstName'
            />
            <input
                type="text"
                className="input"
                placeholder="Last Name"
                onChange={handleChange}
                name='lastName'
            />
                <input
                type="email"
                className="input"
                placeholder="Email "
                onChange={handleChange}
                name='email'
            />
           
            <br />
        <textarea 
        className="input comments"
        placeholder="Comments "
        onChange={handleChange}
        name='comments'

        />
        <input
        type="checkbox"
        name="isFriendly "
        onChange={handleChange}
        checked={formData.isFriendly}
        className='check'

        />
         <label htmlFor="isFriendly">Are You Friendly?</label><br/>
                <label>Frist Name is : {formData.firstName}</label>  <br />
        <label>Last Name is :{formData.lastName}</label><br/>
        <label> email is :{formData.email}</label>
        
        </form>
    )
}
