/* tslint:disable */
/* eslint-disable */
import { Derangement } from '../models/derangement';
export interface Equipement {
  addresse?: string;
  derangements?: Array<Derangement>;
  idEquip?: number;
  idLocal?: number;
  latitude?: number;
  longitude?: number;
  nomEquipement?: string;
  ville?: string;
}
