const ContactUs = ()=>{
    return(
        <div className="Contact-form">
            <form className="form">
            <div className="details" >
                <input type="text" placeholder="Name"/>
                
                <input type="email"placeholder="email"/>
                </div>
                <div className="submit">
                    <input type="number" placeholder="ph-(+91) 123-456-789"/>
                    
                </div>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}
export default ContactUs;