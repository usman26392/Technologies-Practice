import { useActionState } from "react";
import { addItem } from "../../actions/addItems";


// One quick tip: In a real app, you would likely send the new item to a database inside that action and return the updated list from the server.

export default function ShoppingList() {
    // state: starts as an empty array []
    const [items, formAction, isPending] = useActionState(addItem, []);

    console.log("item", items)

    return (
        <div>
            <h2>My Shopping List</h2>

            <form action={formAction}>
                <input
                    name="item"
                    placeholder="Add milk, eggs, etc."
                />
                <button type="submit" disabled={isPending}>
                    {isPending ? "Adding..." : "Add Item"}
                </button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {items.length === 0 && <p>Your list is empty!</p>}
        </div>
    )
}
