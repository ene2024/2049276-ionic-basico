import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { alumno } from '../alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {
  //alumnos : any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];

  constructor(private actionSheetCtrl: ActionSheetController) { }

  result: string = '';

  agregaAlumno(): void {
    this.alumnos.push(this.alumno)

    this.alumno={
      nombre: '',
      presente: false
    }
  }

  alumno: alumno = {
    nombre: '',
    presente: false
  }

  alumnos : alumno[] = [];

  ngOnInit() {}
  /*
  async Delete() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }*/
 
}
