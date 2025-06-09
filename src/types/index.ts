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

export interface IForm extends IComponent {
  validate(): boolean;
  onInput(field: string, value: string): void;
  clear(): void;
}

export interface IEvents {
  on<T extends object>(event: string | RegExp, callback: (data: T) => void): void;
  emit<T extends object>(event: string, data?: T): void;
  trigger<T extends object>(event: string, context?: Partial<T>): (data: T) => void;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export type ApiListResponse<Type> = {
  total: number;
  items: Type[];
};

export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApiService {
  get<T extends object>(uri: string): Promise<T>;
  post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export interface IProductModel {
  setProducts(items: IProductItem[]): void;
  getProduct(id: string): IProductItem | undefined;
  getProducts(): IProductItem[];
}

export interface ICartModel {
  getCart(): ICart;
  addToCart(product: IProductItem): void;
  removeFromCart(productId: string): void;
  clearCart(): void;
}

export interface IOrderModel {
  setOrder(order: IOrderLot): void;
  getOrder(): IOrderLot;
  clearOrder(): void;
}
