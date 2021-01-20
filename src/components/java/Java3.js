import React from 'react'
import Tutorial from '../Tutorial'
import {SiJava} from 'react-icons/si'
const Java1 = () => {
    return (
        <div>
          <Tutorial icons = {<SiJava/>} name = "JAVA" language = "java" next="/Java4" 
          theoryContent = {
                   <p>
                       <h3>Java Constructors<hr/></h3>
                        <p>In this tutorial, we will learn about Java constructors, their types, and how to use them with the help of examples.</p>

                      

                       <h4>What is a Constructor?<hr/></h4>
                       <p>A constructor in Java is similar to a method that is invoked when an object of the class is created.</p>
                       <p>Unlike Java methods, a constructor has the same name as that of the class and does not have any return type. For example,</p>
                       <div class="card card-body">
                            <pre>
                                {`class Test {
  Test() {
    // constructor body
  }
}
`}
                            </pre>      
                         </div>
    
   <p>Here, Test() is a constructor. It has the same name as that of the class and doesn't have a return type.</p>
                                
  
                       <h4>Java No-Arg Constructors<hr/></h4>
                       Similar to methods, a Java constructor may or may not have any parameters (arguments).
                        If a constructor does not accept any parameters, it is known as a no-argument constructor.
                      
                       <div class="card card-body">
                            <pre>
                                {`private Constructor() {
   // body of the constructor
}
`}
                            </pre>      
                         </div>

                         <h4>Java Parameterized Constructor<hr/></h4>
                         A Java constructor can also accept one or more parameters.
                        Such constructors are known as parameterized constructors (constructor with parameters).


                       <div class="card card-body">

                            <pre>
                                {`class Main {

String languages;

// constructor accepting single value
Main(String lang) {
  languages = lang;
  System.out.println(languages + " Programming Language");
}

public static void main(String[] args) {

  // call constructor by passing a single value
  Main obj1 = new Main("Java");
  Main obj2 = new Main("Python");
  Main obj3 = new Main("C");
}
}
`}
                            </pre>      
                         </div>





                         <h4>Java No-Arg Constructors<hr/></h4>
                       Similar to methods, a Java constructor may or may not have any parameters (arguments).
                        If a constructor does not accept any parameters, it is known as a no-argument constructor.
                      
                       <div class="card card-body">
                            <pre>
                                {`private Constructor() {
   // body of the constructor
}
`}
                            </pre>      
                         </div>

                         <h4>Java Default Constructor<hr/></h4>
                         If we do not create any constructor, the Java compiler automatically create a no-arg constructor during the execution of the program. 
                         This constructor is called default constructor.




                       <div class="card card-body">

                            <pre>
                                {`class Main {

int a;
boolean b;

public static void main(String[] args) {

  // A default constructor is called
  Main obj = new Main();

  System.out.println("Default Value:");
  System.out.println("a = " + obj.a);
  System.out.println("b = " + obj.b);
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

export default Java1
