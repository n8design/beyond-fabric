import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TicTacGridWebPart.module.scss';
import * as strings from 'TicTacGridWebPartStrings';


let index = 0;

export interface ITicTacGridWebPartProps {
  description: string;
}

export default class TicTacGridWebPart extends BaseClientSideWebPart<ITicTacGridWebPartProps> {

  private index : number;


  public clickCell(evt: Event){

    let curStyles : CSSStyleDeclaration = window.getComputedStyle(evt.target as Element);

    let curColumn = curStyles.getPropertyValue('grid-column'),
      curRow = curStyles.getPropertyValue('grid-row');

      console.log('Column ::: ', curColumn);
      console.log('Row :::::: ', curRow);
      console.log('INDEXXXXXX   ', index);

    let curDomElement : HTMLElement = <HTMLElement>evt.target;

    console.log(curDomElement.classList.toString());

    if(curDomElement.classList.toString().indexOf('active') === -1){

      index = index+1;

      curDomElement.classList.add('active-' + index);

    }

  }

  public registerEvents(): void{

    let gridItems = this.domElement.querySelectorAll("div[class^='grid']");
    gridItems.forEach(item =>{

      item.addEventListener('click', this.clickCell);

    })

  }

  public render(): void {

    this.index = 0;

    let selectMatrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];

    let board = ""

    selectMatrix.forEach((row, rowIndex) =>{
      row.forEach((cell, cellIndex) =>{
        board += `<div class='grid${rowIndex+1}${cellIndex+1}'></div>`;
      })
    })

    this.domElement.insertAdjacentHTML("afterbegin", `
      <div class="${styles.ticTacGrid}">${board}</div>
    `);

    this.registerEvents();

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
