import Cookies from 'js-cookie'

export function getCookie(Key) {
  return Cookies.get(Key)
}

export function setCookie(Key, value) {
  return Cookies.set(Key, value, { expires: 1 })
}

export function removeCookie(Key) {
  return Cookies.remove(Key)
}
