import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraPreciosService {

  constructor() { }

  /**
   * Aplica un descuento porcentual al precio base
   * @param precioBase - El precio original antes del descuento
   * @param porcentajeDescuento - El porcentaje de descuento a aplicar (0-100)
   * @returns El precio final después del descuento, o null si el precio base es negativo
   */
  aplicarDescuento(precioBase: number, porcentajeDescuento: number): number | null {
    // Validación: precio base no puede ser negativo
    if (precioBase < 0) {
      return null;
    }

    // Corrección: Comparación estricta
    if (porcentajeDescuento === 100) {
      return 0;
    }

    // Calcular el descuento
    const descuento = (precioBase * porcentajeDescuento) / 100;
    const precioFinal = precioBase - descuento;
    
    return precioFinal;
  }
}
