/// <reference types="nativewind/types" />

// Informa ao TypeScript que imports de arquivos .css são válidos.
// Quem processa esses arquivos é o Metro (via NativeWind), não o tsc.
declare module '*.css';
