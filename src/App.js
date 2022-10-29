import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
<div className="container">
    <Navbar />
    <Routes>
          <Route path="/" component={ExercisesList} />
          <Route path="edit/:id" component={EditExercise} />
          <Route path="create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
    </Routes>
    </div>
  );
}

export default App;
