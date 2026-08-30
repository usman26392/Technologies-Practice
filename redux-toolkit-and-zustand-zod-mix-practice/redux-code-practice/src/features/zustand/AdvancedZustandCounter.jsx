import { useCounterStore } from "./counterStore";

/**
 * Advanced Counter with Amount Input
 *
 * This component demonstrates:
 * - Accessing different parts of the store
 * - Passing parameters to store actions
 * - Multiple components accessing the same store state
 */

function AdvancedZustandCounter() {
  const count = useCounterStore((state) => state.count);
  const incrementByAmount = useCounterStore(
    (state) => state.incrementByAmount
  );

  const handleAddAmount = () => {
    const amount = parseInt(document.getElementById("amount-input").value) || 0;
    if (amount !== 0) {
      incrementByAmount(amount);
      document.getElementById("amount-input").value = "";
    }
  };

  return (
    <div className="zustand-counter advanced-counter">
      <h2>🎯 Advanced Counter with Custom Amount</h2>
      <div className="counter-display">
        <p className="counter-label">Current Count:</p>
        <p className="counter-value">{count}</p>
      </div>

      <div className="input-group">
        <input
          id="amount-input"
          type="number"
          placeholder="Enter amount"
          className="amount-input"
          onKeyPress={(e) => e.key === "Enter" && handleAddAmount()}
        />
        <button onClick={handleAddAmount} className="btn btn-primary">
          Add Amount
        </button>
      </div>

      <p className="info-text">
        The same counter is shared between both components!
      </p>
    </div>
  );
}

export default AdvancedZustandCounter;
