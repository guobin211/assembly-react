const isProd = process.env.NODE_ENV === 'production'

export enum StorageKey {
  USER_ROLE = 'R_USER_ROLE',
}

class AppManager {
  private _isProd: boolean = isProd
  get isProd() {
    return this._isProd
  }

  get isAdmin() {
    return !!localStorage.getItem(StorageKey.USER_ROLE)
  }
}

export const appManager = new AppManager()
