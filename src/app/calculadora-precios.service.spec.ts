import { TestBed } from '@angular/core/testing';

import { CalculadoraPreciosService } from './calculadora-precios.service';

describe('CalculadoraPreciosService', () => {
  let service: CalculadoraPreciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraPreciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Prueba 1 (2 Puntos): Cálculo de descuento estándar
  it('debería calcular correctamente un descuento del 15% sobre un precio base de 200', () => {
    const precioBase = 200;
    const porcentajeDescuento = 15;
    const resultadoEsperado = 170;
    
    const resultado = service.aplicarDescuento(precioBase, porcentajeDescuento);
    
    expect(resultado).toBe(resultadoEsperado);
  });

  
  // Prueba 2 (2 Puntos): Caso límite - descuento 0%
  it('debería retornar el precio base cuando el descuento es 0%', () => {
    const precioBase = 200;
    const porcentajeDescuento = 0;
    
    const resultado = service.aplicarDescuento(precioBase, porcentajeDescuento);
    
    expect(resultado).toBe(precioBase);
  });

  // Prueba 3 (2 Puntos): Caso límite - descuento 100%
  it('debería retornar 0 cuando el descuento es 100%', () => {
    const precioBase = 200;
    const porcentajeDescuento = 100;
    const resultadoEsperado = 0;
    
    const resultado = service.aplicarDescuento(precioBase, porcentajeDescuento);
    
    expect(resultado).toBe(resultadoEsperado);
  });

  // Prueba 4 (3 Puntos): TDD - Validación precio negativo
  it('debería retornar null cuando el precio base es negativo', () => {
    const precioBase = -50;
    const porcentajeDescuento = 15;
    
    const resultado = service.aplicarDescuento(precioBase, porcentajeDescuento);
    
    expect(resultado).toBeNull();
  });
});
