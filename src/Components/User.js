import React from 'react';
class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,

            name:"Dummy Namr",
            Location: "default"
        }
        console.log(this.props.name+" Child Cons")  

    }
    async componentDidMount(){
        // try to clean the mess in will Un mount
        this.timer=setInterval(() =>{
            console.log("Timer...");
     },1000)
        const data= await fetch("https://api.github.com/users/ArulJyothi1302");
        const json =await data.json();
       
        this.setState({
            name:json.name,
            location:json.location,
            avatar_url:json.avatar_url
        })
        
    }
    componentDidUpdate(){
        console.log("Updated....");
       
    }
    componentWillUnmount(){
      clearInterval(this.timer);
        console.log("Varataaaa");
    }
render(){
  
    const {email,Contact}=this.props
    const {name,location,avatar_url}=this.state
    const {count}=this.state;
    console.log(name+" render");
    return (
        <div className='about-us'>
             <div>
            <h4>People Used Our App:{count}</h4>
        </div>
        <div className='User'>
            <img className='profile' src={avatar_url}alt="profile"/>
            <h3>Name:{name}</h3>
            <h3>Email:{email}</h3>
            <h3>Location:{location}</h3>
            <p>Contact:<a href={Contact}target='_blank'>Twitter</a></p>
            <button onClick={()=>{
              this.setState({count:this.state.count+1})
            }}>Inc</button>
        </div>
       
        </div>
    )
}
}
export default User;