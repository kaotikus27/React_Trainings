import Button from "./Buttons/Buttons";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰Bill value</label>
      <input type="text" />

      <label>🤦‍♂️ Your Expense</label>
      <input type="text" />

      <label>🤼 X's Expense</label>
      <input type="text" />

      <label>💸Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend" n>
          X
        </option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
