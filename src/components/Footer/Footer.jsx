import React, { useEffect, useState } from 'react';
import './Footer.css'

const Footer = () => {



  return (
    <div className='container px-md-5 mt-3 mb-5 text-light'>



      <div className='question-div'>
        <hr />
        <header className="mt-4">
          <h2 className="text-center">Assignment Questions :</h2>
        </header>




        <main className='main'>


          <div>
            <div>
              <h2>1. what is the difference between props and state in react ?</h2>

                 <div className="table-container">
                 <table class="table">
  <thead>
    <tr className='tr'>
      <th scope="col">Differences</th>
      <th scope="col">Props</th>
      <th scope="col">State</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Component Data Behaviour</th>
      <td>Receives data from outside with props</td>
      <td>Create and manage data within state</td>
      
    </tr>
    <tr>
      <th scope="row">Data Role</th>
      <td>To pass data between different components</td>
      <td>To manage data within components</td>
      
    </tr>
    <tr>
      <th scope="row">Data Accessibility</th>
      <td>Data from props is read-only, cannot be modified</td>
      <td>Data can be modified within component but cannot be accessed from outside</td>
      
    </tr>
    <tr>
      <th scope="row">Initial Value Requirement</th>
      <td>Passed from parent component, can be empty</td>
      <td>Needs an initial value, can get initial value from parent component</td>
      
    </tr>
    <tr>
      <th scope="row">Permissions</th>
      <td>Read only</td>
      <td>Read and write</td>
      
    </tr>
   
  </tbody>
</table>
                 </div>
              

            </div>
            <div>
              <h2>2. How does useState work in react ?</h2>

              <p> You create a functional component and throw some React hook at it that tracks state, can also update it, and it just works.</p>


            </div>
            <div>
              <h2>3. What else can UseEffect do other than load data in react ?</h2>

              <p> The useEffect hook in React is used to manage side effects, which are any tasks that must be performed outside of the normal React rendering cycle.</p>


            </div>
            <div>
              <h2> 4. How does react work ?</h2>

              <p>  React is a JavaScript library that helps developers build user interfaces. It uses a virtual DOM to efficiently update the UI, making it faster and more responsive. React components manage their own state and can interact with other components through props.</p>

            </div>
          </div>

        </main>

      </div>

      

    </div >
    
  );
};

export default Footer;