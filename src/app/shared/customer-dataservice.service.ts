import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { map } from 'rxjs/operators';

export class CustomerDataService {

constructor(private http: HttpClient) {}

  getService(url: string) {
    return this.http
      .get<Customer[]>(
        // 'https://ng-recipe-book-90131.firebaseio.com/recipes.json'
        url
      )
      .pipe(
        map(customers => {
          return customers.map(customer => {
            return {
              ...customer
            };
          });
        })
        // ,
        // tap(recipes => {
        //   // this.recipeService.setRecipes(recipes);
        //   console.log(recipes);
        // })
      )
  }

}