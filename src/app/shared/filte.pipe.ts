import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    const arr: any[] = items.map((e)=> {return e})
    if (!arr) {
      return items
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return arr.filter(item => {
      return item.name.toLocaleLowerCase().includes(searchText);
    });
  }
}