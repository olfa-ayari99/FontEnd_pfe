/* tslint:disable */
/* eslint-disable */
import { Derangement } from '../models/derangement';
export interface ClientImpacte {
  conatact2?: string;
  contact1?: string;
  derangements?: Array<Derangement>;
  idClient?: number;
  ip?: string;
  libelleOffre?: string;
  login?: string;
  numeroLigne?: string;
  typeClient?: 'B2C' | 'B2B';
}
