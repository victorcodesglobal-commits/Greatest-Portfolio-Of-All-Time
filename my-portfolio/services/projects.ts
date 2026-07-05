import {
  addProject,
  getProjects,
  deleteProject,
  getProject,
  updateProject,
} from "@/lib/firestore";

export async function createProject(project: any) {
  return addProject(project);
}

export async function fetchProjects() {
  return getProjects();
}

export async function removeProject(id: string) {
  return deleteProject(id);
}

export async function fetchProject(id: string) {
  return getProject(id);
}

export async function editProject(
  id: string,
  data: any
) {
  return updateProject(id, data);
}