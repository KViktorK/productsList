import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[dropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpne = false;
    @HostListener('click') toggleOpem(){
        this.isOpne = !this.isOpne
    }
}