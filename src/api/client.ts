import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { env } from '../config/env'

class ApiClient {
    private client: AxiosInstance

    constructor() {
        this.client = axios.create({
            baseURL: env.apiBaseUrl,
            timeout: env.apiTimeout,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })

        this.setupInterceptors()
    }

    private setupInterceptors() {
        this.client.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                return config
            },
            (error: unknown) => {
                return Promise.reject(error)
            }
        )

        this.client.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error: unknown) => {
                if (axios.isAxiosError(error) && error.response?.status === 401) {
                    console.error('Unauthorized access')
                }
                return Promise.reject(error)
            }
        )
    }

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.get(url, config)
        return response.data
    }

    async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.post(url, data, config)
        return response.data
    }

    async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.put(url, data, config)
        return response.data
    }

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.delete(url, config)
        return response.data
    }
}

export const apiClient = new ApiClient()
