/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addUser } from '../fn/user/add-user';
import { AddUser$Params } from '../fn/user/add-user';
import { affecterOffreAUtilisateurs } from '../fn/user/affecter-offre-a-utilisateurs';
import { AffecterOffreAUtilisateurs$Params } from '../fn/user/affecter-offre-a-utilisateurs';
import { changePassword } from '../fn/user/change-password';
import { ChangePassword$Params } from '../fn/user/change-password';
import { deleteUser } from '../fn/user/delete-user';
import { DeleteUser$Params } from '../fn/user/delete-user';
import { getAllUsers } from '../fn/user/get-all-users';
import { GetAllUsers$Params } from '../fn/user/get-all-users';
import { getUser } from '../fn/user/get-user';
import { GetUser$Params } from '../fn/user/get-user';
import { getUserById } from '../fn/user/get-user-by-id';
import { GetUserById$Params } from '../fn/user/get-user-by-id';
import { updateUser } from '../fn/user/update-user';
import { UpdateUser$Params } from '../fn/user/update-user';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateUser()` */
  static readonly UpdateUserPath = '/api/v1/user/updateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Response(params: UpdateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return updateUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser(params: UpdateUser$Params, context?: HttpContext): Observable<User> {
    return this.updateUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `affecterOffreAUtilisateurs()` */
  static readonly AffecterOffreAUtilisateursPath = '/api/v1/user/affecterOffre/{idOffre}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `affecterOffreAUtilisateurs()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */







  affecterOffreAUtilisateurs$Response(params: AffecterOffreAUtilisateurs$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return affecterOffreAUtilisateurs(this.http, this.rootUrl, params, context);
  }





  

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `affecterOffreAUtilisateurs$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */







 affecterOffreAUtilisateurs(params: AffecterOffreAUtilisateurs$Params, context?: HttpContext): Observable<string> {
    return this.affecterOffreAUtilisateurs$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }








  /** Path part for operation `addUser()` */
  static readonly AddUserPath = '/api/v1/user/addUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addUser$Response(params: AddUser$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return addUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addUser(params: AddUser$Params, context?: HttpContext): Observable<User> {
    return this.addUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `changePassword()` */
  static readonly ChangePasswordPath = '/api/v1/user/changePassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(params: ChangePassword$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return changePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params: ChangePassword$Params, context?: HttpContext): Observable<{
}> {
    return this.changePassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getUserById()` */
  static readonly GetUserByIdPath = '/api/v1/user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById$Response(params: GetUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return getUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById(params: GetUserById$Params, context?: HttpContext): Observable<User> {
    return this.getUserById$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `getUser()` */
  static readonly GetUserPath = '/api/v1/user/getlUser/{idUser}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Response(params: GetUser$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return getUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser(params: GetUser$Params, context?: HttpContext): Observable<User> {
    return this.getUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `getAllUsers()` */
  static readonly GetAllUsersPath = '/api/v1/user/getAllUsers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers$Response(params?: GetAllUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return getAllUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers(params?: GetAllUsers$Params, context?: HttpContext): Observable<Array<User>> {
    return this.getAllUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `deleteUser()` */
  static readonly DeleteUserPath = '/api/v1/user/deleteUser/{idUser}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser$Response(params: DeleteUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser(params: DeleteUser$Params, context?: HttpContext): Observable<void> {
    return this.deleteUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
