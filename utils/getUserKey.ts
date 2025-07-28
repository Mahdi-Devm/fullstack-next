export function getUserKey() {
  let userKey = localStorage.getItem("userKey");
  if (!userKey) {
    userKey = crypto.randomUUID();
    localStorage.setItem("userKey", userKey);
  }
  return userKey;
}
