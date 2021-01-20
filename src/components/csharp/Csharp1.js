import React from 'react'
import {SiCsharp} from 'react-icons/si'
import Tutorial from '../Tutorial'
const Csharp1 = () => {
    return (
        <div>
            <Tutorial icons = {<SiCsharp/>} name = "C-SHARP" language = "Csharp" next="/Csharp2"
             theoryContent = {
                <p>
                    <h4>C# Hello World - Your First C# Program<hr/></h4>
                     <p>The “Hello World!” program is often the first program we see when we dive into a new language. It simply prints Hello World! on the output screen.</p>
                    <div class="card card-body">
                         <pre>
                             {`// Hello World! program
namespace HelloWorld
{
    class Hello {         
        static void Main(sting[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}
`}
                         </pre>      
                      </div>
 

                             

                    <h4>Alternative Hello World! implementation<hr/></h4>
                    
                    <div class="card card-body">
                         <pre>
                             {`// Hello World! program
using System;
 
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}

`}
                         </pre>      
                      </div>

                    

                    
                      
                    
                     
                </p> 
             }
             />


        </div>
    )
}

export default Csharp1
