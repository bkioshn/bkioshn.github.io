import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PicProject from './PicProject';
import './ProjectStyle.css';

class Project extends React.Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
            picGame: [
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/game/1game.PNG?raw=true", id: 1},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/game/2game.PNG?raw=true", id: 2},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/game/3game.PNG?raw=true", id: 3},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/game/5game.PNG?raw=true", id: 4},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/game/4game.PNG?raw=true", id: 5},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/game/6game.PNG?raw=true", id: 6}
            ],
            picCar: [
                {img:"https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/car/1.PNG?raw=true", id: 1},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/car/94853.jpg?raw=true", id: 2},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/car/94855.jpg?raw=true", id: 3},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/car/94857.jpg?raw=true", id: 4},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/car/94858.jpg?raw=true", id: 5},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/car/94860.jpg?raw=true", id: 6},
            ],
            picWeb: [
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/Tuatan/1.PNG?raw=true", id: 1},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/Tuatan/2.PNG?raw=true", id: 2},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/Tuatan/3.PNG?raw=true", id: 3},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/Tuatan/4.PNG?raw=true", id: 4},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/Tuatan/5.PNG?raw=true", id: 5},
                {img: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Website/Tuatan/6.PNG?raw=true", id: 6},
            ]
        }

    }

    componentDidMount() {
        window.addEventListener("resize", this.updateScreen);
    }

    updateScreen = () => {
        this.setState({
            width: window.innerWidth
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateScreen);
    }
/*
    display = () => {
        if (this.state.width >= 768) {
            const itemList = this.state.picGame.map((item) => {
                return(
                    <div className="col-md-4" key={item.id}>
                        <a href={item.img}>
                            <img className="img-fluid" src={item.img} />
                        </a>
                    </div>
                );
            });
            return(
                // <!-- Picture for > small screen -->
                <div className="container">
                    <div className="row">
                        {itemList}
                    </div>
                </div>
            );
        } else {
            const itemList = this.state.picGame.map((item) => {
                return(
                    <CarouselItem itemId={item.id} key={item.id}>
                        <View>
                            <img className="d-block w-100" src={item.img}/>
                        </View>
                    </CarouselItem>
                );
            });
        
            return( 
                <Carousel activeItem={1} length={this.state.picGame.length} showControls={true} showIndicators={true} className="z-depth-1">
                    <CarouselInner>
                        {itemList}
                    </CarouselInner>
                </Carousel>

            );
        }
    }
*/
    title = (name, caption) => {
        return(
            <div className="container" id={name}>
                <h3>{caption}</h3>
            </div>
        );
    }

    render() {
        return(        
            <div className="container" id="game">
                {this.title("game", "Sustainability Game Jam: Save the WHALE!")}
                <PicProject picName={this.state.picGame} width={this.state.width} />
                {this.title("car", "Obstacle Avoiding Car")}
                <PicProject picName={this.state.picCar} width={this.state.width} />
                {this.title("website", "Web Design (HTML and CSS): Tuatan.com")}
                <PicProject picName={this.state.picWeb} width={this.state.width} />
            </div>
        );
    }
}

export default Project;

