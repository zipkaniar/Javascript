// Authentication - Kullanıcı Doğrulama İşlemleri
// Service URL :  Server adresi - API adresi
// https://taskpeer.com/api/v1/auth

// Yöntemler - Classic Authentication - Token Based Authentication - Role Based Authentication - Social Authentication
class Authentication {
    constructor(serviceUrl) {
        this.serviceUrl = serviceUrl
    }

    /**
     * Sends a login request to the server using the provided email and password.
     *
     * @param {string} email - The email of the user.
     * @param {string} password - The password of the user.
     * @return {Promise} A Promise that resolves to the response from the server.
     */
    login(email, password) {
        return fetch(`${this.serviceUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
    }

    /**
     * Sends a sign-in request to the server using Google authentication.
     *
     * @return {Promise} A Promise that resolves to the response from the server.
     */
    signWithGoogle() {
        return fetch(`${this.serviceUrl}/login/google`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }


    /**
     * Sends a sign-in request to the server using the specified role for authentication.
     *
     * @param {string} role - The role to use for authentication.
     * @return {Promise} A Promise that resolves to the response from the server.
     */
    signWithRole(role) {
        return fetch(`${this.serviceUrl}/login/${role}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}