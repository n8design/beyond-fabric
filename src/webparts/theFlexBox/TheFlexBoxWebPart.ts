import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TheFlexBoxWebPart.module.scss';
import * as strings from 'TheFlexBoxWebPartStrings';

export interface ITheFlexBoxWebPartProps {
  description: string;
}

export default class TheFlexBoxWebPart extends BaseClientSideWebPart<ITheFlexBoxWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.theFlexBox}">
        <ul class="${styles.theList}">
          <li class="${styles.theItem}">A</li>
          <li class="${styles.theItem}">B</li>
          <li class="${styles.theItem}">C</li>
          <li class="${styles.theItem}">D</li>
          <li class="${styles.theItem}">E</li>
          <li class="${styles.theItem}">F</li>
          <li class="${styles.theItem}">G</li>
          <li class="${styles.theItem}">H</li>
        </ul>
      </div>`;
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
