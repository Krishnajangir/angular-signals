import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-reactive-comp',
  templateUrl: './reactive-comp.component.html',
  styleUrls: ['./reactive-comp.component.scss']
})
export class ReactiveCompComponent {
  items = [{ name: 'Apples', quantity: 5, lastEditedBy: null }, { name: 'Bananas', quantity: 3, lastEditedBy: null }, { name: 'Milk', quantity: 1, lastEditedBy: null },];

  // Define a signal for the list of items
  itemList = signal(this.items);

  // Define a signal for the current user's name
  currentUser = signal('Husband');
  newItemName!: string;
  newItemQuantity!: number;

  addItem() {
    // Add a new item to the itemList signal with the current user's name as the last edited by value
    this.itemList.set([{ name: this.newItemName, quantity: this.newItemQuantity, lastEditedBy: null }]);

    // Clear the input fields
    this.newItemName = '';
    this.newItemQuantity = 0;
  }

  removeItem(item: any) {
    // Remove the selected item from the itemList signal
    this.itemList.set(this.itemList().filter((i) => i !== item));
  }
}
