export interface IProductItem {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

export interface IProductList {
  total: number;
  items: IProductItem[];
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

export interface IOrderError {
  error: string;
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

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface IApiClient {
  get<T>(endpoint: string): Promise<ApiResponse<T>>;
  post<T>(endpoint: string, data: any): Promise<ApiResponse<T>>;
  put<T>(endpoint: string, data: any): Promise<ApiResponse<T>>;
  delete<T>(endpoint: string): Promise<ApiResponse<T>>;
}

export interface IProductModel {
  getProducts(): Promise<IProductList>;
  getProduct(id: string): Promise<IProductItem>;
}

export interface ICartModel {
  getCart(): ICart;
  addToCart(product: IProductItem): void;
  removeFromCart(productId: string): void;
  clearCart(): void;
}

export interface IOrderModel {
  createOrder(form: IOrderLot): Promise<IOrderResult>;
  getOrders(): Promise<IOrder[]>;
}
