export const saveAccessTokenToLocalStorage = () => {
    localStorage.setItem('accessToken', accessToken)
  }
  
  export const getAccessTokenFromLocalStorage = () => {
    return localStorage.getItem('accessToken') || ''
  }
  