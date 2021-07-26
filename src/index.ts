import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import { IMainMenu } from '@jupyterlab/mainmenu';

import { Menu } from '@lumino/widgets';

import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the main menu example.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'Airflow-mainMenu',
  autoStart: true,
  requires: [ICommandPalette, IMainMenu],
  activate: (
    app: JupyterFrontEnd,
    palette: ICommandPalette,
    mainMenu: IMainMenu
  ) => {
    const { commands } = app;

    // Add a command
    const command1 = 'Airflow DataPlatform';
    commands.addCommand(command1, {
      label: 'Airflow DataPlatform',
      caption: 'Airflow DataPlatform',
      execute: (args: any) => {
        window.open('https://dataplatform-airflow.curefit.co','_blank')
      },
    });

    const command2 = 'Airflow Local';
    commands.addCommand(command2, {
       label: 'Airflow Local',
       caption: 'Airflow Local',
       execute: (args: any) => {
          window.open('https://lccalhost:8080','_blank')
           },
         });

    const command3 = 'MyLab';
    commands.addCommand(command3, {
       label: 'MyLab',
       caption: 'MyLab',
       execute: (args: any) => {
       window.open('https://lccalhost:8080','_blank')
               },
      });


    // Add the command to the command palette
    const category = 'DataPlatform';
    palette.addItem({
       command:command1,
       category,
       args: { origin: 'from the palette' },
     });
     palette.addItem({
            command:command2,
            category,
            args: { origin: 'from the palette' },
      });
     palette.addItem({
               command:command3,
               category,
               args: { origin: 'from the palette' },
           });

    // Create a menu
    const airflowMenu: Menu = new Menu({ commands });
    airflowMenu.title.label = 'DataPlatform';
    mainMenu.addMenu(airflowMenu, { rank: 80 });



    // Add the command to the menu
    airflowMenu.addItem({ command:command1, args: { origin: 'from the menu' } });
    airflowMenu.addItem({ command:command2, args: { origin: 'from the menu' } });
    airflowMenu.addItem({ command:command3, args: { origin: 'from the menu' } });
  },
};




export default extension;

