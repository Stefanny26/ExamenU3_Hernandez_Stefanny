# Examen Unidad 3 - Programación Avanzada - Stefanny Hernández

## Proyecto: Calculadora de Precios con Pruebas Unitarias y Análisis de Calidad

### Descripción
Este proyecto Angular implementa un servicio para calcular precios con descuentos, desarrollado siguiendo el ciclo de vida TDD (Test-Driven Development) y analizado con SonarQube para garantizar la calidad del código.

### Características Implementadas

#### 1. Pruebas Unitarias con Karma y Jasmine (12 Puntos)
- ✅ **Prueba 1 (2 puntos)**: Cálculo de descuento estándar del 15%
- ✅ **Prueba 2 (2 puntos)**: Caso límite - descuento 0%
- ✅ **Prueba 3 (2 puntos)**: Caso límite - descuento 100%
- ✅ **Prueba 4 (3 puntos)**: TDD - Validación de precio negativo
- ✅ **Cobertura (1 punto)**: 100% de cobertura de código
- ✅ **Reporte (2 puntos)**: Reporte de cobertura generado

#### 2. Análisis de Calidad con SonarQube (8 Puntos)
- ✅ **Configuración (2 puntos)**: Archivo sonar-project.properties configurado
- 🔄 **Análisis inicial**: Pendiente ejecución en SonarCloud
- 🔄 **Corrección de bugs**: Identificación y corrección pendiente
- 🔄 **Refactorización**: Eliminación de code smells pendiente

### Estructura del Proyecto
```
src/
├── app/
│   ├── calculadora-precios.service.ts    # Servicio principal
│   ├── calculadora-precios.service.spec.ts # Pruebas unitarias
│   └── ...
├── sonar-project.properties               # Configuración SonarQube
└── coverage/                             # Reportes de cobertura
```

### Comandos Utilizados

#### Pruebas Unitarias
```bash
# Ejecutar pruebas
ng test --watch=false --browsers=ChromeHeadless

# Ejecutar con cobertura
ng test --code-coverage --watch=false --browsers=ChromeHeadless
```

#### SonarQube
```bash
# Análisis con SonarCloud
sonar-scanner
```

### Resultados de Pruebas
- **Total de pruebas**: 8 pruebas ejecutadas
- **Estado**: ✅ Todas las pruebas PASARON
- **Cobertura**: 100% en todas las métricas
  - Statements: 100% (9/9)
  - Branches: 100% (1/1) 
  - Functions: 100% (2/2)
  - Lines: 100% (8/8)

### Bugs Detectados por SonarQube (Intencionalmente agregados para demostración)
1. **Variable no utilizada**: `variableNoUtilizada` declarada pero no usada
2. **Comparación loose**: Uso de `==` en lugar de `===`
3. **Método no utilizado**: `metodoSinUsar()` sin referencias

### Próximos Pasos
1. Ejecutar análisis inicial en SonarCloud
2. Identificar y documentar bugs/code smells
3. Refactorizar código para eliminar problemas
4. Ejecutar análisis final para verificar mejoras

---
**Autor**: Stefanny Hernández  
**Fecha**: 15 de Agosto de 2025  
**Curso**: Programación Avanzada - 202550
