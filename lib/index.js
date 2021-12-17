import { IMainMenu } from '@jupyterlab/mainmenu';
import { Menu } from '@lumino/widgets';
import { ICommandPalette } from '@jupyterlab/apputils';
/**
 * Initialization data for the main menu example.
 */
const extension = {
    id: 'Airflow-mainMenu',
    autoStart: true,
    requires: [ICommandPalette, IMainMenu],
    activate: (app, palette, mainMenu) => {
        const { commands } = app;
        // Add a command
        const command1 = 'AirflowDataPlatform';
        commands.addCommand(command1, {
            label: 'Airflow DataPlatform',
            caption: 'Airflow DataPlatform',
            execute: (args) => {
                window.open('https://cf-airflow.curefit.co/', '_blank');
            },
        });
        const command2 = 'Commuter';
        commands.addCommand(command2, {
            label: 'Commuter',
            caption: 'Commuter',
            execute: (args) => {
                window.open('https://dataplatform-commuter.curefit.co/view/', '_blank');
            },
        });
        const command3 = 'CfDatalabDoc';
        commands.addCommand(command3, {
            label: 'Cf-Data-Lab-Doc',
            caption: 'Cf-Data-Lab-Doc',
            execute: (args) => {
                window.open('https://readme-cfdatalab.curefit.co/', '_blank');
            },
        });
        const command4 = 'Metabase';
        commands.addCommand(command4, {
            label: 'Metabase',
            caption: 'Metabase',
            execute: (args) => {
                window.open('https://metabase.curefit.co/', '_blank');
            },
        });
        const command5 = 'Metastore';
        commands.addCommand(command5, {
            label: 'Metastore',
            caption: 'Metastore',
            execute: (args) => {
                window.open('https://metastore.curefit.co', '_blank');
            },
        });
        // Add the command to the command palette
        const category = 'DataPlatform';
        palette.addItem({
            command: command1,
            category,
            args: { origin: 'from the palette' },
        });
        palette.addItem({
            command: command2,
            category,
            args: { origin: 'from the palette' },
        });
        palette.addItem({
            command: command3,
            category,
            args: { origin: 'from the palette' },
        });
        palette.addItem({
            command: command4,
            category,
            args: { origin: 'from the palette' },
        });
        palette.addItem({
            command: command5,
            category,
            args: { origin: 'from the palette' },
        });
        // Create a menu
        const airflowMenu = new Menu({ commands });
        airflowMenu.title.label = 'Data Platforms';
        mainMenu.addMenu(airflowMenu, { rank: 80 });
        // Add the command to the menu
        airflowMenu.addItem({ command: command1, args: { origin: 'from the menu' } });
        airflowMenu.addItem({ command: command2, args: { origin: 'from the menu' } });
        airflowMenu.addItem({ command: command3, args: { origin: 'from the menu' } });
        airflowMenu.addItem({ command: command4, args: { origin: 'from the menu' } });
        airflowMenu.addItem({ command: command5, args: { origin: 'from the menu' } });
    },
};
export default extension;
