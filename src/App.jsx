import React from "react";
import { Routes, Route } from "react-router-dom";
import Clock from "./components/Clock";
import CountTimer from "./components/CountTimer";
import LocalTime from "./components/LocalTime";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Clock />
              </MainLayout>
            }
          />
          <Route
            path="/count-timer"
            element={
              <MainLayout>
                <CountTimer />
              </MainLayout>
            }
          />
          <Route
            path="/local-time"
            element={
              <MainLayout>
                <LocalTime />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
