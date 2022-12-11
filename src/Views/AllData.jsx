import React from 'react'

const AllData = () => {
  return (
   <>
   <div className='container-fluid bgrah'>
    <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-12'>
        <div class="card ">
            <div class="card-body">
              <h5 class="card-title">Hello Priyanshu</h5>

             
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Brandn Jacob</td>
                    <td>Designer</td>
                    <td><button className='btn btn-success'>Update</button></td>
                    <td><button className='btn btn-danger'>Delete</button></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Marie Kessler</td>
                    <td>Developer</td>
                    <td><button className='btn btn-success'>Update</button></td>
                    <td><button className='btn btn-danger'>Delete</button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ashleigh Langosh</td>
                    <td>Finance</td>
                    <td><button className='btn btn-success'>Update</button></td>
                    <td><button className='btn btn-danger'>Delete</button></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Anguds Grady</td>
                    <td>HR</td>
                    <td><button className='btn btn-success'>Update</button></td>
                    <td><button className='btn btn-danger'>Delete</button></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Raheem Lener</td>
                    <td>Dynamic Division Officer</td>
                    <td><button className='btn btn-success'>Update</button></td>
                    <td><button className='btn btn-danger'>Delete</button></td>
                  </tr>
                </tbody>
              </table>
             

            </div>
          </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default AllData