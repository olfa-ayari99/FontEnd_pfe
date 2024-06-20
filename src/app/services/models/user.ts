/* tslint:disable */
/* eslint-disable */
import { Derangement } from '../models/derangement';
import { Offre } from '../models/offre';
import { Token } from '../models/token';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  address?: string;
  credentialsNonExpired?: boolean;
  derangementSet?: Array<Derangement>;
  email: string;
  enabled?: boolean;
  firstname: string;
  idUser?: number;
  lastname: string;
  offre?: Offre;
  password: string;
  role?: 'USER' | 'AOT' | 'ASC' | 'ADMIN';
  telNum?: string;
  tokens?: Array<Token>;
  username?: string;
  currentPassword?:any;
  
}
