import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})

export class GeneralComponent implements OnInit {
  direccionX: any;
  direccionY: any;
  aleteo = 0;
  posicion = [0, 0];
  bird = {
    'width': '100px',
    'height': '100px',
    'background-image': 'url("../../../../assets/posado.png")',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'background-position': 'center center',
    'transform': 'scaleX(-1)'
  }
  // _url="../../../assets/posado.png";
  constructor() { }

  ngOnInit(): void {
    this.posicion[0]=window.scrollX
    this.posicion[1]=window.scrollY
    console.log('x: ',this.direccionX, 'y: ',this.direccionY)
    console.log('aleteo',this.aleteo)
    document.addEventListener('scroll', () => {
      //BIRD EN Y
      window.scrollY > this.posicion[1] ? this.direccionY = 1 : (window.scrollY == this.posicion[1] ? this.direccionY = 0 : this.direccionY = -1);
      window.scrollX > this.posicion[0] ? this.direccionX = 1 : (window.scrollX == this.posicion[0] ? this.direccionX = 0 : this.direccionX = -1);
      this.posicion[0] = window.scrollX;
      this.posicion[1] = window.scrollY;
      window.scrollX == 0 ? this.direccionX = 0 : this.direccionX = this.direccionX;
      window.scrollY == 0 ? this.direccionY = 0 : this.direccionY = this.direccionY;
      this.posicion[0] % 2 === 0 ? this.aleteo = 0 : this.aleteo = 1;
      console.log('x: ',this.direccionX, 'y: ',this.direccionY)
      console.log('aleteo',this.aleteo)
      //POSADO
      if (this.direccionX == 0 && this.direccionY == 0) {
        this.bird['background-image'] = 'url("../../../../assets/posado.png")'
        this.bird.transform = "scaleX(-1)"
      }
      //PARA ABAJO
      if (this.direccionX == 0 && this.direccionY == 1) {
        this.bird['background-image'] = 'url("../../../../assets/vertical.png")'
        this.bird.transform = "scaleY(-1)"
      }
      //PARA ARRIBA
      if (this.direccionX == 0 && this.direccionY == -1) {
        this.bird['background-image'] = 'url("../../../../assets/vertical.png")'
        this.bird.transform = "scaleY(1)"
      }
      //VOLANDO PARA LA DERECHA
      if (this.direccionX == 1 && this.direccionY == 0) {
        if (this.aleteo == 0) {
          this.bird['background-image'] = 'url("../../../../assets/alas arriba.png")'; this.bird.transform = "scaleX(1)"
        } else { this.bird['background-image'] = 'url("../../../../assets/alas abajo.png")'; this.bird.transform = "scaleX(-1)" }
      }
      //volando para la izquierda
      if (this.direccionX == -1 && this.direccionY == 0) {
        if (this.aleteo == 0) {
          this.bird['background-image'] = 'url("../../../../assets/alas arriba.png")'; this.bird.transform = "scaleX(-1)"
        } else { this.bird['background-image'] = 'url("../../../../assets/alas abajo.png")'; this.bird.transform = "scaleX(1)" }
      }

      // DIAGONALES
      //volando diagonal abajo a la derecha
      if (this.direccionX == 1 && this.direccionY == 1) {
        this.bird['background-image'] = 'url("../../../../assets/vertical.png")'
        this.bird.transform = "scaleY(-1),rotate(-45deg)"
      }
      //volando diagonal abajo a la izquierda
      if (this.direccionX == 1 && this.direccionY == -1) {
        this.bird['background-image'] = 'url("../../../../assets/vertical.png")'
        this.bird.transform = "scaleY(-1),rotate(45deg)"
      }
      //volando diagonal arriba a la izquierda
      if (this.direccionX == -1 && this.direccionY == -1) {
        this.bird['background-image'] = 'url("../../../../assets/vertical.png")'
        this.bird.transform = "scaleY(1),rotate(-45deg)"
      }
      //volando diagonal arriba a la derecha
      if (this.direccionX == -1 && this.direccionY == 1) {
        this.bird['background-image'] = 'url("../../../../assets/vertical.png")'
        this.bird.transform = "scaleY(1),rotate(45deg)"
      }








    })

  }
}
