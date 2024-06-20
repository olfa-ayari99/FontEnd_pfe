/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Offre {
  idOffre?: number;
  nomOffre?: string;
  users?: Array<User>;
  idUser?: number;
}
