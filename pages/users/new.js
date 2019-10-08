import Layout from '../../components/MyLayout';
import Router from 'next/router'
import Link from 'next/link';
import 'jquery'
import {FormattedMessage} from 'react-intl';

class Index extends React.Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this);
    this.state = {category: 0}
  }
  navigate(e){
    const path = $(e.target).attr('path');
    return Router.push(path);
  }
  render(){

    return (
      <Layout>

      <div class="container">
      <form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Category name" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Color</label>
    <select class="form-control" id="exampleFormControlSelect1">
    <option value="primary" className="badge-primary">  Blue</option>
    <option value="secondary" className="badge-secondary">  Grey</option>
    <option value="success" className="badge-success">  Green</option>
    <option value="danger"  className="badge-danger">  Red</option>
    <option value="warning" className="badge-warning">  Yellow</option>
    <option value="info" className="badge-info">  Light Blue</option>
    <option value="light" className="badge-light">  Milky</option>
    <option value="dark" className="badge-dark">  Black</option>
    <option value="">  White</option>

    </select>
  </div>

  <div class="form-group float-right px-2">
    <button type="submit" className="btn btn-lg btn-primary">save</button>
  </div>
</form>


  </div>
      </Layout>
    );
  }
}

export default Index
