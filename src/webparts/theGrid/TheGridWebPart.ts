import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TheGridWebPart.module.scss';
import * as strings from 'TheGridWebPartStrings';

export interface ITheGridWebPartProps {
  description: string;
}

export default class TheGridWebPart extends BaseClientSideWebPart<ITheGridWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.theGrid }">
        <div class="${styles.box1}">
          container1
        </div>
        <div class="${styles.box2}">
          container2
        </div>
        <div class="${styles.box3}">
          container3
        </div>
        <div class="${styles.box4}">
          container4
        </div>
        <div class="${styles.box5}">
          container5
        </div>
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
