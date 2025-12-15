
import React, { useState } from "react";
import axios from "axios";

type RegisterForm = {
  email: string;
  full_name: string;
  password: string;
  confirm_password: string;
};

const API_BASE = import.meta.env.VITE_API_BASE ?? "http://localhost:8000";

const RegisterComp: React.FC = () => {
  const [form, setForm] = useState<RegisterForm>({
    email: "",
    full_name: "",
    password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (form.password !== form.confirm_password) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(`${API_BASE}/api/users/register`, {
        email: form.email,
        full_name: form.full_name,
        password: form.password,
      });

      setMessage({ type: "success", text: `Registered: ${data.full_name}` });
      setForm({ email: "", full_name: "", password: "", confirm_password: "" });
    } catch (err: any) {
      const detail = err?.response?.data?.detail ?? "Registration failed";
      setMessage({ type: "error", text: detail });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 bg-[#12121A] p-6 rounded-xl">
      <h2 className="text-white text-2xl font-semibold">Create your account</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={onChange}
        required
        className="w-full p-3 rounded bg-[#1C1C24] text-white"
      />
      <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        value={form.full_name}
        onChange={onChange}
        required
        className="w-full p-3 rounded bg-[#1C1C24] text-white"
      />
      <input
        type="password"
        name="password"
        placeholder="Password (min 8 chars)"
        value={form.password}
        onChange={onChange}
        required
        className="w-full p-3 rounded bg-[#1C1C24] text-white"
      />
      <input
        type="password"
        name="confirm_password"
        placeholder="Confirm Password"
        value={form.confirm_password}
        onChange={onChange}
        required
        className="w-full p-3 rounded bg-[#1C1C24] text-white"
      />

      <button
        type="submit"
        className="w-full py-3 rounded bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>

      {message && (
        <div
          className={`mt-2 p-3 rounded ${
            message.type === "success" ? "bg-green-600" : "bg-red-600"
          } text-white`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
};

export default RegisterComp;
