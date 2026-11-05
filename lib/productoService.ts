const API_URL = 'http://localhost:8080';

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

export async function obtenerProductos(): Promise<Producto[]> {
    try {
        const response = await fetch(`${API_URL}/api/productos`);
        if (!response.ok) {
            throw new Error('Error al conectar con el servidor');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return [];
    }
}