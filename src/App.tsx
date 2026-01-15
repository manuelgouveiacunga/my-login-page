import { useState } from "react";
import LoginForm from "./components/LoginForm";
import ForgotPasswordModal from "./components/ForgotPasswordModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-3">
            Bem-vindo de volta
          </h1>
          <p className="text-gray-600">
            Faça login para continuar
          </p>
        </div>

        <LoginForm onForgotPassword={() => setShowModal(true)} />

        {showModal && <ForgotPasswordModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default App;