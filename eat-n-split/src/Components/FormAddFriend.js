import { useState } from "react";
import Button from "./Buttons/Buttons";

export default function FormAddFriend() {
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      friendName,
      friendImg: `${friendImg}?=${id}`,
      balance: 0,
      id,
    };
    console.log(newFriend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🤼 Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label>🌆 Image URL</label>
      <input
        type="text"
        value={friendImg}
        onChange={(e) => setFriendImg(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
