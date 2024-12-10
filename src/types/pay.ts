export interface PaymentType {
  transactionId: number;
  userId: number;
  paymentId: number;
  orderId: string;
  orderName: string;
  sellerId: number;
  amount: number;
  pointToUse: number;
  transactionType: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
