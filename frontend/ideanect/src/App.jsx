import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navber';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Ideas from './pages/Ideas';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './Pages/Dashboard';
import IdeaSubmit from './Pages/Ideasubmit';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['investor']}>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/submit-idea" 
              element={
                <ProtectedRoute allowedRoles={['creator']}>
                  <IdeaSubmit />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </AuthProvider>
      <Footer/>
    </Router>
  );
}

export default App;