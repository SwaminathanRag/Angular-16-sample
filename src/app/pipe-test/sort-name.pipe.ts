import { Pipe, PipeTransform } from "@angular/core";
import { Server } from "./pipe-test.component";

@Pipe({
    name: 'sortByName'
})
export class SortNamePipe implements PipeTransform {
    transform(value: any) {
        value.sort(this.comparefn);
        return value;
    }

    comparefn(a: Server, b: Server): number {
        if(a.name < b.name) {
            return -1;
        }
        else if(a.name > b.name) {
            return 1;
        }
        return 0;
    }
}