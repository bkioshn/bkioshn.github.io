import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View} from 'mdbreact';
import './PicProjectStyle.css';

function PicProject(props) {
    if (props.width >= 768) {
        const itemList = props.picName.map((item) => {
            return(
                <div className="col-md-4 picCol" key={item.id}>
                    <a href={item.img}>
                        <img className="img-fluid" src={item.img} />
                    </a>
                </div>
            );
        });
        return(
            // <!-- Picture for > small screen -->
            <div className="container">
                <div className="row picRow">
                    {itemList}
                </div>
            </div>
        );
    } else {
        const itemList = props.picName.map((item) => {
            return(
                <CarouselItem itemId={item.id} key={item.id}>
                    <View>
                        <img className="d-block w-100" src={item.img}/>
                    </View>
                </CarouselItem>
            );
        });
    
        return( 
            <Carousel activeItem={1} length={props.picName.length} showControls={true} showIndicators={true} className="z-depth-1">
                <CarouselInner>
                    {itemList}
                </CarouselInner>
            </Carousel>

        );
    }
}

export default PicProject;