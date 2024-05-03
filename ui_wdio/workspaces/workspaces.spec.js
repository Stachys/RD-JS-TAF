import { createWorkspace } from '../../api/workspaces/workspaces.api.js';
import { workspaceData } from '../../api/workspaces/data/workspaceData.js';

describe('Workspaces', async () => {
    before(async () => {
        workspaceData.workspace.name += Date.now();
        await createWorkspace(workspaceData);
    });

    beforeEach(async () => {
        await browser.url('https://web.postman.co/');
    });

    it('user can view created workspace in workspaces dropdown menu', async () => {
        const workspacesDropdown = await $('.workspace-switcher');
        await workspacesDropdown.click();

        const workspacesList = await $('.workspace-switcher__list');
        const createdWorkspace = await workspacesList.$(`//*[text()='${workspaceData.workspace.name}']`);

        await expect(createdWorkspace).toBeDisplayed();
    });

    it('user can view created workspace in all workspaces page', async () => {
        const workspacesDropdown = await $('.workspace-switcher');
        await workspacesDropdown.click();

        const allWorkspacesLink = await $('.workspace-switcher__footer');
        await allWorkspacesLink.click();

        const workspacesList = await $('//*[@data-testid="workspace-list-element-heading"]');
        const createdWorkspace = await workspacesList.$(`//*[text()='${workspaceData.workspace.name}']`);

        await expect(createdWorkspace).toBeDisplayed();
    });
});
