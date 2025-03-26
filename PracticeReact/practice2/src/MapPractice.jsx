import React from "react";

let user = { name: "soma", age: 20 };
let { name, age } = user;
const cars = ["Ford", "BMW", "Audi"];
let foo = ["one", "two", "three"];

function Car(props){
    return <li>I am a {props.brand}</li>
}

function MapPractice() {

    return(
        <div>
            <h1>map 출력하기</h1>
            <ul>
                <li>{foo[0]}</li>
                <li>{foo[1]}</li>
                <li>{foo[2]}</li>
                {foo.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                <Car brand = {cars[0]}/>
                <Car brand = {cars[1]}/>
                <Car brand = {cars[2]}/>
                {cars.map((item)=>(
                    <Car brand={item}/>
                ))}
            </ul>
        </div>
    );

}

export default MapPractice
