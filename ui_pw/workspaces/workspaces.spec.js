import { test, expect } from '@playwright/test';
import { createWorkspace } from '../../api/workspaces/workspaces.api.js';
import { workspaceData } from '../../api/workspaces/data/workspaceData.js';

test.beforeAll(async () => {
    workspaceData.workspace.name += Date.now();
    await createWorkspace(workspaceData);
});

test.beforeEach(async ({ page }) => {
    await page.goto('https://web.postman.co/');
});

test('user can view created workspace in workspaces dropdown menu', async ({ page }) => {
    const workspacesDropdown = page.locator('.workspace-switcher');
    await workspacesDropdown.click();

    const workspacesList = page.locator('.workspace-switcher__list');
    const createdWorkspace = workspacesList.getByText(workspaceData.workspace.name);

    await expect(createdWorkspace).toBeVisible();
});

test('user can view created workspace in all workspaces page', async ({ page }) => {
    const workspacesDropdown = page.locator('.workspace-switcher');
    await workspacesDropdown.click();

    const allWorkspacesLink = page.locator('.workspace-switcher__footer');
    await allWorkspacesLink.click();

    const workspacesList = page.getByTestId('workspace-list-element-heading');
    const createdWorkspace = workspacesList.getByText(workspaceData.workspace.name);

    await expect(createdWorkspace).toBeVisible();
});
