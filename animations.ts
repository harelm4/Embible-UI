import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate('{{time}}'),
    style({ opacity: 1 }),
  ]),
]);

export const fadeOut = trigger('fadeOut', [
  transition(':leave', [animate('{{time}} ease-out'), style({ opacity: 0 })]),
]);

export const fadeInOut = trigger('fadeIn', [
  state('open', style({ opacity: 1 })),
  state('closed', style({ opacity: 0 })),
  transition('open => closed', animate('1s ease-out')),
  transition('closed => open', animate('1s ease-in')),
]);
export const sideFadeInAnimation = trigger('sideFadeInAnimation', [
  // The 'void => *' transition means that the animation will apply
  // to elements that are being added to the page.
  transition('void => *', [
    // The style function defines a set of styles that will be applied
    // to the element at different stages of the animation.
    style({
      transform: 'translatex(-10%)',
      opacity: 0,
    }),
    animate(
      '{{time}} ease-in',
      style({
        transform: 'translateX(0)',
        opacity: 1,
      })
    ),
  ]),
]);
export const upFadeInAnimation = trigger('upFadeInAnimation', [
  // The 'void => *' transition means that the animation will apply
  // to elements that are being added to the page.
  transition('void => *', [
    // The style function defines a set of styles that will be applied
    // to the element at different stages of the animation.
    style({
      transform: 'translatey(-10%)',
      opacity: 0,
    }),
    animate(
      '{{time}} ease-in',
      style({
        transform: 'translateX(0)',
        opacity: 1,
      })
    ),
  ]),
]);
