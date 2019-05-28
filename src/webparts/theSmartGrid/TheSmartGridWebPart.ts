import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './TheSmartGridWebPart.module.scss';
import * as strings from 'TheSmartGridWebPartStrings';

export interface ITheSmartGridWebPartProps {
  description: string;
}

export default class TheSmartGridWebPart extends BaseClientSideWebPart<ITheSmartGridWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.theSmartGrid }">
        <div class="${ styles.container }">
          <div>Grid Debug</div>
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
