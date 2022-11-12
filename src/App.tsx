import { Suspense, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import JobBoard from "./components/JobBoard";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <div className="md:container md:mx-auto px-8">
      <section className="section py-20">
        <Routes>
          <Route path="/testAleanLab" element={<JobBoard />}></Route>
          <Route path="/:cardId" element={<JobDetails />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
