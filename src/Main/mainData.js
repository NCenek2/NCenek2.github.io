export const mainData = {
  title: "Welcome",
  text1: `Hello, my name is Nicholas Cenek. I am an enthusistic 
  programmer who enjoys learning and applying the skills that I have 
  learned into beneficial, real-life projects. This website is 
  self-created, and has been inspired by the passion that I have for 
  software engineering. Recently, I have created a full-stack quiz application
  called Rigel, utilizing Postgres, TypeScript, React, Node.js and JSON Web Tokens (JWT). Creating Rigel
  allowed me to learn about secure authentication with JWTs, how to establish a
  more maintainable development process with Typescript, and how to organize data  
  in a relational way with SQL.`,
  text2: `I originally had all my projects split into different categories,
  but have since decided to break all my most important/ favorite projects together on this page.
  I have another section that describes my first programming game created with Matlab.
  Thanks for visiting, and I hope you enjoy!`,
};

const sectionsData = [
  {
    title: "Rigel",
    image: "images/rigel.JPG",
    text: `Rigel is a studying application similar to Quizlet that allows users to create decks for studying. If you want to be prepared for your next exam. Give Rigel a try!`,
    link: "",
    shown: false,
    text2: (
      <div className="generic-subsections">
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://ncenek2.github.io/rigel/"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://github.com/NCenek2/NCenek2.github.io/blob/main/src/Front%20End%20Development/Quizlet"
          target="_blank"
          rel="noreferrer"
        >
          View Code
        </a>
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://youtu.be/m1hJ9tIbq3Q"
          target="_blank"
          rel="noreferrer"
        >
          Full-Stack Video
        </a>
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://github.com/NCenek2/Rigel"
          target="_blank"
          rel="noreferrer"
        >
          Full-Stack Code
        </a>
      </div>
    ),
  },
  {
    title: "Sonix",
    image: "images/sonix.JPG",
    text: `Sonix was created using the MERN Stack (MongoDB, Express, React, and Node). 
    This social media application allows users to create/ react to other user's 
    posts. Authentication provided by Google OAuth!`,
    link: "",
    shown: false,
    text2: (
      <div className="generic-subsections">
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://www.linkedin.com/posts/nicholas-cenek-91ba5b173_hello-all-its-about-that-time-that-i-show-activity-7074516359140835329-LkBs?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noreferrer"
        >
          Watch Video
        </a>
      </div>
    ),
  },
  {
    title: "Vertigo",
    image: "images/vertigo.JPG",
    text: `Vertigo is made with Unity and FMOD. This project allowed me to get more in-depth with Object Oriented Programming with 
    C#, video game integration, as well as an introduction to the capabilities of the .NET framework.`,
    link: "",
    shown: false,
    text2: (
      <div className="generic-subsections">
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://www.linkedin.com/posts/nicholas-cenek-91ba5b173_i-figured-that-it-was-time-to-post-my-new-activity-7110759358929477632-KKTa?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noreferrer"
        >
          Watch Video
        </a>
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://github.com/NCenek2/UnityGames"
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
    ),
  },
  {
    title: "Chat App",
    image: "images/chatapp.JPG",
    text: `This chat application is made with Windows Presentation Application, C#, and Tcp sockets. 
    This project is relatively small but gave me the opportunity to learn more about sockets and 
    developing using a MVVM approach!`,
    link: "",
    shown: false,
    text2: (
      <div className="generic-subsections">
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://youtu.be/cTbcoGC5wls"
          target="_blank"
          rel="noreferrer"
        >
          Watch Video
        </a>
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://github.com/NCenek2/ChatApplication"
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
    ),
  },
  {
    title: "Wordle",
    image: "images/wordle.JPG",
    text: `Want to play Wordle more than once a day? You can with my knock off Wordle. If you're tired of
    5 letters per word, try 4 or 6 letters!`,
    link: "",
    shown: false,
    text2: (
      <div className="generic-subsections">
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://ncenek2.github.io/wordle/"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://github.com/NCenek2/NCenek2.github.io/blob/main/src/Front%20End%20Development/Wordle/Wordle.jsx"
          target="_blank"
          rel="noreferrer"
        >
          View Code
        </a>
      </div>
    ),
  },
  {
    title: "Snake Game",
    image: "images/snake_game.JPG",
    text: `The classic snake game uses WASD as controls. For mobile users, you can toggle a joystick to play. 
    Built using a Linked List data structure.`,
    link: "",
    shown: false,
    text2: (
      <div className="generic-subsections">
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://ncenek2.github.io/snake-game/"
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
        <a
          className="btn btn-secondary"
          style={{ width: "150px" }}
          href="https://github.com/NCenek2/NCenek2.github.io/blob/main/src/Front%20End%20Development/Snake_Game/SnakeGame.jsx"
          target="_blank"
          rel="noreferrer"
        >
          View Code
        </a>
      </div>
    ),
  },
  {
    title: "Matlab",
    image: "images/matlab_subsection.JPG",
    text: 'Learn more about the first "programming language" that sparked my interest into the coding world!',
    link: "/matlab",
    shown: false,
    text2: "",
  },
];

export default sectionsData;
