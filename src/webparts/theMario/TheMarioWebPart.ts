import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TheMarioWebPart.module.scss';
import * as strings from 'TheMarioWebPartStrings';

export interface ITheMarioWebPartProps {
  description: string;
}

export default class TheMarioWebPart extends BaseClientSideWebPart<ITheMarioWebPartProps> {

  public render(): void {

    var baseGrid = (() => {

      let _baseGrid = "";

      for(let i = 0; i < 265; i++){

        _baseGrid += "<div></div>";

      }

      return _baseGrid;

    })();

    this.domElement.innerHTML = `
      <div class="${ styles.theMario }">
        <section>
        ${ baseGrid }
        </section>
      </div>
      <div class="${ styles.credits }">Code Stolen from <a href="https://codepen.io/tungkradle/pen/GYwvyO">Tugradle</a></div>
      `;
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
