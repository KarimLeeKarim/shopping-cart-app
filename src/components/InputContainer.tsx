import React from "react";

export const InputContainer: React.FC<InputContainerType> = ({
  formData,
  handleInputData,
  addNewItem,
}) => {    
  return (
    <form onSubmit={addNewItem} className="add-item">
      <input
        type="text"
        id="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputData}
        pattern="^[a-zA-Z]+$"
      />
      <input
        type="number"
        id="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleInputData}
        min="1"
      />
      <input
        type="number"
        id="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleInputData}
        min="1"
      />
      <button
        className="submit-form"
        type="submit"
        disabled={!formData.name || !formData.price || !formData.quantity}
        style={{
          background:
            !formData.name || !formData.price || !formData.quantity
              ? "rgb(141, 108, 202)"
              : "rgb(70, 19, 165)",
          cursor:
            !formData.name || !formData.price || !formData.quantity
              ? "auto"
              : "pointer",
        }}
      >
        Add item
      </button>
    </form>
  );
};
