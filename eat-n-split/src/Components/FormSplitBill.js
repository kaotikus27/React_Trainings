import Button from "./Buttons/Buttons";

export default function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰Bill value</label>
      <input type="text" />

      <label>🤦‍♂️ Your Expense</label>
      <input type="text" />

      <label>🤼 {selectedFriend.name}'s Expense</label>
      <input type="text" disabled />

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
