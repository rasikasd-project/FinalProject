import React from 'react'
import Tutorial from '../Tutorial'
import {SiCplusplus} from 'react-icons/si'

const Cpp1 = () => {
    return (
        <div>
            <Tutorial icons = {<SiCplusplus/>} name = "C++" language = "cpp" next="Cpp3.js"
                theoryContent = {
                   <p>
                       <h3>C-- Variables, Literals and Constants<hr/></h3>
                        In this tutorial, we will learn about variables, literals, and constants in C++ with the help of examples.
                       <h4>C++ Variables</h4>
                       In programming, a variable is a container (storage area) to hold data.To indicate the storage area, each variable should be given a unique name (identifier). For example, 
                       <div class="card card-body">
                            <pre>
                                {`int age = 14;`}
                            </pre>      
                         </div>
                        Here, age is a variable of the int data type, and we have assigned an integer value 14 to it.
                        The value of a variable can be changed, hence the name variable.
                        <div class="card card-body">
                            <pre>
                                {`int age = 14;`}
                            </pre>      
                        </div>
                   </p> 
                }
            
            />
        </div>
    )
}

export default Cpp1
