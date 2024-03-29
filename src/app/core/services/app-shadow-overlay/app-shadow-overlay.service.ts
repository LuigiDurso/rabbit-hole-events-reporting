import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppShadowOverlayService {

  overlayShadowSignal: WritableSignal<boolean> = signal(false);
}
