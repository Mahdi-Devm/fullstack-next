import React, { useActionState } from "react";
import createUser from "../../app/actions";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
const initialState = {
  error: false,
  errors: {},
};
function FormloginModal() {
  const [state, formAction, pending] = useActionState(createUser, initialState);

  return (
    <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-white to-gray-100 border border-gray-300 rounded-2xl shadow-2xl p-6 w-80 animate-fade-in">
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-4">
        Create Account
      </h2>
      <form action={formAction} className="flex flex-col gap-4">
        <div className="relative">
          <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            required
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
          />
        </div>

        <div className="relative">
          <MdEmail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
          />
        </div>

        <div className="relative">
          <RiLockPasswordLine className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
          />
        </div>

        {state?.message && (
          <p
            aria-live="polite"
            className="text-center text-sm text-green-600 font-medium"
          >
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className={`w-full px-4 py-2 rounded-lg text-white font-semibold transition-transform duration-200 ${
            pending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.03]"
          }`}
        >
          {pending ? "Signing up..." : "Sign up"}
        </button>
      </form>
    </div>
  );
}

export default FormloginModal;
