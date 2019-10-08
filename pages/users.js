import Layout from '../components/MyLayout';
import Router from 'next/router'
import Link from 'next/link';
import 'jquery'

class Index extends React.Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this);
  }
  navigate(e){
    const path = $(e.target).attr('path');
    return Router.push(path);
  }
  render(){
    return (
      <Layout>

      <main role="main" className="mb-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
              <h1 className="h2">Users</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
              <button type="button" onClick={this.navigate} path="/users/new" className="btn btn-sm btn-outline-secondary">+ New User</button>
            </div>

          </div>
            </div>
      <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Role</th>
        <th scope="col">Manage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>

</main>

      </Layout>
    );
  }
}

export default Index
