import { Component } from 'react'
import { Link } from 'react-router-dom'
import './gallery.css'

export default class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
    }
      
  }
  

  render() {
    
    return (
      <section className="gallery">
        {this.props.data.map((item) => {
          return (
            <div className="galleryItem" key={item.id}>
              <Link to={`/accomodation?id=${item.id}`}>
                <img
                  className="galleryItemImage"
                  src={item.cover}
                  alt={item.title}
                />
                <div className="blackGradient" />
                <h3 className="galleryItemText">{item.title}</h3>
              </Link>
            </div>
          )
         
        })}
      </section>
    )
  }
}
