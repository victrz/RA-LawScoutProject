
import Carousel from './Carousel';
import FormModel from '../model/formmodel';

export default class App {
    constructor()
    {
        console.log("Creating the App");
        // this.CarouselCellView1 = new CarouselCellView1();
        // this.CarouselCellView2 = new CarouselCellView2();
        // this.CarouselCellView3 = new CarouselCellView3();
        // this.CarouselCellView4 = new CarouselCellView4();
        // this.CarouselView = new CarouselView(this.CarouselCellView1, this.CarouselCellView2, this.CarouselCellView3, this.CarouselCellView4);
        // this.Carousel = new Carousel(this);
        // this.FormModel = new FormModel();
    }

    init(){

      console.log("in app init");
      this.Carousel.createCarousel();
    }
}
