import { Component, computed, signal } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-signal-test',
    templateUrl: './signal-test.component.html'
})
export class SignalTestComponent {

    price = signal<number>(0);
    totalPrice = computed<number>(() => this.price() * 10);

    updatePrice(newPrice: string) {
        this.price.set(+newPrice);
    }

}