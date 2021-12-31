import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  public bookForm: FormGroup;
  
  constructor(private formbuilder:FormBuilder, private service:BookService) { }

  ngOnInit(): void {
    this.bookForm = this.formbuilder.group({
      title:[],
      description:[]
    });
  }

  public saveBook():void{
    this.service.addBook(this.bookForm.value).subscribe(result =>
      {alert(`New book added with id = ${result.id}`)
    });

  }
  // private  init(): void{
  //   this.bookForm = this.formbuilder.group({
  //     title:[],
  //     description:[]
  //   });
  // }



}
