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
        <div className='about-us p-4 border border-solid border-gray-400 rounded-lg shadow-md shadow-slate-400 hover:shadow-blue-500'>
             <div>
            <h4>People Used Our App:{count}</h4>
        </div>
        <div className='User p-4  text-justify m-4 bg-gray-300 rounded-md'>
            <img className='profile w-24 rounded-full my-0 mx-auto' src={avatar_url}alt="profile"/>
            <h3 className='p-2'>Name:{name}</h3>
            <h3 className='p-2'>Email:<a className='text-blue-700' href={"mailto:"+email}target='_blank'>{email}</a></h3>
            <h3 className='p-2'>Location:{location}</h3>
            <p className='p-2'>Contact:<a className='text-blue-900' href={Contact}target='_blank'>Twitter</a></p>
            <button className='px-3 py-1 rounded-lg  bg-gray-100 ease-in duration-300' onClick={()=>{
              this.setState({count:this.state.count+1})
            }}>Inc</button>
        </div>
       
        </div>
    )
}
}
export default User;