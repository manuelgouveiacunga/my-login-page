import { useForm } from "react-hook-form";

interface Props {
  onClose: () => void;
}

interface ResetData {
  email: string;
}

export default function ForgotPasswordModal({ onClose }: Props) {
  const { register, handleSubmit } = useForm<ResetData>();

  const onSubmit = (data: ResetData) => {
    console.log("Recuperação enviada:", data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-primary">
            Recuperar senha
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-primary text-xl font-bold"
          >
            ×
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">
          Digite seu email para receber um link de recuperação
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Digite seu email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            {...register("email")}
          />

          <button
            type="submit"
            className="bg-primary text-white p-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors mt-2"
          >
            Enviar link
          </button>
        </form>
      </div>
    </div>
  );
}