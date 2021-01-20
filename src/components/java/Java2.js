import React from 'react'
import Tutorial from '../Tutorial'
import {SiJava} from 'react-icons/si'
const Java1 = () => {
    return (
        <div>
          <Tutorial icons = {<SiJava/>} name = "JAVA" language = "java" next="/Java3" 
          theoryContent = {
                   <p>
                       <h3>Java Methods<hr/></h3>
                        <p>A method is a block of code that performs a specific task.</p>

                      

                       <h4>Declaring a Java Method<hr/></h4>
                       The syntax to declare a method is:
                       <div class="card card-body">
                            <pre>
                                {`returnType methodName() {
  // method body
}
`}
                            </pre>      
                         </div>
    Here,
   <p> 1. returnType - It specifies what type of value a method returns For example if a method has an int return type then it returns an integer value.If the method does not return a value, its return type is void.</p>
   <p> 2. methodName - It is an identifier that is used to refer to the particular method in a program.</p>
<p>3. method body - It includes the programming statements that are used to perform some tasks. The method body is enclosed inside the curly braces { }.</p>
<p>For example,</p>

                       <div class="card card-body">
                            <pre>
                                {`int addNumbers() {
// code
}
`}
                            </pre>      
                         </div>

                         
                       <p> In the above example, the name of the method is adddNumbers(). And, the return type is int. We will learn more about return types later in this tutorial.</p>
                        
                   </p> 
                }
                />
            
        </div>
    )
}

export default Java1
