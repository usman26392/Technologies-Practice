import { useActionState } from "react";
import { subscribeToNewsletter } from "../../actions/subscribe-news-letter";


export default function NewsLetterForm() {
    const [state, formAction, isPending] = useActionState(subscribeToNewsletter, {
        success: null,
        message: "",
    });

    // console.log("state", state);
    // console.log("formAction", formAction)
    // console.log("isPending", isPending);




    return (
        <section style={{ maxWidth: "400px", padding: "20px", border: "1px solid #ddd" }}>
            <h3>Join our Weekly Newsletter</h3>

            <form action={formAction}>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        disabled={isPending}
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    style={{ width: "100%", padding: "10px", cursor: isPending ? "not-allowed" : "pointer" }}
                >
                    {isPending ? "Subscribing..." : "Subscribe Now"}
                </button>
            </form>

            {/* Feedback Messages */}
            {state.message && (
                <p style={{
                    marginTop: "15px",
                    color: state.success ? "green" : "red",
                    fontWeight: "bold"
                }}>
                    {state.message}
                </p>
            )}
        </section>
    )
}
