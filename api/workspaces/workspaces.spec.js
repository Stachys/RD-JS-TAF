import { expect } from 'chai';
import { createWorkspace, deleteWorkspace, getAllWorkspaces, getWorkspace } from './workspaces.api.js';
import { workspaceData } from './data/workspaceData.js';

describe('Workspaces', async () => {
    it('user can create a workspace', async () => {
        const { workspace } = await createWorkspace(workspaceData);

        expect(workspace).to.have.all.keys('id', 'name');
        expect(workspace.name).to.equal(workspaceData.workspace.name);
    });

    it('user can retrieve a created workspace', async () => {
        const { workspace: createdWorkspace } = await createWorkspace(workspaceData);
        const { workspace: receivedWorkspace } = await getWorkspace(createdWorkspace.id);

        expect(receivedWorkspace.id).to.equal(createdWorkspace.id);
    });

    it('user can retrieve all created workspaces', async () => {
        const { workspace: createdWorkspace } = await createWorkspace(workspaceData);
        const { workspaces } = await getAllWorkspaces();

        expect(workspaces).to.be.an('array');
        expect(workspaces).to.not.be.empty;

        const isWorkspaceRetrieved = workspaces.some(workspace => workspace.id === createdWorkspace.id);
        expect(isWorkspaceRetrieved, 'Created workspace was not retrieved').to.be.true;
    });

    it('user can delete all workspaces', async () => {
        await createWorkspace(workspaceData);
        const { workspaces } = await getAllWorkspaces();

        for (const workspace of workspaces) {
            await deleteWorkspace(workspace.id);
        }

        const { workspaces: remainingWorkspaces } = await getAllWorkspaces();
        expect(remainingWorkspaces).to.be.empty;
    });
});