import { useState, useEffect } from "react";

const Home = () => {

    // const name = "John";
    // let Age = 20;

    //useState hook
    const [name, setName] = useState('John');
    const [age, setAge] = useState(20);
    const [car, setCar] = useState("BMW");

    //useEffect hook
    useEffect(() => {
        console.log('useEffect ran');
        console.log(car);
    }, [car]);

    const changeTheName = () => {
        setName('kenadi');
        setAge(35);
    }

    const handleClick = () => {
        console.log("Hello, Ninjas");
    }
    
    const handleClickAgain = (name, e) => {
        console.log("Hello " + name, e.target);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <br /> 
            <button onClick={(e) => handleClickAgain('Mario', e)} >Click me again </button>
            <br />
            <div>
                <p><br /><b><u>Usage Of the Hooks</u></b></p><br/>
                { name } is { age } old.
            </div>
            <button onClick={changeTheName}>Click me to change</button>
            <div>
                <p>change the car model</p><br/>
                Car name is : { car }
            </div>
            <button onClick={() => setCar('BENZ')}>Change Car</button>
        </div>
    );
}
 
export default Home;