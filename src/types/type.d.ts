interface DataItemInput {
  name: string;
  price: string;
  quantity: string;
}

interface DataItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

type DataState = {
  items: DataItem[];
  summary: number;
};

type DataAction = {
  type: string;
  payload: DataItem;
};

interface MessageProps {
  children: JSX.Element | JSX.Element[];
}

type Props = {
  saveFormData: (item: DataItem | any) => void;
};

type InputContainerType = {
  formData: DataItemInput;
  handleInputData: (value: DataItem | any) => void;
  addNewItem: any;
};
