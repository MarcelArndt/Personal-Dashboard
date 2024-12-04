export interface ShoppingItem {
    title: string;
    amount: number;
    isEdit: boolean;
  }
  
export interface ShoppingList {
    [id: string]: ShoppingItem;
  }