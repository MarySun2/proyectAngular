import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myapp';

  styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    padding: '20px',
    width: '200px',
  }

  // products: any;

  ngOnInit(): void {
    // this.products = products
  }
}
