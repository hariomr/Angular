import { CanDeactivateFn } from '@angular/router';


export interface CanComponentDeactivate {
    canDeactivate: () => boolean | Promise<boolean>;
}

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component, currentRoute, currentState, nextState) => {
    if (component.canDeactivate) {
        return component.canDeactivate();  
    }
    return false;  
};
