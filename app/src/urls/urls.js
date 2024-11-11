export const SERVER = 'http://localhost:8800/api/v1/';
export const LOGIN = SERVER + 'auth/login-user';
export const REGISTER = SERVER + 'auth/register-user';
export const GETDATABYCITY =
  SERVER + 'hotels/getByCity?cities=USA,Japan,New York,Dubai';
export const GETDATABYTYPE =
  SERVER +
  'hotels/getByType?types=Hight Luxury Hotel,Cottage,Apartment,Resort,Cabins';
export const GETSEARCHDATA = SERVER + 'hotels?featured=true&limit=4';
export const SEARCHHOTELS = SERVER + `hotels`;
