export type FoodType = {
  name: string;
  description: string;
  price: number;
};

export type CartType = {
  foods: FoodType[];
  totalPrice: number;
  totalAmount: number;
};
