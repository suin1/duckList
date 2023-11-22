import { useState } from "react";
import catData from "../assets/DB/catData";
import "../assets/style/Friends.css";

const Friends = () => {
  const [cats, setCats] = useState(catData);
  const [initialCats, setInitialCats] = useState(catData);
  const [additionalInactive, setAdditionalInactive] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [newCatAge, setNewCatAge] = useState("");
  const [newCatImage, setNewCatImage] = useState("");

  const handleDelete = (id) => {
    const updatedCats = cats.filter((cat) => cat.id !== id);
    setCats(updatedCats);
  };

  const handleDeleteAll = () => {
    setCats([]);
  };

  const handleRestore = () => {
    setCats(initialCats);
  };

  const handleAdditionalInactiveChange = () => {
    setAdditionalInactive(!additionalInactive);
  };

  const handleAddCat = () => {
    const newCat = {
      id: cats.length + 1,
      name: newCatName,
      age: newCatAge,
      image: newCatImage,
    };

    setCats([...cats, newCat]);

    setNewCatName("");
    setNewCatAge("");
    setNewCatImage("");
  };

  return (
    <div className="borderTop">
      <div className="header">
        <h2>오리 친구들: {cats.length}</h2>
        <label>
          <input
            type="checkbox"
            checked={additionalInactive}
            onChange={handleAdditionalInactiveChange}
          />
          오리 추가
        </label>
      </div>
      <ul>
        {cats.map((cat) => (
          <li
            key={cat.id}
            className={`cat ${additionalInactive ? "inactive" : ""}`}
          >
            <img src={cat.image} alt={cat.name} />
            <div className="main">
              <p className="name">이름: {cat.name}</p>
              <p>나이: {cat.age}</p>
              <button onClick={() => handleDelete(cat.id)}>삭제</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="buttonsContainer">
        <button onClick={handleDeleteAll}>모두 삭제</button>
        <button onClick={handleRestore}>초기 복구</button>
      </div>
      {additionalInactive && (
        <div className="additionalModule">
          <label>
            이름:
            <input
              type="text"
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
            />
          </label>
          <label>
            나이:
            <input
              type="text"
              value={newCatAge}
              onChange={(e) => setNewCatAge(e.target.value)}
            />
          </label>
          <label>
            사진 :
            <input
              type="text"
              value={newCatImage}
              onChange={(e) => setNewCatImage(e.target.value)}
            />
          </label>
          <button onClick={handleAddCat}>추가</button>
        </div>
      )}
    </div>
  );
};

export default Friends;
