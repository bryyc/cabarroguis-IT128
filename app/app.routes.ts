import { Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

export const routes: Routes = [
    {path: '', component: ListPostsComponent},
    {path: 'posts/:id', component: PostDetailComponent},
];
