import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reverse'
})
export class ReverseStringPipe implements PipeTransform {
    transform(value: string) {
        return value.split('').reverse().join('');
    }
}