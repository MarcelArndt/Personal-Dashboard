export interface ShoppingItem {
    title: string;
    amount: number;
  }
  
export interface ShoppingList {
    [id: string]: ShoppingItem;
  }