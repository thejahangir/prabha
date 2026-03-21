export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'completed' | 'pending' | 'failed' | 'refunded';
export type PaymentMethod = 'Credit Card' | 'Debit Card' | 'PayPal' | 'Apple Pay' | 'Google Pay';

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  variant?: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: OrderStatus;
  trackingNumber?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  id: string;
  orderId: string;
  customerName: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId: string;
  date: string;
  last4?: string;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
  orders: number;
}

export interface TopProduct {
  productId: string;
  name: string;
  image: string;
  sales: number;
  revenue: number;
}

export interface AnalyticsSummary {
  totalRevenue: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
  revenueGrowth: number; // percent vs last month
  ordersGrowth: number;
  revenueByMonth: RevenuePoint[];
  topProducts: TopProduct[];
  orderStatusBreakdown: Record<OrderStatus, number>;
}

// ─── Mock Orders ──────────────────────────────────────────────────────────────
export const mockOrders: Order[] = [
  {
    id: 'ORD-2026-0001',
    customerId: 'CUS-001',
    customerName: 'Emily Johnson',
    email: 'emily.j@example.com',
    phone: '+1 555 012 3456',
    address: '24 Rosewood Lane',
    city: 'New York',
    country: 'USA',
    items: [
      { productId: '1', productName: 'Luminous Glow Serum', productImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200', price: 38.40, quantity: 1 },
      { productId: '3', productName: 'Purifying Clay Mask', productImage: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&q=80&w=200', price: 30.60, quantity: 2 },
    ],
    subtotal: 99.60,
    shipping: 0,
    tax: 8.96,
    total: 108.56,
    status: 'delivered',
    trackingNumber: 'TRK9823741',
    createdAt: '2026-03-10T09:15:00Z',
    updatedAt: '2026-03-14T16:30:00Z',
  },
  {
    id: 'ORD-2026-0002',
    customerId: 'CUS-002',
    customerName: 'Sophia Martinez',
    email: 'sophia.m@example.com',
    phone: '+1 555 987 6543',
    address: '8 Magnolia Street',
    city: 'Los Angeles',
    country: 'USA',
    items: [
      { productId: '2', productName: 'Velvet Matte Lipstick', productImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200', price: 24, quantity: 3, variant: 'Ruby Red' },
    ],
    subtotal: 72,
    shipping: 5.99,
    tax: 6.48,
    total: 84.47,
    status: 'shipped',
    trackingNumber: 'TRK5512984',
    createdAt: '2026-03-15T11:40:00Z',
    updatedAt: '2026-03-17T08:00:00Z',
  },
  {
    id: 'ORD-2026-0003',
    customerId: 'CUS-003',
    customerName: 'Aisha Khan',
    email: 'aisha.k@example.com',
    phone: '+1 555 246 8101',
    address: '33 Tulip Avenue',
    city: 'Chicago',
    country: 'USA',
    items: [
      { productId: '11', productName: 'Signature Floral Perfume', productImage: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=200', price: 63.75, quantity: 1 },
      { productId: '5', productName: 'Nourishing Body Butter', productImage: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=200', price: 42, quantity: 1 },
    ],
    subtotal: 105.75,
    shipping: 0,
    tax: 9.52,
    total: 115.27,
    status: 'processing',
    createdAt: '2026-03-18T14:22:00Z',
    updatedAt: '2026-03-18T14:22:00Z',
  },
  {
    id: 'ORD-2026-0004',
    customerId: 'CUS-004',
    customerName: 'Clara Bennett',
    email: 'clara.b@example.com',
    phone: '+1 555 135 7924',
    address: '99 Oak Street',
    city: 'Houston',
    country: 'USA',
    items: [
      { productId: '12', productName: 'The Starter Set', productImage: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200', price: 58.50, quantity: 1 },
    ],
    subtotal: 58.50,
    shipping: 5.99,
    tax: 5.27,
    total: 69.76,
    status: 'pending',
    createdAt: '2026-03-20T07:05:00Z',
    updatedAt: '2026-03-20T07:05:00Z',
  },
  {
    id: 'ORD-2026-0005',
    customerId: 'CUS-005',
    customerName: 'Laura Kim',
    email: 'laura.k@example.com',
    phone: '+1 555 864 2097',
    address: '5 Birch Boulevard',
    city: 'Miami',
    country: 'USA',
    items: [
      { productId: '7', productName: 'Gentle Foaming Cleanser', productImage: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200', price: 32, quantity: 2 },
      { productId: '10', productName: 'Daily SPF 30 Sunscreen', productImage: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200', price: 38, quantity: 1 },
    ],
    subtotal: 102,
    shipping: 0,
    tax: 9.18,
    total: 111.18,
    status: 'cancelled',
    notes: 'Customer requested cancellation.',
    createdAt: '2026-03-19T09:33:00Z',
    updatedAt: '2026-03-19T12:10:00Z',
  },
];

// ─── Mock Payments ────────────────────────────────────────────────────────────
export const mockPayments: Payment[] = [
  { id: 'PAY-001', orderId: 'ORD-2026-0001', customerName: 'Emily Johnson', amount: 108.56, method: 'Credit Card', status: 'completed', transactionId: 'TXN-CC-88291', date: '2026-03-10T09:18:00Z', last4: '4242' },
  { id: 'PAY-002', orderId: 'ORD-2026-0002', customerName: 'Sophia Martinez', amount: 84.47, method: 'PayPal', status: 'completed', transactionId: 'TXN-PP-99124', date: '2026-03-15T11:42:00Z' },
  { id: 'PAY-003', orderId: 'ORD-2026-0003', customerName: 'Aisha Khan', amount: 115.27, method: 'Apple Pay', status: 'pending', transactionId: 'TXN-AP-55013', date: '2026-03-18T14:25:00Z' },
  { id: 'PAY-004', orderId: 'ORD-2026-0004', customerName: 'Clara Bennett', amount: 69.76, method: 'Debit Card', status: 'pending', transactionId: 'TXN-DC-22847', date: '2026-03-20T07:08:00Z', last4: '1234' },
  { id: 'PAY-005', orderId: 'ORD-2026-0005', customerName: 'Laura Kim', amount: 111.18, method: 'Credit Card', status: 'refunded', transactionId: 'TXN-CC-71923', date: '2026-03-19T09:36:00Z', last4: '9876' },
  { id: 'PAY-006', orderId: 'ORD-2026-0000', customerName: 'Priya Patel', amount: 52.00, method: 'Google Pay', status: 'completed', transactionId: 'TXN-GP-66471', date: '2026-03-08T15:20:00Z' },
  { id: 'PAY-007', orderId: 'ORD-2026-0000', customerName: 'Diana Lee', amount: 78.30, method: 'Credit Card', status: 'failed', transactionId: 'TXN-CC-30041', date: '2026-03-12T10:05:00Z', last4: '5555' },
];

// ─── Analytics ───────────────────────────────────────────────────────────────
export const analyticsSummary: AnalyticsSummary = {
  totalRevenue: 24680.50,
  totalOrders: 148,
  totalProducts: 12,
  totalCustomers: 94,
  revenueGrowth: 12.4,
  ordersGrowth: 8.7,
  revenueByMonth: [
    { month: 'Oct', revenue: 3400, orders: 22 },
    { month: 'Nov', revenue: 4200, orders: 28 },
    { month: 'Dec', revenue: 6800, orders: 45 },
    { month: 'Jan', revenue: 3100, orders: 20 },
    { month: 'Feb', revenue: 3980, orders: 26 },
    { month: 'Mar', revenue: 3200, orders: 22 },
  ],
  topProducts: [
    { productId: '10', name: 'Daily SPF 30 Sunscreen', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200', sales: 342, revenue: 12996 },
    { productId: '3', name: 'Purifying Clay Mask', image: 'https://images.unsplash.com/photo-1591360236480-4ed861025fa1?auto=format&fit=crop&q=80&w=200', sales: 210, revenue: 6426 },
    { productId: '12', name: 'The Starter Set', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200', sales: 215, revenue: 12577.5 },
    { productId: '1', name: 'Luminous Glow Serum', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=200', sales: 124, revenue: 4761.6 },
    { productId: '5', name: 'Nourishing Body Butter', image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=200', sales: 156, revenue: 6552 },
  ],
  orderStatusBreakdown: {
    pending: 18,
    processing: 24,
    shipped: 32,
    delivered: 62,
    cancelled: 12,
  },
};
