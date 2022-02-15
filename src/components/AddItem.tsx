import React, { useState } from "react";
import { InputContainer } from "./InputContainer";

export const AddItem: React.FC<Props> = ({ saveFormData }) => {
  const [formData, setFormData] = useState<DataItemInput>({
    name: "",
    price: "",
    quantity: "",
  });

  const handleInputData = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    saveFormData(formData);
    setFormData({ name: "", price: "", quantity: "" });
  };

  return (
      <InputContainer formData={formData} handleInputData={handleInputData} addNewItem={addNewItem} />  );
};

export default AddItem;
