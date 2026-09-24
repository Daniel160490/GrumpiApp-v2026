export interface ItemTienda {
  id: string;
  name: string;
  description: string;
  cost: number;
  icon: string;
  category: 'objetos' | 'grumpis' | 'mejoras';
  color: string;
}
