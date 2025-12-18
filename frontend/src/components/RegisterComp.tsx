import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type RegisterForm = {
    email: string;
    username: string;
    full_name: string;
    password: string;
    confirm_password: string;
    phone: string;
    address: string;
    game_category: string;
};

const API_BASE = "http://localhost:8000";

// Map game names to backend category_id
const gameCategories: Record<string, number> = {
    "EFootball": 1,
    "PUBG Mobile": 2,
    "Valorant": 3,
    "FC": 4,
    "Mobile Legends": 5,
    "League of Legends": 6,
    "Fortnite": 7,
    "Dota": 8,
    "CSGO": 9,
};

const RegisterComp: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    const [form, setForm] = useState<RegisterForm>({
        email: "",
        username: "",
        full_name: "",
        password: "",
        confirm_password: "",
        phone: "",
        address: "",
        game_category: "",
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (form.password !== form.confirm_password) {
            setMessage({ type: "error", text: "Passwords do not match." });
            return;
        }
        setMessage(null);
        setStep(2);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        // Map game_category to category_id
        const category_id = gameCategories[form.game_category];

        if (!category_id) {
            setMessage({ type: "error", text: "Please select a valid game category." });
            setLoading(false);
            return;
        }

        try {
            const { data } = await axios.post(`${API_BASE}/auth/register`, {
                email: form.email,
                username: form.username,
                full_name: form.full_name,
                password: form.password,
                phone: form.phone,
                address: form.address,
                category_id: category_id,
            });

            setMessage({ type: "success", text: `Registered: ${data.username}` });

            // Redirect to login after 1 second
            setTimeout(() => navigate("/login"), 1000);

            // Reset form
            setStep(1);
            setForm({
                email: "",
                username: "",
                full_name: "",
                password: "",
                confirm_password: "",
                phone: "",
                address: "",
                game_category: "",
            });
        } catch (err: any) {
            setMessage({
                type: "error",
                text: err?.response?.data?.detail ?? "Registration failed",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={onSubmit} className="w-full max-w-md space-y-4 bg-[#12121A] p-6 rounded-xl">
            <h2 className="text-white text-2xl font-semibold">
                {step === 1 ? "Create Account" : "Profile Details"}
            </h2>

            {/* STEP 1 */}
            {step === 1 && (
                <>
                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} required className="w-full p-3 rounded bg-[#1C1C24] text-white"/>
                    <input type="text" name="username" placeholder="Username" value={form.username} onChange={onChange} required className="w-full p-3 rounded bg-[#1C1C24] text-white"/>
                    <input type="text" name="full_name" placeholder="Full Name" value={form.full_name} onChange={onChange} required className="w-full p-3 rounded bg-[#1C1C24] text-white"/>
                    <input type="password" name="password" placeholder="Password" value={form.password} onChange={onChange} required className="w-full p-3 rounded bg-[#1C1C24] text-white"/>
                    <input type="password" name="confirm_password" placeholder="Confirm Password" value={form.confirm_password} onChange={onChange} required className="w-full p-3 rounded bg-[#1C1C24] text-white"/>
                    <button type="button" onClick={nextStep} className="w-full py-3 rounded bg-indigo-600 text-white hover:bg-indigo-700">Next</button>
                </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
                <>
                    <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={onChange} required className="w-full p-3 rounded bg-[#1C1C24] text-white"/>
                    <input type="text" name="address" placeholder="Address" value={form.address} onChange={onChange} required className="w-full p-3 rounded bg-[#1C1C24] text-white"/>
                    <select name="game_category" value={form.game_category} onChange={onChange} required className="w-full p-3 rounded bg-[#1C1C24] text-white">
                        <option value="">Select Game Category</option>
                        {Object.keys(gameCategories).map(game => (
                            <option key={game} value={game}>{game}</option>
                        ))}
                    </select>

                    <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(1)} className="w-1/2 py-3 rounded bg-gray-600 text-white">Back</button>
                        <button type="submit" disabled={loading} className="w-1/2 py-3 rounded bg-green-600 text-white hover:bg-green-700">
                            {loading ? "Registering..." : "Register"}
                        </button>
                    </div>
                </>
            )}

            {message && (
                <div className={`p-3 rounded ${message.type === "success" ? "bg-green-600" : "bg-red-600"} text-white`}>
                    {message.text}
                </div>
            )}
        </form>
    );
};

export default RegisterComp;
