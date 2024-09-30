export function onLogout() {
  const token = localStorage.getItem("token")
  if (token) {
    localStorage.removeItem("token")
    alert("Logged out")
    window.location.href = "/auth/login/"
  }
}