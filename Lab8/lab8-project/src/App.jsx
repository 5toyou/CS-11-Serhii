import './App.css';
import { Login } from './components/login.component/login.component.jsx';
import { MainComponent } from './components/main.component/main.component.jsx';
import { NotFoundPageComponent } from './components/notFound/notFoundPage.component.jsx';
import { Registration } from './components/registration.component/registration.component.jsx';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import { AuthorizedWrapper, NonAuthorizedWrapper } from './components/wrapper/wrapper.component.jsx';
import { AllPostsComponent } from './components/allPosts.component/allPosts.component.jsx';
import { Post } from './components/post.component/post.component.jsx';
import { PostPage } from './components/postPage.component/postPage.component.jsx';
import { AuthorsComponent } from './components/authors.component/authors.component.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={NonAuthorizedWrapper}>
          <Route index Component={MainComponent} />
          <Route path='/posts' Component={AllPostsComponent} />
          <Route path='/authors' Component={AuthorsComponent} />
          <Route path='/posts/:postId' Component={PostPage} />
        </Route>
        <Route path='/page-404' Component={NotFoundPageComponent} />
        <Route path='/*' Component={NotFoundPageComponent} />
        <Route path='/' Component={AuthorizedWrapper}>
          <Route path='/registration' Component={Registration} />
          <Route path='/login' Component={Login} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
