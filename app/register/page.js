import { Button } from "@heroui/button";

export default function Register()
{
return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Registrace</h2>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Váš e-mail:</label>
          <input
            type="email"
            placeholder="vasemail@email.cz"
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1">Vaše heslo:</label>
          <input
            type="password"
            placeholder="heslo123"
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          />
        </div>

        <Button className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition">
          Registrovat se
        </Button>
      </div>
    </div>
);
}