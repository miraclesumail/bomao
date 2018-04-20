import { trigger ,state,transition,animate,style} from "@angular/animations";

export let slideUp =[
    trigger('show',[
       state('visable',style({
         opacity: 1,
         transform:'translate3d(0, 0, 0)'
       })),
       state('invisable', style({
         opacity: 0,
        transform:'translate3d(0, 100%, 0)'
       })),
       transition('* => *',animate('.5s'))
    ])
   ]