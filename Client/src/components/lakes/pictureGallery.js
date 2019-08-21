import ImageGallery from 'react-image-gallery';
import React from 'react'
 
export default class PictureGallery extends React.Component {
 
  render() {
    const lake_pics = this.props.lakePics
    const images = []
    lake_pics.map(pic=>
        images.push({
        original: `${pic}`,
        thumbnail: `${pic}`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        thumbnailPosition: 'left',
        showBullets: true,
      },)
      
    
 )
 
    return (
      <ImageGallery style={{width:"100%"}} originalClass= 'featured-slide'
      thumbnailClass= 'featured-thumb'
      thumbnailPosition= 'left'
      showBullets= {true} items={images} />
    );
  }
 
}
