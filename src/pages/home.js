import React, { Component } from 'react';
import List from './../components/list';
import { ProgressBar } from 'react-materialize';
import { Link} from 'react-router-dom'
class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null,
      error: null,
    }
  }

  componentDidMount() {

    // Get data from API
    fetch('http://localhost:1337')
      // parse response
    //  .then((res) => res.json())
      // use parsed response
      // parse response
      .then((res) => {
        if (res.status !== 200) {
          console.log(res)
          this.setState({
            error: {
              code: res.status,
              message: res.statusText,
            },
          });
        } else {
            //  this.setState({
            //    data: Object.values(res.json()),
            //  })
            //
            //console.log(res.json())
          return res.json();
        }
      })
      .then(data => this.setState({data : data}))
  }

  render() {

    const { data } = this.state;
    const {error} = this.state;
    console.log(this.state.data);

    return (
      <div>

        <h2> HomePage </h2>



        {(!data && !error) ?
             (
              <ProgressBar/>
            )
            :
            !error? (
          <div>
            <List data={data} />
          </div>
        ) :
        error.code +' '+ error.message
         }
      </div>
    );
  }

}

export default HomePage;
