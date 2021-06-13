
import { BehaviorSubject } from "rxjs";

class AuthService {
    private authInfoSubject = new BehaviorSubject<any>(
        localStorage.getItem("user")
    );
    readonly authInfo = this.authInfoSubject.asObservable();
    public readonly login = (username: string, password: string) => {
        if (username === 'user' && password === '123456') {
            localStorage.setItem("user", username);
            this.authInfoSubject.next(username)
            return true;
        }
        return false;
    }
    public readonly logout = () => {
        localStorage.removeItem("user");
        this.authInfoSubject.next(null)
    };
    public readonly isAuthenticated = () => {
        const authInfo = localStorage.getItem("user");
        if (authInfo === null) {
            return false;
        }
        return true;
    }
    public readonly authInfoValue = () => {
        let currentUser: string = this.authInfoSubject.value;
        return currentUser;
    }
}
export const authService = new AuthService();