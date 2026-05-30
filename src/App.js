import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const technologies = [
    {
      title: "React",
      description:
        "A powerful JavaScript library used to build modern and interactive user interfaces."
    },
    {
      title: "Node.js",
      description:
        "A runtime environment that allows JavaScript to run on the server side."
    },
    {
      title: "JavaScript",
      description:
        "The core programming language used to create dynamic web applications."
    },
    {
      title: "HTML5",
      description:
        "Provides the structure and content of web pages."
    },
    {
      title: "CSS3",
      description:
        "Used for styling, layouts, animations, and responsive design."
    },
    {
      title: "Bootstrap",
      description:
        "A popular CSS framework for creating responsive websites quickly."
    }
  ];

  return (
    <div className="app">
      <Header
        title="React Components Dashboard"
        subtitle="Reusable Components Using Props and State"
      />

      {/* Technology Cards */}
      <div className="card-container">
        {technologies.map((tech, index) => (
          <Card
            key={index}
            title={tech.title}
            description={tech.description}
          />
        ))}
      </div>

      {/* Counter Section */}
      <div className="counter-section">
        <h2>Counter State Demo</h2>

        <p className="count-value">Current Count: {count}</p>

        <div className="counter-buttons">
          <Button
            text="Increase"
            onClick={() => setCount(count + 1)}
          />

          <Button
            text="Decrease"
            onClick={() => setCount(count - 1)}
          />
        </div>
      </div>

      {/* User Registration Form */}
      <Form />

      <Footer text="© 2026 React Components Project | Internship Assignment" />
    </div>
  );
}

export default App;
