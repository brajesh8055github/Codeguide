import Coursecard from './Coursecard';
import java from '../image/java.jpg';
import css from '../image/javascript.jpg';
import javascript from '../image/AppDevelopment.png';
import Javascript from '../image/DSA-Java.jpg';
import machine from '../image/machinelearning.jpg';
import Backend from '../image/Backend-new.jpg';



let course =[
  {
      img:css,
      title:'Frontend Development Bootcamp',
      price:"₹ 999 Only",
      bestseller:"Best Selling",
      date:'Starts from 1st August 2023',
      time:'7:00 PM to 8:00 PM',
      desc:'Learn complete Frontend Developement with 3+ live projects, Includes HTML5, CSS3, JavaScript, Bootstrap, Git and host your project at free of cost!',
      oprice:'₹ 999 Only',
      sprice:'₹ 2999',
      off:'70% off',
      btn:'Enroll Now',
      courseDuration:"4 weeks - 6 weeks",
      linkedinurl:'https://www.linkedin.com/in/siddesh-jaiswal-3961a6223',
      requirement:"No programming experience needed - We'll teach you everything you need to know",

      syllabus:[
        {
            title:"Introduction to course & Installation of Tools",
            description:"Basic introduction about overall flow of course , roadmap and installation of various tools like VSCode,Git and other.",
            id:"headingOne",
            datatarget:"#collapseOne",
            arialcontrols:"collapseOne"
        },
        {
            title:"Introduction to Git and Basic Git Commands",
            description:"What is Git? and looking basic git commands such as git init , status , add , commit , log , diff.",
            id:"headingTwo",
            datatarget:"#collapseTwo",
            arialcontrols:"collapseTwo"
        },
        {
            title:"Advance Git commands and Github Introduction & Connectivity",
            description:"Git reset hard -soft , Git Branches & working with branches, Git Clone pull & push ,Github Introduction , Github Repository ,Github connectivity to local device.",
            id:"headingThree",
            datatarget:"#collapseThree",
            arialcontrols:"collapseThree"
        },
        {
            title:"Understanding what is HTML and Basic of HTML Tags",
            description:"Understanding the html boiler code and starting up with basic tags like heading , paragraph, anchor, image, font & Media , other semantic and Non semantic tags.",
            id:"headingFour",
            datatarget:"#collapseFour",
            arialcontrols:"collapseFour"
        },
        {
            title:"Advance HTML Tags",
            description:"Form , Input , Textarea , Button , Legends , Fieldset , Order & Unorder List , Table , Iframe , Label , Video & Audio Tag",
            id:"headingFive",
            datatarget:"#collapseFive",
            arialcontrols:"collapseFive"
        },
      ]
  },
   {
      img:Backend,
      title:'Backend Development Bootcamp',
      bestseller:"",
      price:'₹ 1499 Only',
      date:'Starts from 1st August 2023',
      time:'8:00 PM to 9:30 PM',
      desc:'Learn MERN backend development with 3+ live projects, learn how to create servers and intregrate with frontend technologies plus Database and Deployment!',
      oprice:'₹ 1499 Only',
      sprice:'₹ 4999',
      off:'70% off',
      btn:'Enroll Now',
      linkedinurl:'https://www.linkedin.com/in/vishal-vishwajeet',
      requirement:"Must be familiar with HTML , CSS and Javascript advance concepts ",
      courseDuration:"6 weeks - 8 weeks",

      syllabus:[
        {
          title:"Introduction to course",
          description:"What are Different Stacks for WebD & Whats special about MERN above them . Brief on Components of MERN Stack (ReactJS, NodeJS, ExpressJS, MongoDB). Explaining the StructurEnroll Now.",
          id:"headingOne",
          datatarget:"#collapseOne",
          arialcontrols:"collapseOne"
      },
      {
          title:"Starting with React",
          description:"Installation of require software.Importance and detail explaination about react.Explaining advantages (SPA & its Dynamic Nature).",
          id:"headingTwo",
          datatarget:"#collapseTwo",
          arialcontrols:"collapseTwo"
      },
      {
          title:"React Components , Props and State.",
          description:"What are components , how component can be created , Use of props of getting data and other use of state.",
          id:"headingThree",
          datatarget:"#collapseThree",
          arialcontrols:"collapseThree"
      },
      {
          title:"React Router and Hooks.",
          description:"Making single page application using react router and seeing different hooks example such as useState , useRef , useEffect. ",
          id:"headingFour",
          datatarget:"#collapseFour",
          arialcontrols:"collapseFour"
      },
      {
          title:"React styling and event handler.",
          description:"Styling page using react module css and seeing use of event handling function",
          id:"headingFive",
          datatarget:"#collapseFive",
          arialcontrols:"collapseFive"
      },
      {
          title:"Grocery List Application - Project 1.",
          description:"Creating grocery list web application using reactjs.",
          id:"headingSix",
          datatarget:"#collapseSix",
          arialcontrols:"collapseSix"
      },
      {
          title:"Introduction to Express & Express Routing.",
          description:"Looking what is express , it advantage and use.Setting up Server with GET, POST requests . Creating new router object for handling request from client side.",
          id:"headingSeven",
          datatarget:"#collapseSeven",
          arialcontrols:"collapseSeven"
      },
      {
          title:"Express Middlewares and Coding Authentication",
          description:"Setting of functions that execute during the processing of HTTP requests received by an Express application using express Middlewares & Coding up Authentication & different ways to Authenticate users (JWT vs Traditional Cookies Method).",
          id:"headingEight",
          datatarget:"#collapseEight",
          arialcontrols:"collapseEight"
      },
      {
          title:"Weather Forecasting Application using API",
          description:"Creating full-fledge weather forecasting application using the help of API.",
          id:"headingEight2",
          datatarget:"#collapseEight2",
          arialcontrols:"collapseEight2"
      },

      {
          title:"Introduction to NodeJS and API.",
          description:"Understanding requirement of Nodejs and understanding what is API",
          id:"headingNine",
          datatarget:"#collapseNine",
          arialcontrols:"collapseNine"
      },
      {
          title:"Creating Server and Understanding IP & Ports.",
          description:"Basic NodeJS syntax for Server Creation (With Basic understanding of GET,POST, PUT, DELETE type of Requests). Understanding of IPs & Ports",
          id:"headingTen",
          datatarget:"#collapseTen",
          arialcontrols:"collapseTen"
      },
      {
          title:"Introduction to MongoDB and general setup.",
          description:"What is a Database, types of DBs (MySQL, NoSQL etc.) & advantage of using MongoDB over others.",
          id:"headingEleven",
          datatarget:"#collapseEleven",
          arialcontrols:"collapseEleven"
      },
      {
          title:"Walking through Mongoose module & operator.",
          description:"Different module and operation such as CRUD (create , read  , update , delete)",
          id:"headingTwelve",
          datatarget:"#collapseTwelve",
          arialcontrols:"collapseTwelve"
      },
      {
          title:"Connecting frontend to backend.",
          description:"Making a request from the React Frontend to our Backend to make changes in the Mongoose Collection . A closer look on Authenticating Users.",
          id:"headingThirteen",
          datatarget:"#collapseThirteen",
          arialcontrols:"collapseThirteen"
      },
      {
          title:"News Application - Major Project.",
          description:"Creating Fully Functional News Application with ReactJS Frontend, Node (ExpressJS) Backend APIs & MongoDB as our Database to store. News with an Admin Panel to upload news from with Authentication..",
          id:"headingFourteen",
          datatarget:"#collapseFourteen",
          arialcontrols:"collapseFourteen"
      }
      ]
  },
  {
    img:javascript,
    title:'App Development with Flutter',
    bestseller:"",
    price:'₹ 900 Only',
    date:'Starts from 1st August 2023',
    time:'8:00 PM to 9:30 PM',
    desc:'Learn MERN backend development with 3+ live projects, learn how to create servers and intregrate with frontend technologies plus Database and Deployment!',
    oprice:'₹ 900 Only',
    sprice:'₹ 3000',
    off:'70% off',
    btn:'Enroll Now',
    linkedinurl:'https://www.linkedin.com/in/vishal-vishwajeet',
    requirement:"Must be familiar with HTML , CSS and Javascript advance concepts ",
    courseDuration:"6 weeks - 8 weeks",

    // eslint-disable-next-line no-sparse-arrays
    syllabus:[
    {
        title:"Introduction to course",
        description:"Basic introduction about the course and discussion of roadmap.Understanidng what is dart , flutter and installation of required tool.",
        id:"headingOne",
        datatarget:"#collapseOne",
        arialcontrols:"collapseOne"
    },
    {
        title:"Introduction to Dart",
        description:"Introduction to dart  -Features, Basic syntax, DartPad, Use in Flutter, HELLO WORLD Program.",
        id:"headingTwo",
        datatarget:"#collapseTwo",
        arialcontrols:"collapseTwo"
    },
    {
        title:"Dart Datatype and Collection",
        description:"Dart Data types - constants, numbers, string.Collections- Lists, Sets, Map, Enum, Queue",
        id:"headingFour",
        datatarget:"#collapseFour",
        arialcontrols:"collapseFour"
    },
    {
        title:"FLow Control",
        description:"Flow Control- Asserts,IF-Else, Switch, Loops.",
        id:"headingFive",
        datatarget:"#collapseFive",
        arialcontrols:"collapseFive"
    },
    {
        title:"Dart Functions",
        description:"Dart Functions - Anonymous Functions,Main(), Recursion",
        id:"headingSix",
        datatarget:"#collapseSix",
        arialcontrols:"collapseSix"
    },
    {
        title:"Object Oriented",
        description:"Object-Oriented- Classes-Objects, Keywords, Methods, Interfaces.",
        id:"headingSeven",
        datatarget:"#collapseSeven",
        arialcontrols:"collapseSeven"
    },
    {
        title:"Adding Animation - Shop App",
        description:"Module Introduction ,Animations From Scratch (Completely Manually Controlled) ,Using the AnimatedBuilder Widget ,Working with the AnimatedContainer ,More Built-in Animation & Transition Widgets ,Fading Loaded Images In (And Showing a Placeholder) ,Adding a Hero Transition ,Working with Slivers ,Practice: Animating Order Boxes ,A Fix for the Latest Version of Flutter ,Implementing Custom Route Transitions ,Wrap Up ,Useful Resources & Links",
        id:"headingEight",
        datatarget:"#collapseEight",
        arialcontrols:"collapseEight"
    },
    {
        title:"Error Handling",
        description:"Error handling- Exceptions, try-catch, throw.",
        id:"headingNine",
        datatarget:"#collapseNine",
        arialcontrols:"collapseNine"
    },
    {
        title:"Introduction to Flutter",
        description:"Introduction to flutter- environment setup, architecture, IDE’s.",
        id:"headingTen",
        datatarget:"#collapseTen",
        arialcontrols:"collapseTen"
    },
    {
        title:"FLutter Widgets",
        description:"Flutter Widgets- Visible and invisible, Stateless and Stateful Widget.",
        id:"headingEleven",
        datatarget:"#collapseEleven",
        arialcontrols:"collapseEleven"
    },
    {
        title:"BMI Calculator - Project 1",
        description:"Building a BMI Calculator application using all the concepts that we have learnt so far.",
        id:"headingTwelve",
        datatarget:"#collapseTwelve",
        arialcontrols:"collapseTwelve"
    },
    ,
    {
        title:"Flutter Layouts",
        description:"Flutter Layouts- types of layouts, Layout widgets.",
        id:"headingThirteen",
        datatarget:"#collapseThirteen",
        arialcontrols:"collapseThirteen"
    },
    {
        title:"State Management",
        description:"State management- what is state?, types of state, app life cycle",
        id:"headingFourteen",
        datatarget:"#collapseFourteen",
        arialcontrols:"collapseFourteen"
    },
    {
        title:"Navigation and Routing",
        description:"Navigation and Routing- Routes, Flutter navigation.",
        id:"headingFifteen",
        datatarget:"#collapseFifteen",
        arialcontrols:"collapseFifteen"
    },
    {
        title:"Portfolio - Project 2",
        description:"Building a Portfolio application using all the concepts that we have learnt so far.",
        id:"headingSixteen",
        datatarget:"#collapseSixteen",
        arialcontrols:"collapseSixteen"
    },
    {
        title:"Restful API and Database",
        description:"Restful API and database- API integration, database, local storage.",
        id:"headingSeventeen",
        datatarget:"#collapseSeventeen",
        arialcontrols:"collapseSeventeen"
    },
    {
        title:"Grocery Ordering Application - Project 3",
        description:"Building a grocery ordering application using all the concepts that we have learnt so far.",
        id:"headingEighteen",
        datatarget:"#collapseEighteen",
        arialcontrols:"collapseEighteen"
    }
    ]
},
{
  img:java,
  title:'Data Structures and Algorithms in Java',
  bestseller:"",
  price:'₹ 1799 Only',
  date:'Starts from 1st August 2023',
  time:'8:00 PM to 9:30 PM',
  desc:'Learn MERN backend development with 3+ live projects, learn how to create servers and intregrate with frontend technologies plus Database and Deployment!',
  oprice:'₹ 1799 Only',
  sprice:'₹ 7999',
  off:'70% off',
  btn:'Enroll Now',
  linkedinurl:'https://www.linkedin.com/in/vishal-vishwajeet',
  requirement:"Must be familiar with HTML , CSS and Javascript advance concepts ",
  courseDuration:"6 weeks - 8 weeks",

  syllabus:[
    {
      title:"Introduction to course",
      description:"Basic introduction to course and discussion of roadmap.What is DSA and Importance of learning of DSA.",
      id:"headingOne",
      datatarget:"#collapseOne",
      arialcontrols:"collapseOne"
  },
  {
      title:"Introduction to Java and basic of Java",
      description:" what are variable , Datatypes , Operators ,Conditional Statements ,Iteration Statements(Loops) ,Break & Continue",
      id:"headingTwo",
      datatarget:"#collapseTwo",
      arialcontrols:"collapseTwo"
  },
  {
      title:"Functions , String ",
      description:"Basic syntax of creating functions , string and their implementation.",
      id:"headingThree",
      datatarget:"#collapseThree",
      arialcontrols:"collapseThree"
  },
  {
      title:"Object Oriented Programming",
      description:"Introduction to oops concepts , creating objects and other property of oops.",
      id:"headingFour",
      datatarget:"#collapseFour",
      arialcontrols:"collapseFour"
  },
  {
      title:"1D Array and 2D Array ",
      description:"Introduction to Array , Operation on Array Sum of Element ,Max Element Count , Even Element Pairs With Sum , Introduction to 2D Array Declaration & Initialisation Matrix , Addition Matrix boundary ,Traversal Transpose of matrix , Spiral Traversal of Matrix ,Leetcode Live Problem Solving",
      id:"headingFive",
      datatarget:"#collapseFive",
      arialcontrols:"collapseFive"
  },
  {
      title:"Time & Space Complexity ",
      description:"Calculating time and space complexity for different problems.",
      id:"headingSix",
      datatarget:"#collapseSix",
      arialcontrols:"collapseSix"
  },
  {
      title:"Searching and Sorting",
      description:"Introduction to binary search, Search Element, First Index Occurrence, Last index Occurrence, Count Frequency, Square Root, Search in infinite size, Search in Rotated Sorted Array, Leetcode Live problem solving",
      id:"headingSeven",
      datatarget:"#collapseSeven",
      arialcontrols:"collapseSeven"
  },
  {
      title:"Bit Manipulation",
      description:"Bitwise Operators in CPP , Check if Kth bits Sets or not , Count set bits , Power of Two , One & Two odd occuring , Leetcode Live Problem Solving",
      id:"headingEight",
      datatarget:"#collapseEight",
      arialcontrols:"collapseEight"
  },
  {
      title:"Recurrsion and Backtracking",
      description:"Introduction to Recursion , Factorial , Fibonacci Series , Print 1 to N using Recursion , Print N to 1 Using Recursion ,Print Array Elements ,Backtracking Introduction , live problem solving on leetcode",
      id:"headingNine",
      datatarget:"#collapseNine",
      arialcontrols:"collapseNine"
  },
  {
      title:" Linked List",
      description:"Introduction to Linked list , Insert first , Insert last , Insert at , Remove at , Length of Linked list , Print the linked list , Search in Linked list , Middle of linked list , Leetcode Live problem Solving",
      id:"headingTen",
      datatarget:"#collapseTen",
      arialcontrols:"collapseTen"
  },
  {
      title:"Stack - Linear Data Structure",
      description:"Introduction to Stacks , Operation on stack , Reverse a String , Reverse a number , Balanced parenthesis , Leetcode Live problem solving",
      id:"headingTwelve",
      datatarget:"#collapseTwelve",
      arialcontrols:"collapseTwelve"
  },
  {
      title:"Queue - Linear Data Structure",
      description:"Introduction to Queue , Operation on Queues , Printing the elements , Leetcode Live problem solving",
      id:"headingThirteen",
      datatarget:"#collapseThirteen",
      arialcontrols:"collapseThirteen"
  },
  {
      title:"Binary Tree",
      description:"Introduction to binary tree , Tree Traversal , Height of binary tree , Level order Traversal , Maximum in binary tree , Print left view of binary Tree , Maximum width of binary tree , Diameter of binary tree , LCA of binary tree , Leetcode Live problem solving",
      id:"headingFourteen",
      datatarget:"#collapseFourteen",
      arialcontrols:"collapseFourteen"
  },
  {
      title:"Binary Search Tree",
      description:"Introduction to BST , Search in BST , Insert in BST , Deletion in BST , Floor & Ceil in BST , AVL tree ,Leetcode Live problem solving",
      id:"headingFifteen",
      datatarget:"#collapseFifteen",
      arialcontrols:"collapseFifteen"
  },
  {
      title:"Heap",
      description:"Introduction to Heap , Function on Priority Queue , K largest Element , Profit maximization , Leetcode Live problem solving ",
      id:"headingSixteen",
      datatarget:"#collapseSixteen",
      arialcontrols:"collapseSixteen"
  },
  {
      title:"Graph",
      description:"Introduction to Graph , Graph Representation , Breadth first Search (BFS) , Depth First Search (DFS) , Shortest path in unweighted graph , Detect cycle , Topological Sorting , Different Algorithms in graph , Leetcode Live problem solving",
      id:"headingSeventeen",
      datatarget:"#collapseSeventeen",
      arialcontrols:"collapseSeventeen"
  },
  {
      title:"Dynamic Programming",
      description:"Introduction to Dynamic Programming , Climbing Stairs , Fibonacci Number , Min Cost Climbing Stairs , House Robber , Nth tribonacci Problem , 0-1 knapsack , Target sum , Best time to buy & Sell stock , Jump game , Leetcode Live problem solving",
      id:"headingEighteen",
      datatarget:"#collapseEighteen",
      arialcontrols:"collapseEighteen"
  }
  ]
},
{
  img:Javascript,
  title:'Data Structures and Algorithms in C++',
  bestseller:"",
  price:'₹ 1499 Only',
  date:'Starts from 1st August 2023',
  time:'8:00 PM to 9:30 PM',
  desc:'Learn MERN backend development with 3+ live projects, learn how to create servers and intregrate with frontend technologies plus Database and Deployment!',
  oprice:'₹ 1499 Only',
  sprice:'₹ 4999',
  off:'70% off',
  btn:'Enroll Now',
  linkedinurl:'https://www.linkedin.com/in/vishal-vishwajeet',
  requirement:"Must be familiar with HTML , CSS and Javascript advance concepts ",
  courseDuration:"6 weeks - 8 weeks",

  syllabus:[
    {
      title:"Introduction to course",
      description:"Basic introduction to course and discussion of roadmap.What is DSA and Importance of learning of DSA.",
      id:"headingOne",
      datatarget:"#collapseOne",
      arialcontrols:"collapseOne"
  },
  {
      title:"Introduction to C++ and basic of C++",
      description:" what are variable , Datatypes , Operators ,Conditional Statements ,Iteration Statements(Loops) ,Break & Continue",
      id:"headingTwo",
      datatarget:"#collapseTwo",
      arialcontrols:"collapseTwo"
  },
  {
      title:"Functions , Pointer , String , Structure and Union ",
      description:"Basic syntax of creating functions , pointer , string , structure and union and their implementation.",
      id:"headingThree",
      datatarget:"#collapseThree",
      arialcontrols:"collapseThree"
  },
  {
      title:"Object Oriented Programming and STL",
      description:"Introduction to oops concepts , creating objects and other property of oops.And looking into Standard Template Library",
      id:"headingFour",
      datatarget:"#collapseFour",
      arialcontrols:"collapseFour"
  },
  {
      title:"1D Array and 2D Array ",
      description:"Introduction to Array , Operation on Array Sum of Element ,Max Element Count , Even Element Pairs With Sum , Introduction to 2D Array Declaration & Initialisation Matrix , Addition Matrix boundary ,Traversal Transpose of matrix , Spiral Traversal of Matrix ,Leetcode Live Problem Solving",
      id:"headingFive",
      datatarget:"#collapseFive",
      arialcontrols:"collapseFive"
  },
  {
      title:"Time & Space Complexity ",
      description:"Calculating time and space complexity for different problems.",
      id:"headingSix",
      datatarget:"#collapseSix",
      arialcontrols:"collapseSix"
  },
  {
      title:"Searching and Sorting",
      description:"Introduction to binary search, Search Element, First Index Occurrence, Last index Occurrence, Count Frequency, Square Root, Search in infinite size, Search in Rotated Sorted Array, Leetcode Live problem solving",
      id:"headingSeven",
      datatarget:"#collapseSeven",
      arialcontrols:"collapseSeven"
  },
  {
      title:"Bit Manipulation",
      description:"Bitwise Operators in CPP , Check if Kth bits Sets or not , Count set bits , Power of Two , One & Two odd occuring , Leetcode Live Problem Solving",
      id:"headingEight",
      datatarget:"#collapseEight",
      arialcontrols:"collapseEight"
  },
  {
      title:"Recurrsion and Backtracking",
      description:"Introduction to Recursion , Factorial , Fibonacci Series , Print 1 to N using Recursion , Print N to 1 Using Recursion ,Print Array Elements ,Backtracking Introduction , live problem solving on leetcode",
      id:"headingNine",
      datatarget:"#collapseNine",
      arialcontrols:"collapseNine"
  },
  {
      title:" Linked List",
      description:"Introduction to Linked list , Insert first , Insert last , Insert at , Remove at , Length of Linked list , Print the linked list , Search in Linked list , Middle of linked list , Leetcode Live problem Solving",
      id:"headingTen",
      datatarget:"#collapseTen",
      arialcontrols:"collapseTen"
  },
  {
      title:"Stack - Linear Data Structure",
      description:"Introduction to Stacks , Operation on stack , Reverse a String , Reverse a number , Balanced parenthesis , Leetcode Live problem solving",
      id:"headingTwelve",
      datatarget:"#collapseTwelve",
      arialcontrols:"collapseTwelve"
  },
  {
      title:"Queue - Linear Data Structure",
      description:"Introduction to Queue , Operation on Queues , Printing the elements , Leetcode Live problem solving",
      id:"headingThirteen",
      datatarget:"#collapseThirteen",
      arialcontrols:"collapseThirteen"
  },
  {
      title:"Binary Tree",
      description:"Introduction to binary tree , Tree Traversal , Height of binary tree , Level order Traversal , Maximum in binary tree , Print left view of binary Tree , Maximum width of binary tree , Diameter of binary tree , LCA of binary tree , Leetcode Live problem solving",
      id:"headingFourteen",
      datatarget:"#collapseFourteen",
      arialcontrols:"collapseFourteen"
  },
  {
      title:"Binary Search Tree",
      description:"Introduction to BST , Search in BST , Insert in BST , Deletion in BST , Floor & Ceil in BST , AVL tree ,Red Black Tree ,Leetcode Live problem solving",
      id:"headingFifteen",
      datatarget:"#collapseFifteen",
      arialcontrols:"collapseFifteen"
  },
  {
      title:"Heap",
      description:"Introduction to Heap , Function on Priority Queue , K largest Element , Profit maximization , Leetcode Live problem solving ",
      id:"headingSixteen",
      datatarget:"#collapseSixteen",
      arialcontrols:"collapseSixteen"
  },
  {
      title:"Graph",
      description:"Introduction to Graph , Graph Representation , Breadth first Search (BFS) , Depth First Search (DFS) , Shortest path in unweighted graph , Detect cycle , Topological Sorting , Different Algorithms in graph , Leetcode Live problem solving",
      id:"headingSeventeen",
      datatarget:"#collapseSeventeen",
      arialcontrols:"collapseSeventeen"
  },
  {
      title:"Dynamic Programming",
      description:"Introduction to Dynamic Programming , Climbing Stairs , Fibonacci Number , Min Cost Climbing Stairs , House Robber , Nth tribonacci Problem , 0-1 knapsack , Target sum , Best time to buy & Sell stock , Jump game , Leetcode Live problem solving",
      id:"headingEighteen",
      datatarget:"#collapseEighteen",
      arialcontrols:"collapseEighteen"
  }
  ]
},
{
  img:machine,
  title:'Machine Learning with Python',
  bestseller:"",
  price:'₹ 1199 Only',
  date:'Starts from 1st August 2023',
  time:'8:00 PM to 9:30 PM',
  desc:'Learn MERN backend development with 3+ live projects, learn how to create servers and intregrate with frontend technologies plus Database and Deployment!',
  oprice:'₹ 1199 Only',
  sprice:'₹ 3999',
  off:'70% off',
  btn:'Enroll Now',
  linkedinurl:'https://www.linkedin.com/in/vishal-vishwajeet',
  requirement:"Must be familiar with HTML , CSS and Javascript advance concepts ",
  courseDuration:"6 weeks - 8 weeks",

  syllabus:[
    {
      title:"Introduction to course",
      description:"Basic course information and roadmap.Discussion of indepth syllabus and concepts for the overall course",
      id:"headingOne",
      datatarget:"#collapseOne",
      arialcontrols:"collapseOne"
  },
  {
      title:"Introduction to Python",
      description:"Installing Python and setting up the development environment Basic Input/Output operations. Data types and structures Data types, type casting, operators, strings and methods Understanding the basic syntax and data structures (lists, dictionaries, tuples, sets)",
      id:"headingTwo",
      datatarget:"#collapseTwo",
      arialcontrols:"collapseTwo"
  },
  {
      title:"Control structure , Functions and Modules",
      description:"If-else conditional statement , else-if ladder , while , do-while , for loop , Jump statement .Syntax for creating function , types of function and modules.",
      id:"headingThree",
      datatarget:"#collapseThree",
      arialcontrols:"collapseThree"
  },
  {
      title:"Numpy Library",
      description:"Introduction to Numpy - Creating arrays and matrices.Array indexing, slicing, and reshaping.Basic array mathematics operations",
      id:"headingFour",
      datatarget:"#collapseFour",
      arialcontrols:"collapseFour"
  },
  {
      title:"Pandas Library and Data Analysis using Pandas",
      description:"-Introduction to Pandas -Creating dataframes , Indexing and slicing dataframes.Manipulating dataframes (adding/deleting rows and columns)Grouping and aggregating data",
      id:"headingSix",
      datatarget:"#collapseSix",
      arialcontrols:"collapseSix"
  },
  {
      title:"Matplotlib Library",
      description:"Introduction to Matplotlib. Plotting line graphs, scatter plots, bar plots, and histograms. Customizing plots with labels, titles, and legends .Saving plots to image files",
      id:"headingSeven",
      datatarget:"#collapseSeven",
      arialcontrols:"collapseSeven"
  },
  {
      title:"Machine Learning Fundamentals",
      description:"How to get Datasets - Understanding the basics of machine learning.Types of machine learning algorithms (supervised, unsupervised, reinforcement learning), Overfitting and underfitting",
      id:"headingEight",
      datatarget:"#collapseEight",
      arialcontrols:"collapseEight"
  },
  {
      title:"Data Preprocessing",
      description:"Getting the dataset.Importing libraries , Importing datasets , Finding Missing Data ,Encoding Categorical Data ,Splitting dataset into training and test set ,Feature scaling.",
      id:"headingNine",
      datatarget:"#collapseNine",
      arialcontrols:"collapseNine"
  },
  {
      title:"Linear Regression",
      description:"Introduction to linear regression .Building a simple linear regression model in Python ,Evaluating model performance",
      id:"headingTen",
      datatarget:"#collapseTen",
      arialcontrols:"collapseTen"
  },
  {
      title:"House Price Prediction - Project 1",
      description:"Building an house price prediction system",
      id:"headingTen2",
      datatarget:"#collapseTen2",
      arialcontrols:"collapseTen2"
  },
  {
      title:"Logistic Regression",
      description:"Introduction to logistic regression .Building a logistic regression model in Python , Evaluating model performance",
      id:"headingEleven",
      datatarget:"#collapseEleven",
      arialcontrols:"collapseEleven"
  },
  {
      title:"Decision Trees",
      description:"Introduction to decision trees .Building a decision tree model in Python",
      id:"headingTwelve",
      datatarget:"#collapseTwelve",
      arialcontrols:"collapseTwelve"
  },
  {
      title:"Cancer Classification - Project 2",
      description:"Building full-fledge cancer classification system",
      id:"headingThirteen",
      datatarget:"#collapseThirteen",
      arialcontrols:"collapseThirteen"
  },
  {
      title:"K-Nearest Neighbors",
      description:"Introduction to K-Nearest Neighbors.Building a K-Nearest Neighbors model in Python , Evaluating model performance",
      id:"headingFifteen",
      datatarget:"#collapseFifteen",
      arialcontrols:"collapseFifteen"
  },
  {
      title:"Support Vector Machines",
      description:"Introduction to Support Vector Machines .Building a Support Vector Machine model in Python , Evaluating model performance",
      id:"headingSixteen",
      datatarget:"#collapseSixteen",
      arialcontrols:"collapseSixteen"
  },
  {
      title:"Unsupervised Learning",
      description:"Introduction to Clustering - KMeans Clustering .Building a KMeans Clustering model in Python , Evaluating model performance",
      id:"headingSeventeen",
      datatarget:"#collapseSeventeen",
      arialcontrols:"collapseSeventeen"
  },
  {
      title:"Stock Price Prediction - Final Project",
      description:"Implementing a complete machine learning project. Preparing data for analysis , Training a model ,Making predictions and evaluating model performance",
      id:"headingEighteen",
      datatarget:"#collapseEighteen",
      arialcontrols:"collapseEighteen"
  }
  ]
} 
]


function Courses() {
  return (
    <div>
      <div class="feed">
        <h1>Popular Courses</h1>
        <p>Our key courses</p>
      </div>
     <div className="course">
      {
        course.map((x)=>{
          return(
            <Coursecard img={x.img} title={x.title} price={x.price} date={x.date} time={x.time} desc={x.desc} oprice={x.oprice} sprice={x.sprice} syllabus={x.syllabus} off={x.off} btn={x.btn} require={x.requirement} coursedur={x.courseDuration} linkin={x.linkedinurl} bestsell={x.bestseller}/>
          )
        })
      }
      </div>
    </div>
    
    

  )
}
export default Courses;