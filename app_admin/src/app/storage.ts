import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => localStorage
});