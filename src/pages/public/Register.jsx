export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bridge-card w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="bridge-input mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="bridge-input mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="bridge-input mb-6"
        />

        <button className="btn-primary w-full">
          Create Account
        </button>
      </div>
    </div>
  );
}