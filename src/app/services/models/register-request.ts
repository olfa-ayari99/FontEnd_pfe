/* tslint:disable */
/* eslint-disable */
export interface RegisterRequest {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  role?: 'USER' | 'AOT' | 'ASC' | 'ADMIN';
}
