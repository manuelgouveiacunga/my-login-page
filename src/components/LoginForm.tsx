import { useForm } from "react-hook-form";

interface Props {
  onForgotPassword: () => void;
}

interface LoginData {
  email: string;
  password: string;
}

export default function LoginForm({ onForgotPassword }: Props) {
  const { register, handleSubmit } = useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    console.log("Login enviado:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          {...register("email")}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Palavra-passe"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          {...register("password")}
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          type="button"
          className="text-sm text-gray-600 hover:text-primary transition-colors"
          onClick={onForgotPassword}
        >
          Esqueceu a senha?
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white p-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
      >
        Entrar
      </button>
    </form>
  );
}