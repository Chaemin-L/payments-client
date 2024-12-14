export interface FinalResponse<T> {
  status: number;
  message: string;
  data: T;
}

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
  redirectUri: string;
  bankName: string;
  accountNum: string;
  pointBalance: number;
  balance: number;
}

export interface PointType {
  userId: number;
  pointBalance: number;
  accumulatedPoints: number;
  redeemedPoints: number;
}

export interface PayType {
  payNum: number;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}
