

import { useActionState } from "react";


// login action
// useActionState will pass the previous state and formData to this function
async function loginAction(prevState, formData) {
    console.log(formData);

    const email = formData.get("email");
    const password = formData.get("password");

    // Artificial:  Simulate a slow server response
     await new Promise((res) => setTimeout(res, 2000));

    if (email === "admin@test.com" && password === "1234") {
        return { success: true };
    }

    return { error: "Invalid credentials" };

}


// Component
export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(loginAction, null);

    return (
        <form action={formAction}>
            <input name="email" placeholder="Email" />
            <br />
            <input name="password" type="password" placeholder="password" />

            <br />
            <button disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
            </button>

            {state?.error && <p>{state.error}</p>}
            {state?.success && <p>Login successful !!!</p>}
        </form>
    );
}