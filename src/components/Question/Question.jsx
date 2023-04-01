import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <>
        <div className='all'>
            
            <header className="header">
                <h1>Assignment Questions :</h1>
            </header>

            <main className='main'>

                <div>

                 <div>
                    <h4> 1. what is the difference between props and state in react ?</h4>
                    <p>props are used to pass data from a parent component to a child component, and are immutable. State is used to manage data within a component, and can be updated by the component itself.</p>
                 </div>
                 <div>
                    <h4> 2. How does useState work in react ?</h4>
                    <p>In react useState is a built-in hook in React that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update the state value.</p>
                 </div>
                 <div>
                    <h4> 3. What else can UseEffect do other than load data in react ?</h4>
                    <p>The useEffect hook in React is used to manage side effects, which are any tasks that must be performed outside of the normal React rendering cycle.</p>
                 </div>
                 <div>
                    <h4>  4. How does react work ?</h4>
                    <p>React is a JavaScript library that helps developers build user interfaces. It uses a virtual DOM to efficiently update the UI, making it faster and more responsive. React components manage their own state and can interact with other components through props.</p>
                 </div>


                </div>

                
            </main>
        </div>
        </>
    );
};

export default Question;