export interface ApiResponse<T> {
    data: T,
    mesaage: string,
    success: boolean
}