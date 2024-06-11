
import fichaTectMicros1 from '../assets/pdfs/medidor-dmp.pdf';
import fichaTectMicros2 from '../assets/pdfs/mvol-dorot.pdf';
import fichaTectMicros3 from '../assets/pdfs/micro-multijet.pdf';

import fichaTectMacro1 from '../assets/pdfs/macro-equysis-wf.pdf';
import fichaTectMacro2 from '../assets/pdfs/macro-equysis-if.pdf';
import fichaTectMacro3 from '../assets/pdfs/macro-adccom.pdf';



export const Equipos = () => {

  const listaMicromedidores = [
    {
      claveProducto: 'MICRO-001',
      modelo: 'DMP',
      marca: 'DOROT',
      diametro: "1/2,3/4,1 1/2,2,2 1/2",
      ficha: fichaTectMicros1, 
    },
    {
      claveProducto: 'MICRO-002',
      modelo: 'Volumètrico',
      marca: 'DOROT',
      diametro: "1/2,3/4,1 1/2,2,2 1/2",
      ficha: fichaTectMicros2,  
    },
    {
      claveProducto: 'MICRO-003',
      modelo: 'Multijet',
      marca: 'DOROT',
      diametro: "1/2,3/4,1 1/2,2,2 1/2",
      ficha: fichaTectMicros3,  
    },
  ]


  const listaMacromedidores = [
    {
      claveProducto: 'MACRO-001',
      modelo: 'Medidor Hélice Woltman Modelo WF',
      marca: 'Equysis',
      diametroNom: "50, 65, 80, 100, 150, 500",
      ficha: fichaTectMacro1,
    },
    {
      claveProducto: 'MACRO-002',
      modelo: 'Medidor Paleta Tangencial Modelo IF',
      marca: 'Equysis',
      diametroNom: "50, 65, 80, 100, 150, 200, 250",
      ficha: fichaTectMacro2,
    },
    {
      claveProducto: 'MACRO-003',
      modelo: 'Medidor Hélice Woltman con turnbina vertical Modelo WSP050',
      marca: 'Adccom',
      diametroNom: "50, 65, 80, 100, 150",
      ficha: fichaTectMacro3,
    },
  ]

  const listaValvulas =  [
    {
      claveProducto: 'VALVULA-001',
      modelo: 'Válvula ',
      marca: 'Equysis',
      diametro: "50, 65, 80, 100, 150, 500",
      ficha: fichaTectMacro1,
    },
    {
      claveProducto: 'VALVULA-002',
      modelo: 'Válvula',
      marca: 'Equysis',
      diametro: "50, 65, 80, 100, 150, 500",
      ficha: fichaTectMacro1,
    },
    {
      claveProducto: 'VALVULA-003',
      modelo: 'Válvula',
      marca: 'Equysis',
      diametro: "50, 65, 80, 100, 150, 500",
      ficha: fichaTectMacro1,
    },
  ]

  function openPDF_Ficha(product, claveProducto){
    // window.open("myurl/files/"+nombreArchivo+".pdf","_blank");
    let listaProdctos;

    switch (product) {
      case "micro":
        listaProdctos = listaMicromedidores;
        break;
      case "macro":
        listaProdctos = listaMacromedidores;
        break;
      case "valvula":
        listaProdctos = listaValvulas;
        break;
      default:
        break;
    }

    let ficha;
    Object.values(listaProdctos).map((prod) => {
      if (prod.claveProducto == claveProducto) {
        ficha = prod.ficha;
      }
    })
  
    window.open(ficha, "_blank")  
  }

  function openPDF_FichaMacro(claveProducto){
    // window.open("myurl/files/"+nombreArchivo+".pdf","_blank");
    let ficha;
    Object.values(listaMacromedidores).map((macro) => {
      if (macro.claveProducto == claveProducto) {
        ficha = macro.ficha;
      }
    })
  
    window.open(ficha, "_blank")  
  }

  return {
    listaMicromedidores,
    listaMacromedidores,
    listaValvulas,
    openPDF_Ficha,
    openPDF_FichaMacro,

  }
}
