import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 posts : any[];
 private url= 'http://jsonplaceholder.typicode.com/posts'
 
  constructor(private service:PostService) {  

  }
  CreatePost(input:HTMLInputElement){
   let post ={
   title:input.value
  };
  

 this.service.Create(post) .subscribe((response :any)=> {
   console.log(response);
   post['id']= response.id ;
   this.posts.splice(0,0,post);
   

  },(error:Response)=>{
    if(error.status===400){
      alert('Posst is already created');
    }
    else throw error; });

  }

   onUpdatePost(post){
   
    this.service.Update(post.id)
    .subscribe(response =>{
      console.log(response);  
     
    });

  }
    onDelete(post){

     this.service.delete(400)
     .subscribe((response:any)=>{
      let index= this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error : Response)=>{
      if(error.status === 400)
      alert('Post alreay deleted');
      else throw error  });


    }

    ngOnInit(){
    
      this.service.Onget()
      .subscribe(posts =>{
        this.posts = posts;
      }); 

    }

  }





  


