export interface IProductItem {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

export interface IActions {
  onClick: (event: MouseEvent) => void;
}

export interface IOrderForm {
  payment?: string;
  address?: string;
  phone?: string;
  email?: string;
  total?: string | number;
}

export interface IOrder extends IOrderForm {
  items: string[];
}

export interface IOrderLot {
  payment: string;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
}

export interface IOrderResult {
  id: string;
  total: number;
}

export interface ICartItem {
  product: IProductItem;
  quantity: number;
}

export interface ICart {
  items: ICartItem[];
  total: number;
}

export interface IComponent {
  render(): HTMLElement;
  destroy(): void;
}

export interface IModal extends IComponent {
  open(): void;
  close(): void;
}

export type EventCallback = (...args: any[]) => void;

export interface IEventEmitter {
  on(event: string, callback: EventCallback): void;
  off(event: string, callback: EventCallback): void;
  emit(event: string, ...args: any[]): void;
}
