import React from 'react';
import Dropdown from './DropDown';

const  DropList= () => {
  // Define dropdown titles and options
  const dropdowns = [
    {
      title: 'Introduction to Python',
      options: ['What is Python and history of Python', 'Unique features of Python ', 'Python-2 and Python-3 differences','Installing Python ',' Setup Python Development Environmen'],
    },
    
    {
      title: ' Important Programming Basics in Python',
      options: ['Python Keywords and Indentation ', 'Comments ', 'Python Basic Data Types ','Python Variables ','Operators in Python ','Strings in Python ','Getting User Input  ','First Python Program'],
    },
    
     {
      title: ' Loops & Control Statements',
      options: [ 'Simple if', ' if-else',' nested if','If-elif-else','for loop','while loop',' Break & Continue Statements'],   
      },
    {
      title: 'Functions, Modules & Packages in Python',
      options: ['Python user defined functions', 'Defining and calling functions', 'Function parameters',' Function scope and global vs local variables','Lambda functions','  Anonymous functions','Creating and using modules','Importing modules and namespaces',' The __name__ and __main__ keywords',' Creating and using packages','Using the standard library and external libraries.']
      
    },
    {
      title: 'Data Structures in Python',
      options: ['Lists in Python', 'Lists as Stacks', 'Lists as Queues ','Tuples in Python','Understanding Del statement','Understanding Iterators ','Generators, Comprehensions and Lambda',' Expressions ','Understanding and using Ranges','Python Dictionaries ','More on Dictionaries ','Sets','Python Sets Examples'],
    },
    {  
      title: 'Exception Handling in Python',
      options: ['Raising Exceptions', 'Handling Exceptions', ' Creating custom Exceptions',' Using try ','Using except',' Using finally'],
    },
    {
      title: 'Multithreading in Python',
      options: ['Creating threads', 'Thread synchronization', ' Thread pools ','Multiprocessing Module'],
        },
    {
      title: 'File Handling (I/O) in Python',
      options: [' Reading and writing text files ', 'Writing Text Files  ', 'Appending to Files and Challenge ','Writing Binary Files Manually ','Using Pickle to Write Binary Files '],
    },
    {
      title: 'Collections in Python',
      options: ['Understanding the basics of Collections'],
    },
    {
      title: 'Object Oriented Programming in Python',
      options: ['Destroying Objects', 'Built-In Class Attributes  ', 'Accessing attributes ','Mastering Polymorphism in Python  ','Mastering Inheritance in Python ',' Mastering Encapsulation in Python  ',' Defining and using  Objects',' Defining and using Classes'],
    },
    {
      title: 'Python Regular Expresion',
      options: ['What are regular expressions? ', 'The match Function', 'The search Function','Matching vs searching ','Search and Replace ','Extended Regular Expressions ','Wildcard'],
    },
     {
      title: 'Database Connectivity in Python',
      options: ['Understanding relational databases', 'Understanding the role of  SQL', 'Creating and connecting to databases using MySQL or Oracle','Understanding the concept of tables',' Understanding fields and primary keys','Creating tables','Inserting data into tables',' Querying data using SQL','Delete records from tables ','Error handling']
    },
    {
      title: 'Network Programing',
      options: [' Introduction to Sockets', 'Understanding Clients', ' Understanding Server','Handling http requests'],
    }, 
  
  
  ];

  return (
    <div>
      {dropdowns.map((dropdown, index) => (
        <Dropdown key={index} title={dropdown.title} options={dropdown.options} />
      ))}
    </div>
  );
};

export default DropList;
