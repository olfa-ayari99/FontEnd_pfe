/* tslint:disable */
/* eslint-disable */
import { Equipement } from '../models/equipement';
import { User } from '../models/user';
export interface Derangement {
  cause?: string;
  dateConstat?: string;
  dateCreationDer?: string;
  dateDebutDerangement?: string;
  dateResolutionPrevu?: string;
  dateResolutionReel?: string;
  delaiPrevisionnel?: string;
  equipement?: Equipement;
  idDerangement?: number;
  latidude?: number;
  longitude?: number;
  nomDerangement?: string;
  porteur?: string;
  profilePlateauConcerne?: string;
  reseau?: string;
  script?: string;
  serviceImpacte?: string;
  statut?: 'OUVERT' | 'FERME';
  idUser?: number;
}
