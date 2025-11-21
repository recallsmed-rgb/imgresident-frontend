const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export interface User {
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}

export interface AuthResponse {
  token: string; 
  user: {
    email: string;
    firstName: string;
    lastName: string;
  };
}

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const token = localStorage.getItem('auth_token');
    if (token) {
      (headers as any)['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  }

  async login(credentials: Pick<User, 'email' | 'password'>): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async register(userData: User): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  initiateGoogleLogin() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }

  async createCheckoutSession(items: { id: string, title: string, price: number }[]): Promise<{ checkoutUrl: string }> {
    return this.request<{ checkoutUrl: string }>('/checkout/create', {
      method: 'POST',
      body: JSON.stringify({ items }),
    });
  }
}

export const api = new ApiService();
